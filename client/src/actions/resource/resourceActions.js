import actions from './resourceTypes';
import { ApiClient } from '../../clients/apiClient';

const { ERROR, REQUEST, SET_PLAYERS, SET_NEWS, SET_MATCH_REPORTS, SET_FIXTURES } = actions;

const parseException = ex =>
    (ex.response && ex.response.data && ex.response.data.message) ||
    'Something went wrong';

export const getMatchReports = () => async dispatch => {
    dispatch({
        type: REQUEST,
    });

    try {
        const data = await ApiClient.getMatchReports();
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
        const data = await ApiClient.getNews();
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
        const data = await ApiClient.getPlayers();
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

export const getFixtures = () => async dispatch => {
    dispatch({
        type: REQUEST,
    });

    try {
        const data = await ApiClient.getFixtures();
        dispatch({
            type: SET_FIXTURES,
            payload: {
                fixtures: data,
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
