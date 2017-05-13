import { observable } from 'mobx'

class Contact {

  id = Math.random()
  @observable firstname
  @observable lastname
  @observable email
  @observable birthday
  @observable telephone
  @observable address

  constructor(firstname, lastname, email, birthday, telephone, address) {
    this.firstname = firstname
    this.lastname = lastname
    this.email = email
    this.birthday = birthday
    this.telephone = telephone
    this.address = address
  }

  set firstname(firstname) {
    this.firstname = firstname
  }

}

export default Contact
