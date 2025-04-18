import {ChangeEvent} from "react";

export const Input = () => {
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    return (
        <input
            value={title}
            onChange={onChangeInputHandler}
        />
    );
};
