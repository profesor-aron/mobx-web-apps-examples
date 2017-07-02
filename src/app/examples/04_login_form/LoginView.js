import React, {Component} from 'react'
import PropTypes from 'prop-types'
import InputField from './InputField'
import InputCheckbox from './InputCheckbox'
import asForm from './asForm'

class LoginView extends Component {
  render() {
    const {login, updateProperty, submitForm} = this.props
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={submitForm}>
          <InputField
            label="Username"
            name="username"
            id="username"
            value={login.username}
            onChange={updateProperty}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            id="password"
            value={login.password}
            onChange={updateProperty}
          />
          <InputCheckbox
            label="Remember my username"
            name="rememberMe"
            id="rememberMe"
            value={login.rememberMe}
            onChange={updateProperty}
          />
          <br/>
          <button>Log in</button>
        </form>
      </div>
    )
  }
}

LoginView.propTypes = {
  login: PropTypes.shape({
    username: PropTypes.string,
    password: PropTypes.string,
    rememberMe: PropTypes.bool
  }),
  updateProperty: PropTypes.func,
  submitForm: PropTypes.func
}

export default asForm(LoginView, 'login')
