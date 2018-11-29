import React from 'react'
import { Link } from 'gatsby'
import contact from '../data/contact.yml'
import menu from '../data/nav.yml'

const Hero = () => (
  <div className="hero">
    <nav className="navigation">
      <ul className="list">
      {menu.map(({title, url}, i) =>(
        <li key={i} className="listitem"><Link to={url}>{title}</Link></li>
      ))}
      </ul>
    </nav>
    <div className="hero-title text-center">
      <p>Hi, I am</p>
      <h1>
        <Link to='/'>Vasilis</Link>
      </h1>
      <p>an experienced web developer who loves to build things using the Microsoft .NET framework, HTML5, CSS3 and Javascript.</p>
    </div>
    <div className="socialmedia text-center">
      <ul className="list">
      {contact.map(({ url, icon }, i) => (
                <li key={i} className="listitem">
                    <a href={url}>
                      <i className={icon}></i>
                    </a>
                </li>
            ))}
      </ul>
      <div className="hero-credits">
        <p>Designed &amp; Developed by  <a href={contact[0].url}>{contact[0].username}</a> with <i className="fas fa-heart"></i> and <a href='https://www.gatsbyjs.org'>gatsby.js</a></p>
      </div>
    </div>
  </div>
)

export default Hero