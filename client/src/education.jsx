import React from 'react';
import programmingImage from '../src/assets/programming.jpg'; // replace these with the paths to your images
import webDevImage from '../src/assets/webDev.jpg';
import mobileAppsImage from '../src/assets/mobileApps.jpg';

export default function Education() {
     return (<>
     
     <div>
      <h1>My Services</h1>

      <div>
        <h2>General Programming</h2>
        <img src={programmingImage} alt="Programming" style={{height: '200px', width: '200px'}}/>
        <p>I offer general programming services in various languages including Python, Java, and C++.</p>
      </div>

      <div>
        <h2>Web Development</h2>
        <img src={webDevImage} alt="Web Development" style={{height: '200px', width: '200px'}}/>
        <p>I design and build websites using modern technologies like HTML, CSS, JavaScript, and React.</p>
      </div>

      <div>
        <h2>Mobile App Development</h2>
        <img src={mobileAppsImage} alt="Mobile Apps" style={{height: '200px', width: '200px'}}/>
        <p>I develop mobile applications for both Android and iOS platforms using React Native.</p>
      </div>
    </div>
     
     </>
          
     );
     }