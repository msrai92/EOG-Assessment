import {
  SET_CASING_PRESSURE,
  SET_INJ_VALVE_OPEN,
  SET_TUBING_PRESSURE,
  SET_FLARE_TEMP,
  SET_OIL_TEMP,
  SET_WATER_TEMP,
} from './types';

export const setMetric = (data, type) => async dispatch => {
  switch (type) {
    case 'casingPressure':
      dispatch({
        type: SET_CASING_PRESSURE,
        payload: data,
      });
      break;
    case 'injValveOpen':
      dispatch({
        type: SET_INJ_VALVE_OPEN,
        payload: data,
      });
      break;
    case 'tubingPressure':
      dispatch({
        type: SET_TUBING_PRESSURE,
        payload: data,
      });
      break;
    case 'flareTemp':
      dispatch({
        type: SET_FLARE_TEMP,
        payload: data,
      });
      break;
    case 'oilTemp':
      dispatch({
        type: SET_OIL_TEMP,
        payload: data,
      });
      break;
    case 'waterTemp':
      dispatch({
        type: SET_WATER_TEMP,
        payload: data,
      });
      break;
    default:
      break;
  }
};
