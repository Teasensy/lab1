import profilePic from '../src/assets/photo.jpg';
import resume from '../src/assets/resume.pdf';
export default function About() {
     return (
     <>
     <div>
      <h1>Shunze Jia</h1> 
      <img src={profilePic} alt="Profile" style={{height: '200px', width: '200px'}}/>
      <p>Hello! I'm Shunze Jia, a passionate web developer with a love for creating interactive and user-friendly web applications. I'm currently studying web application development at Centennial College and always looking for new challenges and opportunities to grow and learn.</p>
      <a href={resume} target="_blank">View My Resume</a>
    </div>
     </>
     );
    }
    