import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
        
        {/* First Comment */}
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sam
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00pm</span>
                    </div>
                    <div className="text">Nice blog post!</div>
                </div>
            </div>

        {/* Second Comment */}
                    <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Jane
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00pm</span>
                    </div>
                    <div className="text">Great Read!</div>
                </div>
            </div>


        {/* Third Comment */}
        <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={faker.image.avatar()}/>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        Sigi
                    </a>
                    <div className="metadata">
                        <span className="date">Today at 6:00pm</span>
                    </div>
                    <div className="text">Keep on coding!</div>
                </div>
            </div>

        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));