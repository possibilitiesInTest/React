import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                author="Samwise" 
                timeAgo="Today at 4:45pm"
                content="some text here" 
                avatar={faker.image.avatar()} 
                />
            </ApprovalCard>

            <ApprovalCard>
            <CommentDetail 
            author="Golem" 
            timeAgo="Today at 2:00a"
            content="lorem ipsum" 
            avatar={faker.image.avatar()} />

            </ApprovalCard>
        
        <ApprovalCard>
            <CommentDetail 
            author="Frodo" 
            timeAgo="Today at 3:15p"
            content="dolorem amet" 
            avatar={faker.image.avatar()} />
        </ApprovalCard>

        
        <ApprovalCard>
        <CommentDetail 
            author="Sauron" 
            timeAgo="Yesterday at 10:33am"
            content="is stere ruio" 
            avatar={faker.image.avatar()} />
        </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));