import React from 'react'
import { Link } from 'react-router-dom'
import './viewproject.css'

const Viewproject = () => {
  return (
    <div className="view-project-container">
      <Link to="/projects" className="view-project-btn">View Project</Link>
    </div>
  )
}

export default Viewproject
