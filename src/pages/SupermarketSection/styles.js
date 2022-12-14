import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles({
   card: {
      width: "100%"
   },
   content: {
      display: "flex"
   },
   supermaket: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: 16,
      "& div": {
         marginTop: 16,
         display: "flex",
         alignItems: "center",
         "& p": {
            marginLeft: 10
         },
      }
   },
   positionCenter: {
      position: "relative",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      margin: "40px 0"
   },
   buttons: {
      position: "relative",
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      "& button": {
         marginBottom: 10
      }
   },
   box: {
      "& .MuiPaper-root": {
         width: 600
      },
      '@media (max-width: 600px)': {
         "& .MuiPaper-root": {
            width: 400
         },
      },
      '@media (max-width: 400px)': {
         "& .MuiPaper-root": {
            width: 300
         },
      }
   },
   productList: {
      position: "relative",
      width: "100%",
      height: "auto",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap"
   },
   buttonAdd: {
      marginTop: 60
   }
});
