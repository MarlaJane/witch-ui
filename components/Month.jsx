import React from 'react'
import { NavLink } from 'react-router-dom'

export default ({ id, name, affirmation }) => (
  <div key={id} className="month">
    <NavLink to={`/months/${name}`}>
      {`${name} (${affirmation})`}
    </NavLink>
  </div>
)
