import React from 'react'
import { observer } from 'mobx-react'

const ContactView = observer(({contact}) => 
  <li>
    {contact.id}
    {contact.firstname}
    {contact.lastname}
    {contact.email}
    {contact.birthday}
    {contact.telephone}
    {contact.address}
  </li>
)

export default ContactView
