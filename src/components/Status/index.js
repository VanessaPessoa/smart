import { useStyles } from "./styles";


export default function Status({message}) {
    const classes = useStyles();
    
    return (
     <div className={classes.status}>
        <p>{message} </p>
     </div>
    )
}