import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {observer} from 'mobx-react'

@observer
export default class InputCheckbox extends Component {
  constructor (props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange (event) {
    this.props.onChange(this.props.name, event.target.checked)
  }

  render () {
    const {label, name,  id, value} = this.props
    return (
      <div>
        <label htmlFor={id}>
          <input
            type="checkbox"
            name={name}
            id={id}
            checked={value}
            onChange={this.onChange}
          />
          {label}
        </label>
      </div>
    )
  }
}

InputCheckbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.bool
}
