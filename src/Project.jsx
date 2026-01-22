import './Project.css';
import Snake from "./assets/projects/snake.png";
import Survivor from "./assets/projects/survivorGame.gif";
import SalonApp from "./assets/projects/SalonApp.png";
import Gesture from "./assets/projects/gesture.gif";
import LeagueSpeech from "./assets/projects/LeagueSpeech.gif";
import Flight from "./assets/projects/flight.gif";
import Sand from "./assets/projects/sand.png";

function ProjectItem({projectName, projPic, projDesc}){
    return(
        <div className='ProjectItem'>
            <div className='project-img-box'>
                <img src={projPic}/>
            </div>
            <div className='project-text-box'>
                <h2>{projectName}</h2>
                <p>{projDesc}</p>
            </div>
        </div>
    )
}

function Project(){
    return(
        <div className='project' id="projects">
            {/* Title */}
            <h1>Projects</h1>   

            {/* Projects */}
            <div className='projectList'>
                <ProjectItem 
                    projectName="Full Stack Webapp" 
                    projPic={SalonApp} 
                    projDesc="Vanity is a full stack web application built with a React frontend and a Flask REST API, hosted on AWS. The platform has a custom SQL database to handle complex business logic, allowing salon owners to manage staff schedules, service menus, and customer loyalty programs in real time. Simultaneously, it allows users to register, browse local businesses, and manage their own appointments and payments through their own dashboard."
                />
                <ProjectItem 
                    projectName="VisionControl HCI" 
                    projPic={Gesture} 
                    projDesc="A human-computer interaction (HCI) tool that leverages computer vision. Using MediaPipe and OpenCV, hand movements are turned into commands while performance is also optimized to acheive 20 FPS. The software utilizes gesture recognition to interpret custom made gestures to switch between different modes: a Mouse controller, a Volume controller, or a default gesture recognition only mode."
                />
                <ProjectItem 
                    projectName="Flight Booking System" 
                    projPic={Flight} 
                    projDesc="A relational database designed to handle the logistics of an airline, from flight scheduling to passenger bookings. This project focused heavily on architecture; I translated business requirements into a detailed (E)ER diagram and used 3NF normalization to ensure zero data redundancy across tables like Flights, Aircraft, and Staff. I built out the backend logic using advanced SQL to manage everything from real-time seat availability to automated payment tracking"
                />
                <ProjectItem 
                    projectName="Falling Sand Engine" 
                    projPic={Sand} 
                    projDesc="NOT UPDATED: Currently undergoing a major engine overhaul. This image is misleading there is a lot to this project. Will post soon."
                />
                <ProjectItem 
                    projectName="League Speech" 
                    projPic={LeagueSpeech} 
                    projDesc="A low latency voice-to-input utility designed for hands-free gaming. Built with the Vosk engine and PyAudio, the software maps live vocal commands to system-level keystrokes via PyDirectInput. To meet the 'instant' input demands of games like League of Legends, I optimized the control loop to process partial speech results, bypassing the standard silence detection delay to trigger macros the millisecond a keyword is recognized. This creates a high-speed, touchless secondary input layer capable of handling multi-command strings with near-zero lag."
                />
                <ProjectItem 
                    projectName="Procedural Animation" 
                    projPic={Snake} 
                    projDesc="An interactive inverse kinematics simulation that generates organic motion and dynamic skin mesh generation. The project uses mathematical constraints to calculate skeletal positioning and a custom polygon-based 'skin' to create a fluid, serpent-like appearance that reacts to user input."
                />
                <ProjectItem 
                    projectName="Survivor Game" 
                    projPic={Survivor} 
                    projDesc="A survivor inspired game developed from concept to completion within a 48 hour sprint where bats swarm from all directions. Built in Godot, it features an attack and shield bash mechanic to fend off the swarm, a simple score system, and fully integrated pause and death screens, all set to custom music and sound effects." 
                />
            </div>
        </div>
    )
}

export default Project