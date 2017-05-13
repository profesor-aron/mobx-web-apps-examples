import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'

/**
 * Counter App component
 */
class CounterApp extends Component {

  /**
   * render
   * @return {Home} markup
   */
  render () {
    return (
      <DocumentTitle title='A Simple Counter'>
        <h1>A simple counter</h1>
      </DocumentTitle>
    )
  }
}

export default CounterApp
