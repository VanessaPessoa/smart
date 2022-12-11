import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
    Dialog,
    DialogActions,
    DialogContent,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { apiProducts } from "../../api";
import { toast } from "react-toastify"
import { Toastfy, TextField, Button } from "../../components";
import { useStyles } from "./styles";


export default function ProductList() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function refreshPage(ms) {
        setTimeout(function () { window.location.reload(false) }, ms);
    }

    const onSubmit = data => {
        handleClose();
        apiProducts.post('produto', data)
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
        <div>
            {alert && <Toastfy />}

            <Button
                ariaLabel="adionar novo produto"
                title="Adicione novo produto"
                onClick={handleClickOpen}
                icon={<AddCircleOutlineOutlinedIcon />}
                variant="outlined" />

            <Dialog open={open} onClose={handleClose} className={classes.box} >
                <form onSubmit={handleSubmit(onSubmit)} >
                    <DialogContent  >
                        <TextField
                            label={"Código do produto"}
                            register={register}
                            name={"codigoProduto"}
                            errors={errors}
                            msgError={"Campo obrigatório"}
                            required
                            type="text"
                        />
                        <TextField
                            label={"Nome do produto"}
                            register={register}
                            name={"nome"}
                            errors={errors}
                            msgError={"Campo obrigatório"}
                            required
                            type="text"
                        />
                        <TextField
                            label={"Url imagem do produto"}
                            register={register}
                            name={"imagem"}
                            errors={errors}
                            msgError={"Campo obrigatório"}
                            required
                            type="text"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={handleClose}
                            title="Cancelar"
                            variant="outlined" />
                        <Button
                            type="submit"
                            variant="contained"
                            title="Enviar" />
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    )
}