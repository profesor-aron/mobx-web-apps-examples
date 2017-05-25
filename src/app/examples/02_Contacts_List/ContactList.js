import { observable } from 'mobx'

class ContactList {

  @observable contacts

  constructor(contacts = []) {
    this.contacts = contacts
  }

  add(contact) {
    this.contacts.push(contact)
  }

}

const contactList = new ContactList()

export default contactList
