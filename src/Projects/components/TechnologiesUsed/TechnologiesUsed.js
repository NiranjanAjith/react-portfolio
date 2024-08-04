import React from 'react';
import './TechnologiesUsed.css';

const TechnologiesUsed = ({ technologies }) => {
    return (
        <section className="technologies-used">
            <h2>Technologies Used</h2>
            <ul>
                {technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
        </section>
    );
};

export default TechnologiesUsed;