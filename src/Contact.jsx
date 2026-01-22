import './Contact.css';
import { useState } from 'react';
import LinkedInIcon from "./assets/linkedin.png";
import GitHubIcon from "./assets/github.png";
import EmailIcon from "./assets/email.png";
import DiscordIcon from "./assets/discord.png";

function ContactLink({ icon, label, value, href, isEmail = false }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e) => {
        if (isEmail) {
            e.preventDefault();
            navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <a 
            href={href} 
            className='ContactLink'
            target={isEmail ? undefined : "_blank"}
            rel={isEmail ? undefined : "noopener noreferrer"}
            onClick={handleCopy}
        >
            <img src={icon} alt={label} className='contact-icon' />
            <div className='contact-info'>
                <h3>{label}</h3>
                <p>{copied ? 'Copied!' : value}</p>
            </div>
        </a>
    );
}

function Contact() {
    const handleDownloadResume = () => {
        const resumePath = '/Benjamin_Porreca_Resume.pdf';
        const link = document.createElement('a');
        link.href = resumePath;
        link.download = 'Benjamin_Porreca_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='contact' id="contact">
            <h1>Contact</h1>
            
            <div className='contact-content'>
                <div className='contact-text'>
                    <h2>Let's Connect</h2>
                    <p>
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                        Feel free to reach out through any of the platforms below!
                    </p>
                </div>

                <div className='contact-links'>
                    <ContactLink
                        icon={LinkedInIcon}
                        label="LinkedIn"
                        value="linkedin.com/in/benjamin-porreca-98b217393/"
                        href="https://www.linkedin.com/in/benjamin-porreca-98b217393/"
                    />
                    
                    <ContactLink
                        icon={GitHubIcon}
                        label="GitHub"
                        value="github.com/BenPorreca"
                        href="https://github.com/BenPorreca"
                    />
                    
                    <ContactLink
                        icon={EmailIcon}
                        label="Email"
                        value="Benjaminporreca22@gmail.com"
                        href="mailto:Benjaminporreca22@gmail.com"
                        isEmail={true}
                    />
                    
                    <ContactLink
                        icon={DiscordIcon}
                        label="Discord"
                        value="big_eat"
                        href="#"
                        isEmail={true}
                    />
                </div>

                <button className='resume-btn' onClick={handleDownloadResume}>
                    Download Resume
                </button>
            </div>
        </div>
    );
}

export default Contact;
