import { MessageError, Input, Label } from "./styles"

export function TextField({register, name, required, errors, msgError, type, label}){
    return(
        <>
            <Label> {label} </Label>
            <Input {...register(name, { required })} type={type} />
            {errors[name] && <MessageError> {msgError} </MessageError>}

        </>
    )
}