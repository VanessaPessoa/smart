import { useEffect, useState } from "react";
import {
    Autocomplete,
    TextField,
} from "@mui/material";
import { useStyles } from "./styles"
import { getCitys } from "../../service";
import { useForm, useWatch } from "react-hook-form"


export default function SearchCity({ label, setCity, width=300 }) {
    const classes = useStyles();

    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(true);

    const { register, control } = useForm();

    const getOptions = async (value) => {
        const result = await getCitys(value);
        setOptions(result.data?.content)
    }

    const value = useWatch({
        control,
        name: "city",
    });

    useEffect(() => {
        getOptions(value);
    }, [value])

    useEffect(() => {
        if (loading) {
            getOptions();
            setLoading(false);
        }
    }, [loading])


    return (
        <Autocomplete
            className={classes.input}
            disablePortal
            options={options}
            loading={loading}
            sx={{ width: width }}
            disableClearable
            isOptionEqualToValue={(option, value) => option.id === value.id}
            getOptionLabel={(option) => `${option.nomeCidade} - ${option.nomeUf}`}
            onChange={(_, value) => setCity(value)}
            renderInput={(params) =>
                <TextField
                    className={classes.input}
                    {...params} label={label}
                    {...register("city")}
                />}
        />
    )
}