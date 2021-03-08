import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/UncontroledAccordion/UncontrolledAccordion";
import OnOff from "./components/OnOff/OnOff";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState(false)

    return (
        <div className={"App"}>
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <br/>
            <Rating value={ratingValue}
                    onClick={setRatingValue}
            />
            <br/>
            <Accordion title={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                       items={[{title: "Alex", value: 1},
                           {title: "Valera", value: 2},
                           {title: "Max", value: 3},
                           {title: "Oleg", value: 4}]}
                       onClick={(value) => {
                           alert(value)}}/>
            <UncontrolledAccordion title={"Menu2"}/>

        </div>
    );
}
type PagePropsType = {
    title: string
}

function PageTitle (props: PagePropsType) {
    console.log("App rendering")
    return <h1>{props.title}</h1>
}

export default App;

