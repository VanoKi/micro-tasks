type ButtonTitle = {
    name: string
    callBack: () => void
}

export const Button = (props: ButtonTitle) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>
            {props.name}
        </button>
    )
}