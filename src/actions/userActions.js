import * as types from '../Config/authConstant';
import API from '../utils/api';
import history from '../Config/history';

export const getUser = () => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem('authentication'));
    dispatch({ type: types.GET_USER, payload: user })

}
const loginRequest = (userId, token) => async (dispatch) => {
    try {
        {/*const response = await API.get(`/users/:${userId}`, {
            params: {
                access_token: token,
            },
        })
        localStorage.setItem(
            'authentication',
            JSON.stringify({ id: response.data.id, name: response.data.username }),
        )
        dispatch({type:types.GETALL_SUCCESS})*/}
        history.push('/home')
    }
    catch (err) {
        if(err.response.status===400){
            window.location.reload()
        }
        dispatch({type:types.GETALL_FAILURE,payload:err.message})
    }
}
export const login = (username,password)=> async (dispatch)=>{
    try{
        const {data} = await API.post('/users', {username,password})
        localStorage.setItem('token',data.id)
        dispatch({type:types.LOGIN_SUCCESS,payload:data})
        dispatch(loginRequest(data.userId,data.id))
    }catch(err){
        dispatch({type:types.LOGIN_FAILURE,payload:err.message})
    }

}
export const register = (username,email,password) => async (dispatch) => {
    try {
      await API.post('Users', {  username,email, password })
      dispatch({ type: types.REGISTER_SUCCESS })
      history.push('/login', { register: 'success' })
    } catch (err) {
      dispatch({ type: types.REGISTER_FAILURE, payload: err.message })
    }
  }
  
  export const logout = () => async (dispatch) => {
    try {
      localStorage.removeItem('authentication')
      localStorage.removeItem('token')
      dispatch({ type: types.LOGOUT })
      history.push('/login')
    } catch (err) {
      if (err.response.status === 401) {
        history.push('/login')
      }
      console.log(err)
    }
  }
  export const getAllUsers =()=> async (dispatch)=>{
    try{
      let response = await API.get('/users')
      let data = await response.json()
      dispatch({type:types.GETALL_SUCCESS,payload:data})

    }
    catch(err){
      console.log(err)
    }
  }
  export const createUser =(
    username,
    email,
    mobile,
    role,
    note,
    avatar,
    address,
    skill,
    experiences
    )=> async dispatch =>{
    try{
      const {data} = await API.post('/users',{
        username,
        email,
        mobile,
        role,
        note,
        avatar,
        address,
        skill,
        experiences
      })
      dispatch({type:types.CREATE_SUCCESS})
      history.push("/home")
    }
    catch(err){
      console.log(err)
    }
  }