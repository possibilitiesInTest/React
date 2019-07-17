import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
        <CommentDetail 
            author="Samwise" 
            timeAgo="Today at 4:45pm"
            content="some text here" 
            avatar={faker.image.avatar()} />
        <CommentDetail 
            author="Golem" 
            timeAgo="Today at 2:00a"
            content="lorem ipsum" 
            avatar={faker.image.avatar()} />
        <CommentDetail 
            author="Frodo" 
            timeAgo="Today at 3:15p"
            content="dolorem amet" 
            avatar={faker.image.avatar()} />
        <CommentDetail 
            author="Sauron" 
            timeAgo="Yesterday at 10:33am"
            content="is stere ruio" 
            avatar={faker.image.avatar()} />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));