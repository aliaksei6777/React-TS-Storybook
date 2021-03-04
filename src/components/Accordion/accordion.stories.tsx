import React, {useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Meta, Story} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./accordion";


export default {
    title: 'Accordion',
    component: Accordion
} as Meta;

const callback = action("accordion mode change event fired")

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args}/>;

export const MenuCollapsedMode2 = Template.bind({})
MenuCollapsedMode2.args = {
    title: "Menu",
    collapsed: true,
    onChange: callback
}

export const UsersUncollapsedMode2 = Template.bind({})
UsersUncollapsedMode2.args = {
    title: "Users",
    collapsed: false,
    onChange: callback
}


export const MenuCollapsedMode = () => <Accordion title={"Menu"} collapsed={true} onChange={callback}/>;
export const UsersUncollapsedMode = () => <Accordion title={"Users"} collapsed={false} onChange={callback}/>;
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion title={"Users"} collapsed={value} onChange={() => setValue(!value)}/>
}