import React from 'react';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  split,
  HttpLink,
} from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from 'apollo-utilities';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import Metrics from './Metrics/Metrics';

const wsLink = new WebSocketLink({
  uri: 'ws://react.eogresources.com/graphql',
  options: {
    reconnect: true,
  },
});

const httpLink = new HttpLink({
  uri: 'https://react.eogresources.com/graphql',
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition'
      && definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);
const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});
const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(39,49,66)',
    },
    secondary: {
      main: 'rgb(197,208,222)',
    },
    background: {
      default: 'rgb(226,231,238)',
    },
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Wrapper>
      <Header />
      <ApolloProvider client={client}>
        <Metrics />
      </ApolloProvider>
    </Wrapper>
  </MuiThemeProvider>
);

export default App;
