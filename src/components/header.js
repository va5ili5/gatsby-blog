import React from 'react'
import { Link } from 'gatsby'
import menu from '../data/nav.yaml'
import header from '../data/blog.yaml'

const Header = () => (
  <header className="header">
    <div className="header-container">
      <h2>
        <Link to={header.header.url}>{header.header.title}</Link></h2>
      <nav className="navigation">
        <ul className="list">
          {menu.map(({ title, url }, i) => (
            <li key={i} className="listitem"><Link to={url}>{title}</Link></li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
