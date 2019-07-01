import React, { Component } from "react";
// eslint-disable-next-line
import { Redirect } from "react-router-dom";
// eslint-disable-next-line
import Quill from "react-quill";
import 'react-quill/dist/quill.snow.css';

class PostForm extends Component {
    state: {
        title: "",
        content: ""
    };

    render() {
        return (
            <form className="container">
            <h1>Add a New Post</h1>
                <p>
                    <label htmlFor = "form-title">Title:</label>
                    <br />
                    <input id="form-title" value={"this.state.title"}
                           onChange={e => this.setState({
                               title: e.target.value
                           })}
                           />
                </p>
                <p>
                    <label htmlFor="form-content">Content:</label>
                </p>
                <Quill onChange={(content, delta, source, editor) => {
                    this.setState({ content: editor.getContents() });
                }}
                       />
                <p>
                    <button type="submit">Save</button>
                </p>
            </form>
        );
    }
}

export default PostForm;
