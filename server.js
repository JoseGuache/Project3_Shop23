// const express = require('express');
// const { ApolloServer } = require('@apollo/server');
// const { expressMiddleware } = require('@apollo/server/express4');
// const path = require('path');

// const { typeDefs, resolvers } = require('./schemas');
// const db = require('./config/connection');

// const app = express();
// const PORT = process.env.PORT || 3001;

// async function startServer() {
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers,
//   });

//   await server.start();

//   app.use(express.urlencoded({ extended: false }));
//   app.use(express.json());

//   // Serve static files
//   app.use(express.static(path.join(__dirname, 'client/dist')));

//   // Set up GraphQL endpoint
//   app.use('/graphql', expressMiddleware(server));

//   // Serve service worker with correct MIME type
//   app.get('/src-sw.js', (req, res) => {
//     res.setHeader('Content-Type', 'application/javascript');
//     res.sendFile(path.join(__dirname, 'client/dist/src-sw.js'));
//   });

//   db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
//     });
//   });
// }

// startServer(); 

const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { gql } = require('apollo-server-core');
const express = require('express');
const app = express();

// Define your type definitions and resolvers
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      throw new Error('Test error'); // Example error for testing
    },
  },
};

// Create an instance of ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
  formatError: (err) => {
    console.error(err); // Log the error to the console
    return err;
  },
});
async function startServer() {
  await server.start();
  app.use('/graphql', expressMiddleware(server));

  // Start the server
  app.listen({ port: 3001 }, () =>
    console.log(`Server ready at http://localhost:3001/graphql`)
  );
}

startServer();p.listen({ port: 3001 }, () =>
  console.log(`Server ready at http://localhost:3001${server.graphqlPath}`)
);