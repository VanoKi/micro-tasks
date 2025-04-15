
type ButtonPropsType = {
    title: string
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {
    const onclickButtonHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onclickButtonHandler}>{props.title}</button>
    );
};

