import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: (title: string) => void
}

export const FullInput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState('')
    console.log(title)
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onclickButtonHandler = () => {
        props.addMessage(title)
    }
    return (
        <div>
            <input type="text" onChange={onChangeInputHandler}/>
            <button onClick={onclickButtonHandler}>+</button>
        </div>
    );
};
