import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import { observer } from 'mobx-react'

import Contact from './Contact'
import contactList from './ContactList'
import ContactListView from './ContactListView'

/**
 * Contact List App component
 */
@observer
class ContactListApp extends Component {

  /**
   * render
   * @return {Conctact List View} markup
   */
  render () {

    contactList.add(new Contact('firstname', 'lastname', 'email', 'birthday', 'telephone', 'address'))
    contactList.add(new Contact('firstname2', 'lastname2', 'email2', 'birthday2', 'telephone2', 'address2'))

    const contact = new Contact()
    contact.firstname = 'Fanny'
    contactList.add(contact)

    return (
      <DocumentTitle title='Contact List'>
        <div>
          <ContactListView contactList={contactList}/>
        </div>
      </DocumentTitle>
    )
  }
}

export default ContactListApp
