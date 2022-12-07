import {
    ButtonPrimary,
    TitlePrimary,
    ButtonSecundary,
    TitleSecundary
} from "./styles"

export function Button({ title, type, onClick, buttonStyle }) {
    if (buttonStyle === "primary") {
        return (
            <ButtonPrimary type={type} onClick={onClick}>
                <TitlePrimary> {title} </TitlePrimary>
            </ButtonPrimary>
        )
    }

    if (buttonStyle === "secundary") {
        return (
            <ButtonSecundary type={type} onClick={onClick}>
                <TitleSecundary> {title} </TitleSecundary>
            </ButtonSecundary>
        )
    }

}