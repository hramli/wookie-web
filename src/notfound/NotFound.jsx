import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

export function NotFound() {
  return (
    <div id="not-found">
      <p className="not-found-text">Page Not Found</p>
      <p className="not-found-code">404</p>
      <Link to="/">Back to Home</Link>
    </div>
  )
}