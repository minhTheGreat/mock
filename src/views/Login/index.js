import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as AuthAction from '../../actions/userActions';
import LoginForm from './LoginForm';
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }

  }
  handleChange = (name, value) => {
    this.setState({ [name]: value })
    console.log(this.state.username)
  }
  handleSubmit = (values) => {
    const { username, password } = values
    this.props.actions.login(username, password)
  }

  render() {
    const {  loginFailed  } = this.props
    return (
      <div className="form">
        <div className="form2">
          <h1 className="login-header">Login</h1>
          <LoginForm
            isLoginFailed={loginFailed}
            onSubmit={(values) => {
              this.handleSubmit(values)
            }}

          />

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loginFailed: state.authentication
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AuthAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
