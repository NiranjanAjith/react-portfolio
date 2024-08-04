import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowSmRight } from 'react-icons/hi';

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <img className="project__img" src={item.image} alt={item.title} />
      <h3 className="project__title">{item.title}</h3>
      <Link to={`/projects/${item.id}`} className="project__button">
        Demo <HiOutlineArrowSmRight className="project__button-icon" />
      </Link>
    </div>
  );
};

export default ProjectItems;
