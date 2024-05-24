import React from 'react';
import { Link } from 'react-router-dom';
import '../src/index.css'

export default function Home() {
     return <>
     
     <section id = "intro">
     <div>
      <h1>Welcome to My Portfolio!</h1>
      <p>This is my personal portfolio where you can learn more about me, see my projects,and get in touch with me.</p>
      
      <h2>Mission Statement</h2>
      <p>My mission is to create impactful and user-friendly web applications that solve real-world problems.</p>
      
      <Link to="/about">About Me</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact Me</Link>
    </div>
     </section>
     </>
     }
    