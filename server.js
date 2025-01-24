const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Serve static files
  app.use(express.static(path.join(__dirname, 'client/dist')));

  // Set up GraphQL endpoint
  app.use('/graphql', expressMiddleware(server));

  // Serve service worker with correct MIME type
  app.get('/src-sw.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.sendFile(path.join(__dirname, 'client/dist/src-sw.js'));
  });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
}

startServer(); 