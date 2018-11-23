import React from 'react'
import { Link } from 'gatsby'
import contact from '../data/contact.yml'

const Footer = (props) => (
  <footer className="footer">
    <div className="footer-container">
    <div className="hero-credits">
        <p>Designed &amp; Developed by  <a href={contact[0].url}>{contact[0].username}</a> with <i className="fas fa-heart"></i> and <a href='https://www.gatsbyjs.org'>gatsby.js</a></p>
      </div>
    </div>
  </footer>
)

export default Footer