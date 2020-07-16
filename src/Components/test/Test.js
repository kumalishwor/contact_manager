import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: "",
    posts: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) =>
        this.setState({
          posts: posts,
        })
      );
  }

  //   componentWillMount() {
  //     console.log("ComponentWillMount...");
  //   }

  //   componentDidUpdate() {
  //     console.log("ComponentDidUpdate...");
  //   }

  //   componentWillUpdate() {
  //     console.log("ComponentWillUpdate...");
  //   }

  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log("componentWillReceivedProps...");
  //   }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     return null;
  //   }

  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log("getSnapshotBeforeUpdate");
  //   }

  render() {
    const { title, body, posts } = this.state;
    return (
      <div>
        {posts.map((post) => (
          <ul>
            <li className="text-danger">
              Id: ({post.id}) {post.title}
            </li>
            {post.body}
          </ul>
        ))}
        {/* <h1>{title}</h1>
        <p>{body}</p> */}
      </div>
    );
  }
}

export default Test;
