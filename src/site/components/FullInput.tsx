import React, {ChangeEvent, useState} from 'react';

type FullInputType = {
    addMessage: () => void
}

export const FullInput = (props: FullInputType) => {
    let [title, setTitle] = useState('')
    console.log(title)
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    return (
        <div>
            <input type="text" onChange={onChangeInputHandler}/>
            <button onClick={() => {}}>+</button>
        </div>
    );
};
