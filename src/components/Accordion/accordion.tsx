import React from 'react';

type ItemType = {
    title: string
    value: any
}
export type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void

}

const MemoizedAccordionTitle = React.memo(AccordionTitle)
const MemoizedAccordionBody = React.memo(AccordionBody)

export function Accordion (props: AccordionPropsType) {
    console.log("Accordion rendering")
        return (
            <div>
                <MemoizedAccordionTitle title={props.title} onChange={props.onChange}/>
                {!props.collapsed && <MemoizedAccordionBody items={props.items} onClick={props.onClick}/>}
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle (props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={(e) => props.onChange()}>---{props.title}---</h3>
}

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody (props: AccordionBodyPropsType){
    console.log("AccordionBody rendering")

    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
        </ul>
    )
}

