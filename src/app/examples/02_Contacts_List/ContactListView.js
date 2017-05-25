import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'

import ContactView from './ContactView'

@observer
class ContactListView extends Component {
  render() {
    return <div>
      <ul>
        {this.props.contactList.contacts.map(contact => 
            <ContactView contact={contact} key={contact.id}/>
        )}
      </ul>
    </div>
  }
}

/**
 * ContactListView propTypes
 * @property {object} location path
 */
ContactListView.propTypes = {
  contactList: PropTypes.object
}

export default ContactListView
