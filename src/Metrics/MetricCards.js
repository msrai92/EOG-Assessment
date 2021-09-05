import React from 'react';
import { useSubscription } from '@apollo/client';
import { connect } from 'react-redux';
import { GET_METRIC_DATA_SUB } from '../util/Queries';
import { setMetric } from '../actions/metrics';
import Card from './Card';
import './metric.css';

const MetricCards = (props) => {
  const { metricSelected } = props;
  const {
    error,
    loading,
    data,
  } = useSubscription(GET_METRIC_DATA_SUB);
  console.log(error);
  console.log(loading);
  console.log(data);
  if (!loading) {
    props.setMetric(data.newMeasurement, data.newMeasurement.metric);
  }
  console.log(metricSelected);
  return (
    <div className="card-grid">
      {metricSelected.map((name) => (
        <Card key={name} name={name} />
      ))}
    </div>
  );
};

export default connect(null, { setMetric })(MetricCards);
