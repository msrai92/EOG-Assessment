import { SET_METRIC_VALS } from '../actions/types';

const initialState = {
  data: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_METRIC_VALS:
      return {
        data: payload,
      };
    default:
      return state;
  }
}
