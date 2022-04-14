//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  state = {
    posts: [
      {
        id: 1,
        title: 'titulo 1',
        body: 'corpo 1'
      },
      {
        id: 2,
        title: 'titulo 2',
        body: 'corpo 2'
      },
      {
        id: 3,
        title: 'titulo 33',
        body: 'corpo 34'
      },
    ]
  };

  handPClick = () => {
    this.setState({ name: 'junior' })
  }

  handAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}

      </div>
    );
  }
}

export default App;
