import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as AuthAction from '../../actions/userActions';
import RegisterForm from './RegisterForm';
class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            email:'',
            password:''

        }

    }
    handleChange=(name,value)=>{
        this.setState({[name]:value})
    }
    handleSubmit=(values)=>{
        const{username,password,email}=values;
        this.props.actions.register(username,password,email)
    }
  render() {
      const {registerFailed}=this.props;
    return (
      <div>
        <div>
            <h1>Register</h1>
            <RegisterForm
                isRegisterFailed= {registerFailed}
                onSubmit={(values)=>{
                    this.handleSubmit(values)
                }}
            
            />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  registerFailed :state.authentication
})

const mapDispatchToProps =dispatch=> ({
  actions: bindActionCreators(AuthAction,dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
