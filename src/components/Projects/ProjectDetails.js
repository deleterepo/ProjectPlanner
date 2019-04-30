import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;

    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Project Title - {id}
                    </span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto laboriosam, quaerat placeat impedit possimus nam officia natus ut! Repellat ipsa sequi similique eaque rem aspernatur, quos iure laboriosam explicabo accusantium.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Jordan</div>
                    <div>April 29th, 2019</div>
                </div>
            </div>

        </div>
    )
}

export default ProjectDetails
