import React from 'react'

const ProjectDetails = (props) => {
    console.log(props);
    const id = props.match.params.id;
    return (
        <div className="container section project_details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, laboriosam esse. Recusandae aliquam repudiandae corrupti dignissimos odit nostrum laborum ut, repellat, veniam dolorum natus vero eum culpa, nobis quo deserunt.</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by Protik</div>
                    <div>2nd May</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails

