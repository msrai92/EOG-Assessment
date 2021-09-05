import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_MULTIPLE_DATA } from '../util/Queries';
import { setGraphData } from '../actions/metrics';

const MetricGraph = (props) => {
  const { metricSelected } = props;
  const [input, setInput] = useState([]);
  const [graphData, setGraph] = useState({});
  useEffect(() => {
    const arr = metricSelected.map((name) => ({
      metricName: name,
    }));
    setInput(arr);
  }, [metricSelected]);
  const grphData = useSelector(state => state.metrics.graphData);
  useEffect(() => {
    setGraph(grphData);
  }, graphData);
  const {
    error,
    loading,
    data,
  } = useQuery(GET_MULTIPLE_DATA, {
    variables: {
      input,
    },
  });
  if (!loading) {
    props.setGraphData(data.getMultipleMeasurements);
  }
  console.log(error);
  console.log(loading);
  console.log('graph data: ', data);
  return (
    <div>
      Hello World
    </div>
  );
};

export default connect(null, { setGraphData })(MetricGraph);
