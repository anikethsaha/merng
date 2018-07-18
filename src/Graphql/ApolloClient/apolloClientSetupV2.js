import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SubscriptionClient } from "subscriptions-transport-ws";
 import { ws } from './websocketClient.js'



// Create an http link:
const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql'
});

// // Create a WebSocket link:
// const wsLink = new WebSocketLink({
//   uri: `ws://localhost:3000/subscriptions`,
//   options: {
//     reconnect: true
//   }
// });


const GRAPHQL_ENDPOINT = "ws://localhost:3000/subscriptions";

const wsClient = new SubscriptionClient(GRAPHQL_ENDPOINT, {
  reconnect: true
},ws); // or ws from ws package

const wsLink = new WebSocketLink(wsClient);



// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  //split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink
);
const cache = new InMemoryCache();
export const client = new ApolloClient({
  link,
  cache
});
