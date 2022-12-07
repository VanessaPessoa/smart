import React from "react"
import { TextField, Button } from "../../components"
import { Card, CardLink, Container, Link } from "./styles"
import { useForm } from "react-hook-form";


export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Container>
            <Card>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        label={"E-mail"}
                        register={register}
                        name={"email"}
                        errors={errors}
                        msgError={"Campo obrigatório"}
                        required
                        type="email"
                    />

                    <TextField
                        label={"Senha"}
                        register={register}
                        name={"passward"}
                        errors={errors}
                        msgError={"Campo obrigatório"}
                        required
                        type="password"
                    />

                    <CardLink>
                        <Link>Recuperar Senha</Link>
                        <Link>Continuar sem login</Link>

                    </CardLink>

                    <Button type="submit" title="Entrar" buttonStyle="primary" />
                    <Button  title="Cadastrar" buttonStyle="secundary" />

                </form>
            </Card>
        </Container>
    )
}