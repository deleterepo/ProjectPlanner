import React from 'react';
import ProjectSummary from './ProjectSummary';

const projectList = () => {
    return (
        <div className="project-list section">
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
            <ProjectSummary />
        </div>
    )
}

export default projectList;