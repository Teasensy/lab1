import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/logo.png';
export default function Layout() {
 return (
 <>
 <img src={logo} alt="Logo" style={{height: '50px', width: '50px'}}/>
 <h1>My Portfolio</h1>
 <nav>
 
 <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Service</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
 </nav>
<br/>
 <hr />
 
</>
 
 );
}
