import React from 'react';
import moment from 'moment';

const projectSummary = ({ project }) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken">
                <span className="card-title">
                    {project.title}
                </span>
                <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                <p className="grey-text">
                    {moment(project.createdAt.toDate()).calendar()}
                </p>
            </div>
        </div>
    )
}

export default projectSummary;