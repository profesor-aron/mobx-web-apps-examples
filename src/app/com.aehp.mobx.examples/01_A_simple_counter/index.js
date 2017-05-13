import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import { observer } from 'mobx-react'

import counterStore from './Counter'

/**
 * Counter App component
 */
@observer
class CounterView extends Component {

  /**
   * render
   * @return {Counter View} markup
   */
  render () {

    const counter = counterStore

    return (
      <DocumentTitle title='A Simple Counter'>
        <div>
          <h1>A simple counter</h1>
          <div>
            <button onClick={() => counter.update(-1)}>-</button>
            &nbsp;{ counter.value }&nbsp;
            <button onClick={() => counter.update(1)}>+</button>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}

export default CounterView
