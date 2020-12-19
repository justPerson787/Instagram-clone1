import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Post from './components/Post/Post';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";

//connect to graphql server set in server/server.js
const client = new ApolloClient({
    uri : "http://localhost:4000/graphql"
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <section className="App-main">
          <Post />
        </section>
      </div>
    </ApolloProvider>
  );
};
export default App;
