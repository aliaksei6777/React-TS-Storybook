import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";

const MemoizedOnOff = React.memo(OnOff)
const MemoizedRating = React.memo(Rating)
const MemoizedAccordion = React.memo(Accordion)

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    let [switchOn, setSwitchOn] = useState(false)


    return (
        <div className={"App"}>
            <MemoizedOnOff on={switchOn} onChange={setSwitchOn}/>
            <MemoizedRating value={ratingValue}
                            onClick={setRatingValue}/>
            <MemoizedAccordion title={"Menu"}
                               collapsed={accordionCollapsed}
                               onChange={() => setAccordionCollapsed(!accordionCollapsed)}
                               items={[{title: "Alex", value: 1},
                                   {title: "Valera", value: 2},
                                   {title: "Max", value: 3},
                                   {title: "Oleg", value: 4}]}
                               onClick={(value) => {
                                   alert(value)
                               }}/>
        </div>
    );
}

export default App;

