const {makeExecutableSchema}  = require('graphql-tools');
import { resolver } from "./resolvers";
import { typeDef } from "./typeDefs";

module.exports = makeExecutableSchema({
  typeDefs : typeDef,
  resolvers : resolver
});
