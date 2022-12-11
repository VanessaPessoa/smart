import {
    useStyles
} from "./styles"

import { Button } from "@mui/material";
import { clsx } from 'clsx';

export default function Buttons({ title, type, onClick, variant, icon }) {
    const classes = useStyles();
    return (
        <Button 
            type={type}
            onClick={onClick}
            startIcon={icon}
            variant={variant}
        >
            <p className={clsx(
                classes.title
            )}>
                {title}
            </p>
        </Button>
    );

}