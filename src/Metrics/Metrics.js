import React, { useEffect, useState } from 'react';
import {
  ApolloClient,
  ApolloProvider,
  useQuery,
  InMemoryCache,
  split,
  HttpLink,
} from '@apollo/client';
import { getMainDefinition } from 'apollo-utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { without } from 'lodash';
import { GET_METRIC_TYPE } from '../util/Queries';
import SelectDropDown from '../elements/SelectDropDown';
import MetricCards from './MetricCards';
import MetricGraph from './MetricGraph';
import './metric.css';

const httpLink = new HttpLink({
  uri: 'https://react.eogresources.com/graphql',
});

const wsLink = new WebSocketLink({
  uri: 'ws://react.eogresources.com/graphql',
  options: {
    reconnect: true,
  },
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

const Metrics = () => {
  const [metricTypes, setMetricTypes] = useState([]);
  const [metricSelected, setSelected] = useState([]);
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const handleDelete = (event, value) => {
    setSelected((val) => without(val, value));
  };
  const {
    error: typesError,
    loading: typesLoading,
    data: typesData,
  } = useQuery(GET_METRIC_TYPE);
  if (typesError) {
    console.log('error');
  }
  useEffect(() => {
    const arr = [];
    if (!typesLoading) {
      for (let i = 0; i < typesData.getMetrics.length; i += 1) {
        arr.push(typesData.getMetrics[i]);
      }
    }
    setMetricTypes(arr);
  }, [typesData]);

  return (
    <div className="container">
      {!typesError && (
        <>
          {!typesLoading && (
          <div className="metric-container">
            <SelectDropDown
              handleChange={handleChange}
              handleDelete={handleDelete}
              metricTypes={metricTypes}
              metricSelected={metricSelected}
            />
            <MetricCards metricSelected={metricSelected} />
            <MetricGraph metricSelected={metricSelected} />
          </div>
          )}
        </>
      )}
    </div>
  );
};

export default () => (
  <ApolloProvider client={client}>
    <Metrics />
  </ApolloProvider>
);
