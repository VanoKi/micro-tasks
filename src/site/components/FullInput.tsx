import {ChangeEvent, useState} from 'react';
import {Input} from "./Input.tsx";

type FullInputPropsType = {
    addMessage: (title: string) => void
}

export const FullInput = (props: FullInputPropsType) => {
  let [title, setTitle] = useState('')
  console.log(title)

  const oncChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  }

  const onClickButtonHandler = () => {
    props.addMessage(title)
    setTitle('')
  }

  return (
    <div>
      <input value={title} onChange={oncChangeInputHandler}/>
      <button onClick={onClickButtonHandler}> +</button>
    </div>
  );
};
