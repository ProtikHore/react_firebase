import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project_summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted By Protik</p>
                <p className="grey-text">April 4</p>
            </div>
        </div>
    )
}

export default ProjectSummary