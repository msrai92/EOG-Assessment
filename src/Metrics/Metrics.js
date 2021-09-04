import React, { useEffect, useState } from 'react';
import {
  ApolloClient,
  ApolloProvider,
  useQuery,
  InMemoryCache,
} from '@apollo/client';
import { without } from 'lodash';
import { GET_METRIC_TYPE } from '../util/Queries';
import SelectDropDown from '../elements/SelectDropDown';

const client = new ApolloClient({
  uri: 'https://react.eogresources.com/graphql',
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
    loading: typesLoading,
    data: typesData,
  } = useQuery(GET_METRIC_TYPE);

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
    <div>
      {!typesLoading && (
        <div>
          <SelectDropDown
            handleChange={handleChange}
            handleDelete={handleDelete}
            metricTypes={metricTypes}
            metricSelected={metricSelected}
          />
        </div>
      )}
    </div>
  );
};

export default () => (
  <ApolloProvider client={client}>
    <Metrics />
  </ApolloProvider>
);
