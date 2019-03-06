export default(values)=>{
    const errors={}

    if(!values.username){
        errors.name="Username required"
    }
    if(!values.email){
        errors.email='Email required'
    }
    if(!values.password){
        errors.password='Password required'
    }
    return errors



}