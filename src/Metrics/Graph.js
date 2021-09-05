import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import moment from 'moment';
import './metric.css';

const Graph = () => {
  const [data, setData] = useState([]);
  const graphData = useSelector(state => state.metrics.graphData);
  useEffect(() => {
    console.log(typeof graphData);
    setData(graphData);
  }, [graphData]);
  console.log('graph Data: ', graphData);
  console.log(data.length);
  return (
    <>
      {graphData.length > 0 && (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="time"
              tickFormatter={(unixTime) => moment(unixTime).format('HH:mm Do')}
              type="number"
            />
            <YAxis dataKey="value" type="number" />
            <Tooltip />
            {graphData.map((obj) => (
              <Line key={obj.metric} data={obj.values} type="monotone" stokre="#8884d8" />
            ))}
          </LineChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default connect(null, null)(Graph);
