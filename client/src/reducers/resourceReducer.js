import resourceTypes from '../actions/actionTypes';
import initialState from './initialState';

const { ERROR, REQUEST, SET_PLAYERS } = resourceTypes;

export default function resourceReducer(state = initialState.resource, action) {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        error: action.payload.message,
        isLoading: false,
      };
    case REQUEST:
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    case SET_PLAYERS:
      return {
        ...state,
        players: action.payload.players,
        isLoading: false,
      };
    default:
      return state;
  }
}
