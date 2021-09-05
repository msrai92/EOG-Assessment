import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect, useSelector } from 'react-redux';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
}));

const CustomCard = (props) => {
  const { name } = props;
  const classes = useStyles();
  const metricData = useSelector(state => state.metrics[name]);
  console.log('metric data ', metricData);
  return (
    <Card className={classes.root}>
      <CardHeader
        title={name}
      />
      <CardContent>
        <Typography variant="h4">
          {metricData.value}{metricData.unit}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default connect(null, null)(CustomCard);
