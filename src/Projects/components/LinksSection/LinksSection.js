import React from 'react';
import './LinksSection.css';

const LinksSection = ({ links }) => {
    return (
        <section className="links-section">
            <h2>Links & Additional Information</h2>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default LinksSection;