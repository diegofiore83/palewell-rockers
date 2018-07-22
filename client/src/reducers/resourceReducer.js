import resourceTypes from '../actions/actionTypes';
import initialState from './initialState';

const { ERROR, REQUEST, SET_PLAYERS, SET_NEWS, SET_MATCH_REPORTS } = resourceTypes;

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
        case SET_NEWS:
            return {
                ...state,
                news: action.payload.news,
                isLoading: false,
            };
        case SET_MATCH_REPORTS:
            return {
                ...state,
                reports: action.payload.reports,
                isLoading: false,
            };
        default:
            return state;
    }
}
