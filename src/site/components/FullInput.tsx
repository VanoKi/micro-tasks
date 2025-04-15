import {ChangeEvent, useState} from 'react';

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
        setTitle('')
    }
    return (
        <div>
            <input
                value={title}
                type="text"
                onChange={onChangeInputHandler}/>
            <button
                onClick={onclickButtonHandler}
            >
                +
            </button>
        </div>
    );
};
