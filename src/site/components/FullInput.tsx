import React, {ChangeEvent, useState} from 'react';

export const FullInput = () => {
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
