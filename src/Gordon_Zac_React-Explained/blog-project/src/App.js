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
    };

  onLogin = (email, password) => {
      console.log(email, password);
      this.props.appService
      .login(email, password)
      .then(user => {
        this.setState({ isAuthenticated: true });
      })
      .catch(error => console.error(error));
  };

  onLogout = () => {
    this.props.appService
      .signOut()
      .then(() => {
        this.setState({ isAuthenticated: false });
      })
      .catch(error => console.error(error));
  };

  addNewPost = post => {
    this.props.appService.savePost(post);
    this.displayMessage("saved");
  };

  updatePost = post => {
    this.props.appService.updatePost(post);
    this.displayMessage("updated");
  };

  deletePost = post => {
    if (window.confirm("Delete this post?")) {
      this.props.appService.deletePost(post);
      this.displayMessage("deleted");
    }
  };

  componentDidMount() {
      this.props.appService
        .subscribeToPosts(posts => this.setState({
          posts
        }));
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
