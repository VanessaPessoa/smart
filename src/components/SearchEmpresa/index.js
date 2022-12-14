import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { addEmpresa, getEmpresa } from '../../service';
import { toast } from 'react-toastify';
import Toastfy from '../Toastfy';

const filter = createFilterOptions();

export default function FreeSoloCreateOptionDialog({ width = 300, setEmpresa, idCity }) {
    const [value, setValue] = useState(null);

    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, toggleOpen] = useState(false);
    const [dialogValue, setDialogValue] = useState({
        nome: '',
        logo: '',
        site: ''
    });
    const getOptions = async (value) => {
        const result = await getEmpresa(idCity);
        setOptions(result.data?.content)
    }
    useEffect(() => {
        if (loading) {
            getOptions();
            setLoading(false);
        }
    }, [loading])

    const handleClose = () => {
        setDialogValue({
            nome: '',
            logo: '',
            site: ''
        });
        toggleOpen(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();

        addEmpresa(dialogValue)
            .then((response) =>{
                const idEmpresa = response.data.data?.id;
                dialogValue.id = idEmpresa;
                setEmpresa(idEmpresa)
                options.push(dialogValue);
                toast.success("Empresa criada!");
            })
            .catch((err) => console.log(err.message));

        setValue({
            nome: dialogValue.nome,
            logo: dialogValue.logo,
            site: dialogValue.site,
        });
        handleClose();
    };

    return (
        <>
        <Toastfy />
            <Autocomplete
                onChange={(event, newValue) => {
                    if (typeof newValue === 'string') {
                        setTimeout(() => {
                            toggleOpen(true);
                            setDialogValue({
                                nome: newValue,
                                logo: '',
                                site: ''
                            });
                        });
                    } else if (newValue && newValue.inputValue) {
                        toggleOpen(true);
                        setDialogValue({
                            nome: newValue.inputValue,
                            logo: '',
                            site: ''
                        });
                    } else {
                        setEmpresa(newValue?.id);
                    }
                }}
                filterOptions={(options, params) => {
                    const filtered = filter(options, params);

                    if (params.inputValue !== '') {
                        filtered.push({
                            inputValue: params.inputValue,
                            nome: `Add "${params.inputValue}"`,
                        });
                    }

                    return filtered;
                }}
                id="free-solo-dialog-demo"
                options={options}
                getOptionLabel={(option) => {
                    if (typeof option === 'string') {
                        return option;
                    }
                    if (option.inputValue) {
                        return option.inputValue;
                    }
                    return option.nome;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                renderOption={(props, option) => <li {...props}>{option.nome}</li>}
                sx={{ width: { width } }}
                freeSolo
                renderInput={(params) => <TextField {...params} label="Empresa" />}
            />

            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={onSubmit}>
                    <DialogTitle>Adicionar nova empresa</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Não encontrou a empresa que estava buscando? Adicione aqui!
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            value={dialogValue.nome}
                            onChange={(event) =>
                                setDialogValue({
                                    ...dialogValue,
                                    nome: event.target.value,
                                })
                            }
                            label="nome"
                            type="text"
                            variant="standard"
                        />
                        <TextField
                            margin="dense"
                            id="name"
                            value={dialogValue.logo}
                            onChange={(event) =>
                                setDialogValue({
                                    ...dialogValue,
                                    logo: event.target.value,
                                })
                            }
                            label="logo"
                            variant="standard"
                        />
                        <TextField
                            margin="dense"
                            id="name"
                            value={dialogValue.site}
                            onChange={(event) =>
                                setDialogValue({
                                    ...dialogValue,
                                    site: event.target.value,
                                })
                            }
                            label="site"
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancelar</Button>
                        <Button type="submit">Adicionar</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
}
