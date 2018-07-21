require('babel-core/register')
import express from "express";
import { createServer } from 'http';
var path = require('path');
require('babel-core/register');
const { graphqlExpress ,graphiqlExpress } = require('apollo-server-express');
var bodyParser= require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { GraphqlPort , MongoDB_Name} from "../../config";
var app = express();

//database connection
mongoose.connect(`mongodb://localhost/${MongoDB_Name}`);
app.use(express.static("."));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//middleware
app.use(cors());
const schema = require('./ApolloServerSchema');




// bodyParser is needed just for POST queries to the endpoint.
app.use('/graphql', graphqlExpress({ schema }));
app.use('/graphiql',graphiqlExpress({
  endpointURL : "/graphql",
  subscriptionsEndpoint: `ws://localhost:${GraphqlPort}/subscriptions`
}))





const GraphQLWebSocketServerInstance = createServer(app);
var server = GraphQLWebSocketServerInstance.listen(GraphqlPort,() => {
  console.log(`> APOLLO SUBSCRIPTION SERVER RUNNING ON PORT ${GraphqlPort}`);
  new SubscriptionServer({
    execute,
    subscribe,
    schema,
     onSubscribe: (message, params, webSocket) => {
       console.log("onSubscribe");
     },
     onConnect: (connectionParams, webSocket, context) => {
      console.log("onConnect");
  },
  },
  {
    server: GraphQLWebSocketServerInstance,
    path: '/subscriptions',
});
});
