import React from "react";
import { FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.github.com/NiranjanAjith" className="home__social-icon" target="_blank" rel='noopener noreferrer'>
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/niranjan-ajith" className="home__social-icon" target="_blank" rel='noopener noreferrer'>
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;