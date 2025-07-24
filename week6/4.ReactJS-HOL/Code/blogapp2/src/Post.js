import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
    };
  }

  loadPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      this.setState({ posts: data });
    } catch (error) {
      this.setState({ hasError: true });
    }
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert('An error occurred while loading posts.');
    console.error("Error caught:", error, info);
  }

  render() {
    return (
      <div>
        <h2>All Blog Posts</h2>
        {this.state.posts.length === 0 ? (
          <p>Loading posts...</p>
        ) : (
          this.state.posts.slice(0, 5).map((post) => (
            <Post key={post.id} title={post.title} body={post.body} />
          ))
        )}
      </div>
    );
  }
}

export default Posts;
