import {
  SET_CASING_PRESSURE,
  SET_INJ_VALVE_OPEN,
  SET_TUBING_PRESSURE,
  SET_FLARE_TEMP,
  SET_OIL_TEMP,
  SET_WATER_TEMP,
  SET_GRAPH_DATA,
} from '../actions/types';

const initialState = {
  casingPressure: {},
  injValveOpen: {},
  tubingPressure: {},
  flareTemp: {},
  oilTemp: {},
  waterTemp: {},
  graphData: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CASING_PRESSURE:
      return { ...state, casingPressure: payload };
    case SET_INJ_VALVE_OPEN:
      return {
        ...state,
        injValveOpen: payload,
      };
    case SET_TUBING_PRESSURE:
      return {
        ...state,
        tubingPressure: payload,
      };
    case SET_FLARE_TEMP:
      return {
        ...state,
        flareTemp: payload,
      };
    case SET_OIL_TEMP:
      return {
        ...state,
        oilTemp: payload,
      };
    case SET_WATER_TEMP:
      return {
        ...state,
        waterTemp: payload,
      };
    case SET_GRAPH_DATA:
      return {
        ...state,
        graphData: payload,
      };
    default:
      return state;
  }
}
