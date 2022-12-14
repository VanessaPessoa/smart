import { Margin } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles({
   card: {
      width: "100%"
   },
   content: {
      display: "flex"
   },
   price: {
      display: "flex",
      flexDirection: "column",
      padding: "20px 60px",
      marginLeft: 15
   },
   product: {
      fontSize: 18,
      fontWeight: 600,
      marginBottom: 16
   },
   avaliacao: {
      display: "flex",
      marginBottom: 16,
      "& div": {
         padding: 16,
         marginRight: 10
      }
   },
   supermaket: {
      "& div": {
         marginTop: 16,
         display: "flex",
         alignItems: "center",
         "& p": {
            marginLeft: 10
         },
      }
   },
   history:{
      marginTop: 60
   },
   pagination:{
      position: "relative",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "end",
      margin: "40px 0"
  
   },
   list:{
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between"
   },
   cardHistory:{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      marginBottom: 16,
      borderBottom: "1px solid #c5c5c5",
      "& div": {
         marginBottom: 16
      }
   }
});
