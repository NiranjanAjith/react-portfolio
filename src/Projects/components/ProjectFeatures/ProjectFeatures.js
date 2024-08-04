import React from 'react';
import './ProjectFeatures.css';

const ProjectFeatures = ({ features }) => {
    return (
        <section className="project-features">
            <h2>Features</h2>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectFeatures;