import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { Link } from 'react-router-dom'

export function Footer() {

  return (
    <div id="footer">
      <ul className="footer-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/help">FAQ And Help</Link>
        </li>
      </ul>

      <div className="social-icons-wrapper">
        <FacebookIcon className="icon"></FacebookIcon>
        <InstagramIcon className="icon"></InstagramIcon>
        <WhatsAppIcon className="icon"></WhatsAppIcon>
      </div>
    </div>
  )
}