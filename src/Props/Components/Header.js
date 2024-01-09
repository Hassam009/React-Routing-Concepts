import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
  <>
  <nav classNameName="navbar navbar-expand-lg bg-body-tertiary">
  <div classNameName="container-fluid">
    <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
      <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
        <li classNameName="nav-item">
          <Link to="/" classNameName="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li classNameName="nav-item">
          <Link classNameName="nav-link" to="/about">About</Link>
        </li>
        <li classNameName="nav-item">
          <Link classNameName="nav-link" to="/about">About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
  )
}

export default Header
