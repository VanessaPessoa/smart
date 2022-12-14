import { useEffect, useState } from "react";
import {
    Autocomplete,
    TextField,
} from "@mui/material";
import { useStyles } from "./styles"
import { getSupermarketUnit } from "../../service";
import { useForm, useWatch } from "react-hook-form"


export default function SearchSupermarket({ label, setSupermarket, idCity, width=300 }) {
    const classes = useStyles();
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(true);

    const { register, control } = useForm();

    const getOptions = async (value) => {
        const result = await getSupermarketUnit(idCity, value);
        setOptions(result.data?.content)
    }

    const value = useWatch({
        control,
        name: "unidade",
    });

    useEffect(() => {
        getOptions(value);
    }, [idCity])

    useEffect(() => {
        if (loading) {
            getOptions();
            setLoading(false);
        }
    }, [idCity])


    return (
        <Autocomplete
            className={classes.input}
            disablePortal
            options={options}
            loading={loading}
            sx={{ width: {width} }}
            disableClearable
            getOptionLabel={(option) => `${option.empresa.nome} - ${option.endereco}`}
            onChange={(_, value) => setSupermarket(value?.id)}
            renderInput={(params) =>
                <TextField
                    className={classes.input}
                    {...params} label={label}
                    {...register("unidade")}
                />}
        />
    )
}