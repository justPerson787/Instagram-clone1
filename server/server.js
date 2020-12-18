let express = require("express");
let graphqlHTTP = require("express-graphql");
let { buildSchema } = require("graphql");
let cors = require("cors");


//graphql schema language
let schema = buildSchema(`
    type User {
        id : String!
        nickname : String!
        avatar : String!
    }
    type Post {
        id : String!
        user : User!
        caption : String!
        image : String!
    }
    type Query{
        user(id: String) : User!
        post(user_id: String, post_id: String) : Post!
        posts(user_id: String) : [Post]
    }
`);

//Sample data for user object
let userslist = {
    a: {
      id: "a",
      nickname: "Starnger",
      avatar: "https://images.unsplash.com/photo-1513313778780-9ae4807465f0?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    [...]
  };
  let postslist = {
    a: {
      a: {
        id: "a",
        user: userslist["a"],
        caption: "Hide and seek!",
        image: "https://images.unsplash.com/photo-1590777266765-6f3cb508f9d9?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8dG93SlpGc2twR2d8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      b: {
        id: "b",
        user: userslist["a"],
        caption: "My laptop :)",
        image:
          "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      c: {
        id: "c",
        user: userslist["a"],
        caption: "Happy coding",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      },
      d: {
        id: "d",
        user: userslist["a"],
        caption: "Just a tree",
        image: "https://images.unsplash.com/photo-1581706866784-13aeb7616ace?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0aW9uYWwlMjBwYXJrfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      }
    }
  };