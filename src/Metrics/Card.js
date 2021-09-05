import React from 'react';
import { useSubscription } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
} from '@material-ui/core';
import { GET_METRIC_DATA_SUB } from '../util/Queries';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
}));

const CustomCard = (props) => {
  const { name } = props;
  const classes = useStyles();
  const {
    error: subError,
    loading: subLoading,
    data: subData,
  } = useSubscription(GET_METRIC_DATA_SUB);
  console.log('SubError ', subError);
  console.log('SubLoading ', subLoading);
  console.log('SubData ', subData);
  if (!subLoading) {
    if (subData.newMeasurement.metric === name) {
      console.log(subData.newMeasurement.value);
    }
  }
  return (
    <Card className={classes.root}>
      {!subLoading && (
        <>
          <CardHeader
            title={name}
          />
          <CardContent>
            <Typography variant="h4">
              hello
            </Typography>
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default CustomCard;
