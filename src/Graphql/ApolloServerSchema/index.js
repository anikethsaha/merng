const {makeExecutableSchema}  = require('graphql-tools');
const typeDefs = require('./typeDef.js');
 const resolvers = require('./resolver.js');

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
