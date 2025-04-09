type ButtonTitle = {
    name: string
}

export const Button = (props: ButtonTitle) => {
    return (
        <button>
            {props.name}
        </button>
    )
}