import { Box, Number, Text} from "./style"

export default function NotFound({status, message}){
    return(
        <Box>
            <Number> {status} </Number>
            <Text> 
            <p>Ooops...</p>
            {message} 
            </Text>
        </Box>
    )
};