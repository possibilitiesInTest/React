import React, {Component} from "react";
import "./App.css";
import Header from "./components/Header"
import Posts from "./components/Posts";
import Post from "./components/Post";
import NotFound from "./components/NotFound";
import PostForm from "./components/PostForm";
import Message from "./components/Message";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


class App extends Component {
    state = {
        posts: [],
        message: null
    };

    getNewSlugFromTitle = title =>
          encodeURIComponent(
            title
            .toLowerCase()
            .split(" ")
            .join("-")
          );


    addNewPost = post => {
        post.id = this.state.posts.length + 1;
        post.slug = this.getNewSlugFromTitle(post.title);
        this.setState({
            posts: [...this.state.posts, post],
            message: "saved"
        });
        setTimeout(() => {
            this.setState({ message: null });
        }, 1600);
    };

    updatePost = post => {
        post.slug = this.getNewSlugFromTitle(post.title);
        const index = this.state.posts.findIndex(
            p => p.id === post.id
        );
        const posts = this.state.posts
            .slice(0, index)
            .concat(this.state.posts.slice(index + 1));
        const newPosts = [...posts, post].sort((a, b) =>
            a.id - b.id);
        this.setState({
        posts: newPosts,
        message: "updated"
        });
        setTimeout(() => {
            this.setState({ message: null });
        }, 1600);
    };

    deletePost = post => {
        if(window.confirm("Delete this post?")) {
            const posts = this.state.posts.filter(p => p.id != post.id);
            this.setState({ posts, message: "deleted" });
            setTimeout(() => {
                this.setState({ message: null })
            })
        }
    }



    render() {
        return (
            <Router>
                <div className="App">
                    <Header/>
                    {this.state.message && <Message type={this.state.message} />}
                    <Switch>
                        <Route exact path="/"
                               render={() => <Posts posts={this.state.posts} deletePost={this.deletePost}/>}
                        />
                        <Route path="/post/:postSlug"
                               render={props => {
                                   const post = this.state.posts.find(
                                       post => post.slug === props.match.params.postSlug
                                   );
                                   // return <Post post={post}/>;
                                   if (post) return <Post post={post}/>;
                                   else return <NotFound />
                               }}
                        />
                        <Route exact
                               path="/new"
                               render={() => (
                                   <PostForm addNewPost={this.addNewPost}/>
                                   post={{
                                       id: 0,
                                     slug: "",
                                     title: "",
                                   content: ""
                               }}
                               )}
                        />
                        <Route
                            path="/edit/:postSlug"
                            render={props => {
                                const post = this.state.posts.find (
                                post => post.slug === props.match.params.postSlug
                            );
                            if (post) {
                                return <PostForm
                                         updatePost = { this.updatePost }
                                         post={ post } />;
                            } else {
                                return <redirect to="/"/>;
                            }
                            }}
                            />
                        <Route component={NotFound}/>
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default App;