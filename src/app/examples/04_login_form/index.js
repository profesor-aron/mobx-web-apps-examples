import React, {Component} from 'react'
import {toJS} from 'mobx'
import Login from './Login'
import LoginView from './LoginView'

class LoginApp extends Component {
  constructor () {
    super()
    this.login = new Login()
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm (event) {
    event.preventDefault()
    console.log('Login form values', toJS(this.login))
  }

  render() {
    return <LoginView login={this.login} submitForm={this.submitForm} />
  }
}

export default LoginApp
