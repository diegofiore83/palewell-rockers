import { shape, string, number } from 'prop-types';

export const playerType = shape({
    dateOfBirth: string.isRequired,
    description: string.isRequired,
    email: string.isRequired,
    favouriteTeam: string.isRequired,
    fullname: string.isRequired,
    nationality: string.isRequired,
    phoneNumber: string.isRequired,
    position: string.isRequired,
    shortname: string.isRequired,
});

export const newsType = shape({
    id: number.isRequired,
    title: string.isRequired,
    body: string.isRequired,
    createdDate: string.isRequired,
    author: string.isRequired,
});