import React from 'react'
import PropTypes from 'prop-types'

function Toolbar(props) {
  return (
    <ul className="nav nav-tabs">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">All</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Websites</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Flayers</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Business Cards</a>
        </li>
    </ul>
  )
}

Toolbar.propTypes = {}

export default Toolbar
