import React from 'react'
import { render } from 'react-dom'
import {
  HashRouter,
  Route,
  Switch,
  Link
} from 'react-router-dom'

/**
 * Import the modules and components
 */
import Page404 from './common/components/Page404'
import CounterView from './examples/01_A_simple_counter/CounterView'
import ContactListApp from './examples/02_Contacts_List'
import AMiniStoreTodo from './examples/03_a_mini_todo_store'
import LoginApp from './examples/04_login_form'
import Paginations from './examples/05_paginations'

/**
 * Render the application
 */
render(
  <HashRouter>
    <div>
      <h2>Mobs examples</h2>
      <ul>
        <li><Link to="/">A simple counter</Link></li>
        <li><Link to="/contacts">Contcat list</Link></li>
        <li><Link to="/miniTodoStore">A mini todo store</Link></li>
        <li><Link to="/login">Login Form</Link></li>
        <li><Link to="/paginations">Paginations</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={CounterView} />
        <Route exact path="/contacts" component={ContactListApp} />
        <Route exact path="/miniTodoStore" component={AMiniStoreTodo} />
        <Route exact path="/login" component={LoginApp} />
        <Route exact path="/paginations" component={Paginations} />
        <Route component={Page404} />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('app')
)
