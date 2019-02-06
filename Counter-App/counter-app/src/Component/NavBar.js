import React from 'react'

const NavBar = (props) => {
    return ( <div>
        <nav className="navbar navbar-light bg-light my-3">
            <a className="navbar-brand" href="#">Navbar
            <span className="badge badge-pill badge-secondary ml-2">{props.totalCounters}</span>
            
            </a>
        </nav>
      </div> );
}
 
export default NavBar;

