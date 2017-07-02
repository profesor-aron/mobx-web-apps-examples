import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {observer} from 'mobx-react'

@observer
export default class InputField extends Component {
  constructor () {
    super()
    this.onChange = this.onChange.bind(this)
  }

  onChange (event) {
    this.props.onChange(event.target.name, event.target.value)
  }

  render () {
    const input = this.props
    return (
      <div>
        <label htmlFor={input.id}>{input.label || input.name}</label>
        <br/>
        <input
          id={input.id}
          name={input.name}
          onChange={this.onChange}
          type={input.type}
          value={input.value}/>
      </div>
    )
  }
}

InputField.propTypes = {
  onChange: PropTypes.func.isRequired
}

InputField.defaultProps = {
  type: 'text'
}
