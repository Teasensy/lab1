import project1Image from '../src/assets/project1Image.png';
import project2Image from '../src/assets/project2Image.png';
import project3Image from '../src/assets/project3Image.png';
export default function Project() {
     return (
     <>
     <div>
      <h1>My Projects</h1>

      <div>
        <h2>Project 1</h2>
        <img src={project1Image} alt="Project 1" style={{height: '200px', width: '200px'}}/>
        <p>This is a software requirement specification for a reverse vending machine.</p>
      </div>

      <div>
        <h2>Project 2</h2>
        <img src={project2Image} alt="Project 2" style={{height: '200px', width: '200px'}}/>
        <p>This is a small game developed by javaScript</p>
      </div>

      <div>
        <h2>Project 3</h2>
        <img src={project3Image} alt="Project 3" style={{height: '200px', width: '200px'}}/>
        <p>This is a website that display interactive slides. </p>
      </div>
    </div>
     </>
     );
     }
    