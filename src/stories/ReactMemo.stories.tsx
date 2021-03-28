import React from "react";
import {Meta} from '@storybook/react/types-6-0';
import {useState} from "react";

export default {
    title: 'React.memo demo',
    // component:
} as Meta;


const NewMessagesCounter = (props: { count: number }) => {
    return  <div>{props.count}</div>
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log("USERS")
    return <div>
        {props.users.map((u,i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log("Example")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artyom'])

    const addUser = () => {
        const newUser = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUser)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}