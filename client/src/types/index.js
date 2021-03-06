import { shape, string, number } from 'prop-types';

export const playerType = shape({
    dateOfBirth: string.isRequired,
    description: string,
    email: string.isRequired,
    favouriteTeam: string,
    fullname: string.isRequired,
    nationality: string.isRequired,
    phoneNumber: string,
    position: string.isRequired,
    shortname: string.isRequired,
});

export const newsType = shape({
    id: number.isRequired,
    title: string.isRequired,
    body: string.isRequired,
    createdDate: string.isRequired,
    author: string.isRequired,
    isMatchReport: Boolean.isRequired
});

export const fixtureType = shape({
    id: number.isRequired,
    result: string,
    opponent: string.isRequired,
    date: string.isRequired,
    location: string.isRequired,
    homeMatch: Boolean.isRequired,
    resultType: string
});