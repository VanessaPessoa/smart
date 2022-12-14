import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import {
    Button,
    SearchCity,
    SearchEmpresa,
    Sidebar,
    TextField
} from "../../components"
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import {addNewSupermarket} from "../../service"

export default function AddSupermarket() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [city, setCity] = useState([]);
    const [empresa, setEmpresa ] = useState(0);
    const [alert, setAlert] = useState(false);

    function refreshPage(ms) {
        setTimeout(function () { window.location.reload(false) }, ms);
    }

    const onSubmit = data => {
        const { endereco } = data

        const payload = {
            "idEmpresa": empresa,
            "endereco": endereco,
            "idCidade": city?.id,
            "longitude": "string",
            "latitude": "string",
        }

        addNewSupermarket(payload)
            .then(() => {
                toast.success("Criado com sucesso !");
                setAlert(true);
            })
            .catch(error => {
                toast.error(error.message);
                setAlert(true);
            });
        refreshPage(5001)
    };

    return (
        <Sidebar>
            {alert && <ToastContainer />}
            <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Cadastrar supermercado
            </Typography>

            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <SearchCity width="100%" label="Cidade" setCity={setCity} />
                    </Grid>
                    {city?.id > 0 &&
                        <Grid item xs={12}>
                            <SearchEmpresa width="100%" idCity={city?.id} setEmpresa={setEmpresa} />
                        </Grid>
                    }

                    <Grid item xs={12}>

                        <TextField
                            label={"Endereço"}
                            register={register}
                            name={"endereco"}
                            errors={errors}
                            msgError={"Campo obrigatório"}
                            required
                            type="text"

                        />
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