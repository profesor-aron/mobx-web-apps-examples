import {observable} from 'mobx'

class Login {
  @observable username
  @observable password
  @observable rememberMe
}

export default Login
