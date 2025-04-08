type FooterTypes = {
    titleForFooter: string
}

export const Footer = (props: FooterTypes) => {
    return (
        <footer>{props.titleForFooter}</footer>
    )
}