import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import {
    Button,
    SearchCity,
    SearchEmpresa,
    SearchSupermarket,
    Sidebar,
    TextField
} from "../../components"
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { addNewSupermarket, addProduct } from "../../service"
import { useStyles } from "./styles";
export default function AddSupermarket() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState(false);
    const [city, setCity] = useState([]);
    const [supermarket, setSupermarket] = useState([]);

    const { register, handleSubmit, formState: { errors } } = useForm();

    function refreshPage(ms) {
        setTimeout(function () { window.location.reload(false) }, ms);
    }

    const onSubmit = data => {
        const { valor, codigoProduto, nome, imagem } = data

        const preco = {
            "valor": valor
        }

        if (supermarket) {
            preco.idUnidadeEmpresa = supermarket;
        }

        const payload = {
            "codigoProduto": codigoProduto,
            "nome": nome,
            "imagem": imagem,
            "preco": preco
        }


        addProduct(payload)
            .then(() => {
                toast.success("Criado com sucesso !");
                setAlert(true);
            })
            .catch(error => {
                toast.error(error.message);
                setAlert(true);
            });
    };


    return (
        <Sidebar>
            <ToastContainer />
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Cadastrar Produto
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <SearchCity width="100%" label="Cidade" setCity={setCity} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label={"Código do produto"}
                            register={register}
                            name={"codigoProduto"}
                            errors={errors}
                            msgError={"Campo obrigatório"}
                            required
                            type="text"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label={"Nome do produto"}
                            register={register}
                            name={"nome"}
                            errors={errors}
                            msgError={"Campo obrigatório"}
                            required
                            type="text"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label={"Url imagem do produto"}
                            register={register}
                            name={"imagem"}
                            errors={errors}
                            msgError={"Campo obrigatório"}
                            required
                            type="text"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label={"Preço"}
                            register={register}
                            name={"valor"}
                            errors={errors}
                            msgError={"Campo obrigatório"}
                            required
                            type="text"
                        />
                    </Grid>

                    <Grid item xs={12}>
                        {city?.id > 0 && (
                            <SearchSupermarket
                                label="Mercado"
                                width="100%"
                                setSupermarket={setSupermarket}
                                idCity={city?.id} />
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            variant="contained"
                            title="Enviar" />
                    </Grid>
                </Grid>
            </form>
        </Sidebar>
    )
}