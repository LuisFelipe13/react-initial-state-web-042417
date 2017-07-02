// Component Code Goes Here
import React from 'react'

class ToggleButton extends React.Component {
  constructor() {
    super()

    this.state = {
      isEnabled: false
    }
  this.change = this.change.bind(this)
  }

  change() {
    this.setState({
      isEnabled: !this.state.isEnabled
    })
  }

  render() {
    return (
      <button className="toggle-button" onClick={this.change}>
        I am toggled {this.state.isEnabled ? 'on' : 'off'}
      </button>
    )
  }
}

export default ToggleButton
