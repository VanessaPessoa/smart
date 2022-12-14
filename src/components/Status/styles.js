import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles({
    status:{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 400,
        "& p":{
            font: "24px",
        }
    }
});
