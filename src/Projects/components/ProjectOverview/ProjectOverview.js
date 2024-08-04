import React from 'react';
import './ProjectOverview.css';

const ProjectOverview = ({ overview }) => {
  return (
    <section className="project-overview">
      <h2>Project Overview</h2>
      <p>{overview}</p>
    </section>
  );
};

export default ProjectOverview;
