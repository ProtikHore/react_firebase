import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectAction'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.createProject(this.state);
    }
    handleChange = (e) => {
        console.log(e);
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchTOProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchTOProps)(CreateProject)
