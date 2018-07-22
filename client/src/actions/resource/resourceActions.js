import actions from './resourceTypes';
import apiClient from '../../clients/apiClient';

const { ERROR, REQUEST, SET_PLAYERS, SET_NEWS, SET_MATCH_REPORTS } = actions;

const parseException = ex =>
    (ex.response && ex.response.data && ex.response.data.message) ||
    'Something went wrong';

export const getMatchReports = () => async dispatch => {
    dispatch({
        type: REQUEST,
    });

    try {
        const data = await apiClient.getMatchReports();
        dispatch({
            type: SET_MATCH_REPORTS,
            payload: {
                reports: data,
                isLoading: false,
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

export const getNews = () => async dispatch => {
    dispatch({
        type: REQUEST,
    });

    try {
        const data = await apiClient.getNews();
        dispatch({
            type: SET_NEWS,
            payload: {
                news: data,
                isLoading: false,
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

export const getPlayers = () => async dispatch => {
    dispatch({
        type: REQUEST,
    });

    try {
        const data = await apiClient.getPlayers();
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
