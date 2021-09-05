import React from 'react';
import Card from './Card';
import './metric.css';

const MetricCards = (props) => {
  const { metricSelected } = props;
  console.log(metricSelected);
  return (
    <div className="card-grid">
      {metricSelected.map((name) => (
        <Card key={name} name={name} />
      ))}
    </div>
  );
};

export default MetricCards;
