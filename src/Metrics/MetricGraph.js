import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useQuery } from '@apollo/client';
// import moment from 'moment';
import { GET_MULTIPLE_DATA } from '../util/Queries';
import { setGraphData } from '../actions/metrics';

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
  if (!loading) {
    props.setGraphData(data.getMultipleMeasurements);
  }
  console.log(error);
  console.log(loading);
  console.log('graph data: ', data);
  return (
    <>
    </>
  );
};

export default connect(null, { setGraphData })(MetricGraph);
