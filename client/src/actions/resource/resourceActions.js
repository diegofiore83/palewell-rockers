import axios from 'axios';
import actions from './resourceTypes';

const { ERROR, REQUEST, SET_PLAYERS } = actions;

const parseException = ex =>
  (ex.response && ex.response.data && ex.response.data.message) ||
  'Something went wrong';

export default () => async dispatch => {
  dispatch({
    type: REQUEST,
  });

  try {
    const response = await axios.get('http://localhost:5000/api/players', {
      headers: { 'Content-Type': 'application/json' },
    });
    const { data } = response;
    dispatch({
      type: SET_PLAYERS,
      payload: {
        players: data,
      },
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: {
        message: parseException(error),
      },
    });
  }
};
