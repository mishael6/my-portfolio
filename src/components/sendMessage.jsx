import React from 'react'
import { Link } from 'react-router-dom'
import './sendMessage.css'

const Message = () => {
  return (
    <div>
      <div className="view-project-container">
        <Link to="/contact" className="view-project-btn">Message Me</Link>
      </div>
    </div>
  )
}

export default Message
