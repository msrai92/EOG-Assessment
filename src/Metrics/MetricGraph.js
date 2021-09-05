import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_MULTIPLE_DATA } from '../util/Queries';

const MetricGraph = (props) => {
  const { metricSelected } = props;
  const [input, setInput] = useState([]);
  useEffect(() => {
    const arr = metricSelected.map((name) => ({
      metricName: name,
    }));
    setInput(arr);
  }, [metricSelected]);
  const {
    error,
    loading,
    data,
  } = useQuery(GET_MULTIPLE_DATA, {
    variables: {
      input,
    },
  });
  console.log(error);
  console.log(loading);
  console.log('graph data: ', data);
  return (
    <div>
      Hello World
    </div>
  );
};

export default connect(null, null)(MetricGraph);
