import React, { Component } from "react";
// eslint-disable-next-line
import { Redirect } from "react-router-dom";
// eslint-disable-next-line
import Quill from "react-quill";
import 'react-quill/dist/quill.snow.css';

class PostForm extends Component {
    render() {
        return (
            <form className="container">
            <h1>Add a New Post</h1>
                <p>Title Fields/Quill Editor</p>
                <p>
                    <button type="submit">Save</button>
                </p>
            </form>
        );
    }
}

export default PostForm;
