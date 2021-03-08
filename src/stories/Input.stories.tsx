import React, {useRef, useState} from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';


export default {
  title: 'input',
  // component: OnOff,

} as Meta;

export const UncontrolledInput = () => <input/>;

export const TrackValueOfUncontrolledInput = () => {
  const [value, setValue] = useState("")
  return <><input value={value} onChange={(e) => setValue(e.currentTarget.value)}/> - {value}</>
};

export const GetValueOfUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null)

  const save = () => {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)
  }

  return <><input ref={inputRef} /> <button onClick={save}>save</button> - actual value: {value}</>
};

export const ControlledInput = () => {
  const [value, setValue] = useState("")
  return <input value={value} onChange={e => setValue(e.currentTarget.value)}/>
}

export const ControlledCheckbox = () => {
  const [value, setValue] = useState(true)
  return <input type={"checkbox"} checked={value} onChange={e => setValue(e.currentTarget.checked)}/>
}

export const ControlledSelect = () => {
  const [value, setValue] = useState<string | undefined>(undefined)
  return <select value={value} onChange={e => setValue(e.currentTarget.value)}>
    <option> none</option>
    <option value={"1"}>Minsk</option>
    <option value={"2"}>Moscow</option>
    <option value={"3"}>NewYork</option>
  </select>
}

export const ControlledInputWIthFixedValue = () => <input value={"controlled value"}/>;

