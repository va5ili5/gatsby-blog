import React from 'react'
import contact from '../data/contact.yml'

const Footer = () => (
  <footer className="footer">
    <div className="footer-container center text-center">
      <p>Designed &amp; Developed by  <a href={contact[0].url}>{contact[0].username}</a> with <i className="fas fa-heart"></i> and <a href='https://www.gatsbyjs.org'>gatsby.js</a></p>
    </div>
  </footer>
)

export default Footer