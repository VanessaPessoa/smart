import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    Button as ButtonMui
} from "@mui/material";
import { toast } from "react-toastify"
import { Toastfy, TextField, Button } from "../../components";
import { useStyles } from "./styles";
import { updatePrice } from "../../service";


export default function AddNewProduct({ idProduto, idUnidadeEmpresa }) {
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
        const {valor} = data;

        updatePrice(valor, idProduto, idUnidadeEmpresa)
            .then((response) => {
                toast.success("Preço alterado com sucesso !");
                setAlert(true);
                console.log(response)
                refreshPage(5001)


            })
            .catch(error => {
                toast.error(error.message);
                setAlert(true);
            });
    };

    return (
        <div>
            {alert && <Toastfy />}
            <ButtonMui size="small"  onClick={handleClickOpen}>
                 Sugerir novo preço 
            </ButtonMui>

            <Dialog open={open} onClose={handleClose} className={classes.box} >
                <form onSubmit={handleSubmit(onSubmit)} >
                    <DialogContent>
                        <DialogContentText>
                            Preço não condiz com o preço atual? Atualize e contribua conosco.
                        </DialogContentText>
                        <TextField
                            label={"Preço sugerido"}
                            register={register}
                            name={"valor"}
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