import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles({
    positionCenter:{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: "40px 0"
    },
    buttonAdd:{
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "end",
    },
    box: {
        "& .MuiPaper-root":{
            width: 600
        },
        '@media (max-width: 600px)': {
            "& .MuiPaper-root":{
                width: 400
            },
        },
        '@media (max-width: 400px)': {
            "& .MuiPaper-root":{
                width: 300
            },
        }
    },
    productList:{
        position: "relative",
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap"
    }

});
