import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles({
    button:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        width: 406,
        height: 50,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: 4,
        marginBottom: 20,
    },
    buttonPrimary:{
        background: "linear-gradient(180deg, #96CF74 0%, #C0F59F 100%)"
    },
    ButtonSecundary:{
        backgroundColor: "#F5F5F5",
    },
    title:{
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: 16,
        letterSpacing: "0.003em",
    },
    titlePrimary:{
        color: "#FFFFFF"
    },
    titleSecundary:{
        color:" #4B6621",
    }
});