import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import {UncontrolledRating} from "./UncontrolledRating";


export default {
    title: 'UncontrolledRating stories',
    component: UncontrolledRating
} as Meta;

export const EmptyStars = () => <UncontrolledRating defaultValue={0}/>;
export const Rating1 = () => <UncontrolledRating defaultValue={1}/>;
export const Rating2 = () => <UncontrolledRating defaultValue={2}/>;
export const Rating3 = () => <UncontrolledRating defaultValue={3}/>;
export const Rating4 = () => <UncontrolledRating defaultValue={4}/>;
export const Rating5 = () => <UncontrolledRating defaultValue={5}/>;
