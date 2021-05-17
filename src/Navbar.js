import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faBars}  from '@fortawesome/free-solid-svg-icons'

import './Navbar.css'


const styles = {
  
  background: "#000000",
  
};

function sayHello(x,y) {
 x.setState({lat: y})
}

const Navbar = (props) => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark text-white" style={styles} >

<div className="container "> 


      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          

          <li className="nav-item">
              <a className="nav-link"  onClick={() => sayHello(props.Author,3)} > Home </a>
            </li>


            <li className="nav-item">
              <a className="nav-link"  onClick={() => sayHello(props.Author,1)} > Services </a>
            </li>

                
            <li className="nav-item">
              <a className="nav-link" onClick={() => sayHello(props.Author,2)}>Contact Me</a>
            </li>

                
     

            <li className="nav-item">
              <a className="nav-link" href=""> Resume </a>
            </li>

          </ul>
       
        </div>

        </div>

      </nav>

    )
}

export default Navbar

