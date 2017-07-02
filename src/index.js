import React from 'react'
import ReactDOM from 'react-dom'
import Address from './components/Address'
import ToggleButton from './components/ToggleButton'

ReactDOM.render(
  <div>
    <Address
      street="Santa Monica Blvd."
      city="Santa Moncia"
    />
  <ToggleButton />
  </div>,
  document.getElementById('root')
)
