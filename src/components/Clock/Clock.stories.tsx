import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {Clock} from "./Clock";


export default {
    title: 'Clock',
    component: Clock
} as Meta;

export const BaseExample = () => {
    return <Clock/>
}
