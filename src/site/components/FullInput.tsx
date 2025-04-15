import React, {ChangeEvent, useState} from 'react';

export const FullInput = () => {
    let [title, setTitle] = useState('')
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {

    }
    return (
        <div>
            <input type="text" onChange={onChangeInputHandler}/>
            <button onClick={() => {}}>+</button>
        </div>
    );
};
