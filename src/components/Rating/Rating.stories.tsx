import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import {Rating, RatingValueType} from "./Rating";


export default {
    title: 'Rating stories',
    component: Rating
} as Meta;

export const EmptyStars = () => <Rating value={0} onClick={a => a}/>;
export const Rating1 = () => <Rating value={1} onClick={a => a}/>;
export const Rating2 = () => <Rating value={2} onClick={a => a}/>;
export const Rating3 = () => <Rating value={3} onClick={a => a}/>;
export const Rating4 = () => <Rating value={4} onClick={a => a}/>;
export const Rating5 = () => <Rating value={5} onClick={a => a}/>;
export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValueType>(5)
    return <Rating value={rating} onClick={setRating}/>
}