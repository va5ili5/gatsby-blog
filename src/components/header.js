import React from 'react'
import { Link } from 'gatsby'
import menu from '../data/nav.yml'

const Header = (props) => (
  <header className="header">
    <div className="header-container">
    <div className="header-menu">
      <h2>
        <Link to='/'>Vasilis</Link></h2>
      <nav className="navigation">
        <ul className="list">
          {menu.map(({ title, url }, i) => (
            <li key={i} className="listitem"><Link to={url}>{title}</Link></li>
          ))}
        </ul>
      </nav>
      </div>
    </div>
  </header>
)

export default Header
