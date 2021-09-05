import { SET_METRIC_VALS } from './types';

export const setMetric = (data) => async dispatch => {
  dispatch({
    type: SET_METRIC_VALS,
    payload: data,
  });
};
