import React, {Dispatch, SetStateAction, useState} from 'react';

type AccordionPropsType = {
    title: string

}

function UncontrolledAccordion (props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    console.log("Accordion rendering")
        return (
            <div>
                <AccordionTitle onClick={() => { setCollapsed(!collapsed)}} title={props.title}/>
                {!collapsed && <AccordionBody/>}
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle (props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={() => props.onClick()}>---{props.title}---</h3>
}

function AccordionBody (){
    console.log("AccordionBody rendering")

    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;
