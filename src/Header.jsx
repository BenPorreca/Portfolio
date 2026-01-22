import './Header.css';
import ParticleBg from "./Background";

function Header(){
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='center'>
            <div>
                <ParticleBg/>
            </div>
            <header className='intro'> 
                
                <h1>Hello, I'm <span style={{color: '#ff4d5a'}}>Ben</span>.</h1>
                <h1>Welcome to my website.</h1>
                <nav>
                    <button onClick={() => scrollToSection('about')}>About</button>
                    <button onClick={() => scrollToSection('projects')}>Projects</button>
                    <button onClick={() => scrollToSection('contact')}>Contact</button>
                </nav>
            </header>
        </div>
    );
}

export default Header