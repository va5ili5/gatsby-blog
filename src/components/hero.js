import React from 'react'
import { Link } from 'gatsby'
import herodata from '../data/hero.yaml'
import menu from '../data/nav.yaml'

const Hero = () => (
  <section className="hero">
    <nav className="navigation">
      <ul className="list">
      {menu.map(({title, url}, i) =>(
        <li key={i} className="listitem"><Link to={url}>{title}</Link></li>
      ))}
      </ul>
    </nav>
    <div className="hero-title">
      <p>{herodata.main.intro}</p>
      <h1>
        <Link to={herodata.main.url}>{herodata.main.title}</Link>
      </h1>
      <p>{herodata.main.tagline}</p>
    </div>
    <div className="socialmedia">
      <ul className="list">
      {herodata.contact.map(({ media, icon }, i) => (
                <li key={i} className="listitem">
                    <a href={media}>
                      <i className={icon}></i>
                    </a>
                </li>
            ))}
      </ul>
      <div className="hero-credits">
        <p>Design &amp; Developed by  <a href={herodata.twitter}>@va5ili5</a> with <i className="fas fa-heart"></i> and <a href={herodata.gatsby}>gatsby.js</a></p>
      </div>
    </div>
  </section>
)

export default Hero