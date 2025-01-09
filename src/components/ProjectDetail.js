import React from 'react';
import { useParams } from 'react-router-dom';
import Project1 from './projects/project1';
import Project2 from './projects/project2';
import Project3 from './projects/project3';
import Project4 from './projects/project4';

function ProjectDetail() {
  const { projectId } = useParams(); 

  const renderProject = () => {
    switch (projectId) {
      case '1':
        return <Project1 />;
      case '2':
        return <Project2 />;
      case '3':
        return <Project3 />;
      case '4':
        return <Project4 />;
      default:
        return <p>Project not found!</p>;
    }
  };

  return <div>{renderProject()}</div>;
}

export default ProjectDetail;
