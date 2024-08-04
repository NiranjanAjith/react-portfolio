import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectOverview from './components/ProjectOverview/ProjectOverview';
import TechnologiesUsed from './components/TechnologiesUsed/TechnologiesUsed';
import ProjectFeatures from './components/ProjectFeatures/ProjectFeatures';
import MediaGallery from './components/MediaGallery/MediaGallery';
import LinksSection from './components/LinksSection/LinksSection';
import './ProjectTemplate.css';

const ProjectTemplate = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Replace this with your data fetching logic
    // For example, fetching from an API or a local data source
    fetchProjectDetails(id);
  }, [id]);

  const fetchProjectDetails = async (projectId) => {
    // Mock fetch function - replace with actual fetch call
    const fetchedProject = {
      title: 'Example Project',
      overview: 'This is an example project overview.',
      technologies: ['React', 'JavaScript', 'CSS'],
      features: ['Feature 1', 'Feature 2'],
      media: ['/path/to/media1.png', '/path/to/media2.png'],
      links: [{ name: 'GitHub', url: 'https://github.com' }]
    };

    setProject(fetchedProject);
  };

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className="project-template">
      <h1 className="project-title">{project.title}</h1>
      <ProjectOverview overview={project.overview} />
      <TechnologiesUsed technologies={project.technologies} />
      <ProjectFeatures features={project.features} />
      <MediaGallery media={project.media} />
      <LinksSection links={project.links} />
    </div>
  );
};

export default ProjectTemplate;
