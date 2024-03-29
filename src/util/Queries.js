import { gql } from '@apollo/client';

export const GET_METRIC_TYPE = gql`
  query {
    getMetrics
  }
`;

export const GET_METRIC_DATA = gql`
  query ($input: MeasurementQuery!) {
    getMeasurements(input: $input) {
      metric,
      at,
      value,
      unit
    }
  }
`;

export const GET_METRIC_DATA_SUB = gql`
  subscription {
    newMeasurement {
      metric,
      at,
      value,
      unit
    }
  }
`;

export const GET_LAST_KNOWN_METRIC = gql`
query ($metricName: String!) {
  getLastKnownMeasurement(metricName: $metricName) {
    metric,
    at,
    value,
    unit
  }
}
`;

export const GET_MULTIPLE_DATA = gql`
  query ($input: [MeasurementQuery!]) {
    getMultipleMeasurements(input: $input) {
      metric,
      measurements {
        metric,
        at,
        value,
        unit
      }
    }
  }
`;
