import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import logo from "./images/spacex-logo.jpeg";
import Launches from "./components/Launches";
import Launch from "./components/Launch";

const client = new ApolloClient({
    uri: "http://localhost:5000/graphql"
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div className='App'>
                    <img src={logo} alt='spaceX logo' style={{ width: "300px", margin: "auto", display: "block" }} />
                </div>
                <Route exact path='/' component={Launches} />
                <Route exact path='/launch/:flight_number' component={Launch} />
            </Router>
        </ApolloProvider>
    );
}

export default App;
