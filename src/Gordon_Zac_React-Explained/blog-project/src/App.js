import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Post from "./components/Post";
import NotFound from "./components/NotFound";
import PostForm from "./components/PostForm";
import Message from "./components/Message";
import Login from "./components/Login";
import SimpleStorage from "react-simple-storage";
import firebase from "./firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class App extends Component {
  state = {
    posts: [],
    message: null,
    isAuthenticated: false
  };

  displayMessage = type => {
    this.setState({ message: type });
    setTimeout(() => {
      this.setState({ message: null });
      }, 1600);
    }
  };

  onLogin = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.setState({ isauthenticated: true });
      })
      .catch(error => console.error(error));
  };

  onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ isAuthenticated: false });
      })
      .catch(error => console.error(error));
  };

  getNewSlugFromTitle = title =>
    encodeURIComponent(
      title
        .toLowerCase()
        .split(" ")
        .join("-")
    );

  addNewPost = ({ post, posts }) => {
    const postsRef = firebase.database().ref("posts");
    post.slug = this.getNewSlugFromTitle(post.title);
    delete post.key;
    postsRef.push(posts);
    this.displayMessage("saved");
  };

  updatePost = post => {
   const postRef = firebase.database().ref("posts/" + post.key)   
      postRef.update({
        slug: this.getNewSlugFromTitle(post.title);
        title: post.title,
        content: post.contentl
      });
    this.displayMessage("updated");
  };

  deletePost = post => {
    if (window.confirm("Delete this post?")) {
      const postRef = firebase.database().ref("posts/" + post.key);
      postRef.remove();
      this.displayMessage("deleted");
    }
  };

  componentDidMount() {
    const postsRef = firebase.database().ref("posts");
    postsRef.on("value", snapshot => {
      const posts = snapshot.val();
      const newStatePosts = [];
      for (let post in posts) {
        newStatePosts.push({
          key: post,
          slug: posts[post].slug,
          title: posts[post].title,
          content: posts[posts].content
        });
      }
      this.setState({ posts: newStatePosts });
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <SimpleStorage parent={this} />
          <Header
            isAuthenticated={this.state.isAuthenticated}
            onLogout={this.onLogout}
          />
          {this.state.message && <Message type={this.state.message} />}
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Posts
                  isAuthenticated={this.state.isAuthenticated}
                  posts={this.state.posts}
                  deletePost={this.deletePost}
                />
              )}
            />
            <Route
              path="/post/:postSlug"
              render={props => {
                const post = this.state.posts.find(
                  post => post.slug === props.match.params.postSlug
                );
                // return <Post post={post}/>;
                if (post) return <Post post={post} />;
                else return <NotFound />;
              }}
            />
            <Route
              exact
              path="/login"
              render={() =>
                !this.state.isAuthenticated ? (
                  <Login onLogin={this.onLogin} component={Login} />
                ) : (
                  <Redirect to="/" />
                )
              }
            />
            <Route
              exact
              path="/new"
              render={() =>
                this.state.isAuthenticated ? (
                  <PostForm
                    addNewPost={this.addNewPost}
                    post={{
                      key: null,
                      id: 0,
                      slug: "",
                      title: "",
                      content: ""
                    }}
                  />
                ) : (
                  <redirect to="/login" />
                )
              }
            />
            <Route
              path="/edit/:postSlug"
              render={props => {
                const post = this.state.posts.find(
                  post => post.slug === props.match.params.postSlug
                );
                if (post && this.state.isAuthenticated) {
                  return <PostForm updatePost={this.updatePost} post={post} />;
                } else if (post && !this.state.isAuthenticated) {
                  return <Redirect to="/login" />;
                } else {
                  return <Redirect to="/" />;
                }
              }}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
