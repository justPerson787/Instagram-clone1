import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Post from './components/Post/Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="App-main"></section>        
          <Post nickname="Person1" avatar='https://images.unsplash.com/photo-1608114747154-d12dc3e4896b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' caption="Post1" image="https://images.unsplash.com/photo-1608111283550-c03f719c5641?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
          <Post nickname="Person2" avatar='https://images.unsplash.com/photo-1608114747154-d12dc3e4896b?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' caption="Post2" image="https://images.unsplash.com/photo-1608111571896-ad7a024bac53?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
        
      </div>
    );
  }
}

export default App;
