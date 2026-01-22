import './About.css';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import BioPic from "./assets/profile.png";
import CPP from "./assets/c++.png";
import Python from "./assets/python.png";
import ReactPic from "./assets/react.svg";
import Javascript from "./assets/javascript.png";
import Git from "./assets/git.png";
import HTML from "./assets/html.png";
import Flask from "./assets/flask.svg";
import Linux from "./assets/linux.png";
import MySQL from "./assets/mysql.png";
import CSS from "./assets/css.svg";
import CS from "./assets/cs.png";
import Leetcode from "./assets/leetcode.png";

function SkillCard({skillName, picName, skillDesc}){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <div className='SkillCard' onClick={() => setIsOpen(true)}>
                <img src={picName} />
                <h2>{skillName}</h2>
            </div>
            {isOpen && createPortal(
                <div className='SkillModalOverlay' onClick={() => setIsOpen(false)}>
                    <div className='SkillModalContent' onClick={(e) => e.stopPropagation()}>
                        <h2>{skillName}</h2>
                        <p>{skillDesc}</p>
                        <button className="CloseBtn" onClick={() => setIsOpen(false)}>Close</button>
                    </div>
                </div>,
                document.body
            )}
        </>
    )
}

function About(){
    return(
        <div className='about' id="about">
            {/* Title */}
            <h1>About</h1>   

            {/* Left */}
            <div className='about-left'>
                <img src={BioPic} />
                <p>My name is Ben Porreca, I'm a Computer Science student from NJIT with a passion for programming. 
                    I have a wide range of experience from Fullstack Web Devlopment to Computer Vision Gesture Recognition software.
                    I am very ambitious and like seeing my projects come to life. 
                    Apart from working on projects, my other hobbies include cooking, playing guitar, skateboarding, and playing videogames.
                    Below you'll find some of my favorite projects I've worked on, some from school but most for fun.
                </p>
            </div>
            

            {/* Right */}
            <div className='about-right'>
                <SkillCard 
                    skillName="C++" 
                    picName={CPP} 
                    skillDesc={`C++ was the first language I ever taught myself back in middle school. I used it to make simple programs in Visual Studio, and over the years I've created many things with it including an SFort 95 Compiler with a lexical analyzer and parser, a Falling Sand Engine, multithreading programs, an Unreal Engine videogame, and custom mods for Quake 2 and Quake 4.`}
                />
                
                <SkillCard 
                    skillName="Javascript" 
                    picName={Javascript}
                    skillDesc={`I used Javascript to build my own custom personal website from scratch and utilized it heavily for the frontend logic and interactivity of my senior project webapp.`}
                />
                
                <SkillCard 
                    skillName="React" 
                    picName={ReactPic}
                    skillDesc={`I developed this portfolio website using React and built my senior project webapp using the React framework to manage the frontend component architecture.`}
                />
                
                <SkillCard 
                    skillName="Python" 
                    picName={Python}
                    skillDesc={`I have used Python for many things over the years, with my most recent work involving procedural animation renderings, a hand tracking gesture controller for audio and cursor input, and a voice-to-keyboard input controller.`}
                />
                
                <SkillCard 
                    skillName="Git" 
                    picName={Git}
                    skillDesc={`I have utilized Git across both school and personal projects to keep track of version control, and I am very familiar with the standard version control workflow.`}
                />
                
                <SkillCard 
                    skillName="HTML" 
                    picName={HTML}
                    skillDesc={`I used HTML to create the structure for my portfolio, my senior webapp, and a mock board game store webapp.`}
                />
                
                <SkillCard 
                    skillName="MySQL" 
                    picName={MySQL}
                    skillDesc={`I have created databases for various projects including a board game store and a salon management app, where I handled user information storage, store data, EER diagrams, and conceptual database design.`}
                />
                
                <SkillCard 
                    skillName="Linux" 
                    picName={Linux}
                    skillDesc={`I became familiar with Bash and the Linux terminal by navigating systems, managing files, and creating directories within a Linux virtual machine.`}
                />
                
                <SkillCard 
                    skillName="Flask" 
                    picName={Flask}
                    skillDesc={`I used the Flask framework to handle the backend routes and API logic for my senior project webapp.`}
                />
                
                <SkillCard 
                    skillName="CSS" 
                    picName={CSS}
                    skillDesc={`I used CSS to design the layout and aesthetic styling for both my personal portfolio website and my senior webapp project.`}
                />
                
                <SkillCard 
                    skillName="C#" 
                    picName={CS}
                    skillDesc={`I utilized C# to script and develop various game projects within the Unity Engine.`}
                />
                
                <SkillCard 
                    skillName="Leetcode" 
                    picName={Leetcode}
                    skillDesc={`I have solved over 100 Leetcode problems to stay engaged and familiar with core computer science concepts, algorithms, and data structures.`}
                />
            </div>
        </div>
    )
}

export default About
