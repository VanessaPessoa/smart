import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    boxWithSkeleton:{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexWrap: 'wrap',
        flexDirection: "row",
        overflow: "scroll"
    },
    menuSkeleton:{
        width: "20%",
    },
    childrenSkeleton:{
        minHeight: "100vh",
        width: "75%",
        marginTop: 60
    },
    paginationSkeleton:{
        width: "100%",
        display: "flex",
        margin: "15px 0",
        justifyContent: "center"

    },
    listSkeleton:{
        position: "relative",
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap"

    },
    itemSkeleton:{
        position: "relative",
        width: "30%",
        marginBottom: 10
    }
});