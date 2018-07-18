
/*
"dependencies": {
    "apollo-client": "^1.1.1",
    "react-apollo": "^1.1.2",
    "subscriptions-transport-ws": "^0.7.3"
  },

*/


import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface,
  toIdValue,
} from 'react-apollo';

import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws/dist/client';
 import { ws } from './websocketClient.js'
const networkInterface = createNetworkInterface({ uri: 'http://localhost:3000/graphql' });
networkInterface.use([{
  applyMiddleware(req, next) {
    setTimeout(next, 500);
  },
}]);

const wsClient = new SubscriptionClient(`ws://localhost:3000/subscriptions`, {
  reconnect: true
},ws);

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
);


export const client = new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions
});
