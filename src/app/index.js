import React from 'react'
import { render } from 'react-dom'
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom'

/**
 * Import the modules and components
 */
import Page404 from './common/components/Page404'
import CounterView from './examples/01_A_simple_counter'
import ContactListApp from './examples/02_Contacts_List'

/**
 * Render the application
 */
render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={CounterView}/>
      <Route exact path="/contacts" component={ContactListApp}/>
      <Route component={Page404}/>
    </Switch>
  </HashRouter>,
  document.getElementById('app')
)
