import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux'
import { store } from "../../client/redux";
import { client } from "../../Graphql/ApolloClient";
import {  ApolloProvider } from 'react-apollo'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <ApolloProvider client={client}>
              <Provider store = {store}> 
                <div>
                    HEllo World
                </div>
               </Provider>
             </ApolloProvider>
        );
    }
}

App.propTypes = {};

export default App;
