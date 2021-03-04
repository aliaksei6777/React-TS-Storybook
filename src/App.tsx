import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/UncontroledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState(false)

    return (
        <div className={"App"}>
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <br/>
            {/*<UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}*/}
            <Rating value={ratingValue}
                    onClick={setRatingValue}
            />
            <br/>
            {/*<UncontrolledRating/>*/}
            <Accordion title={"Menu"}
                       collapsed={accordionCollapsed}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>
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

