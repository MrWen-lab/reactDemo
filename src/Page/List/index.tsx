import React from "react";
import { Link } from 'react-router-dom'

export default () => {
  return <div>
    <ul>
      <li>list</li>
      <li><Link to='/'>go home</Link></li>
    </ul>
  </div>
}