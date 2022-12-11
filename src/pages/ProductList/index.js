import React, { useState } from "react";
import { useQuery } from "react-query";
import { Box, Grid, Skeleton } from "@mui/material";
import { Pagination } from "@mui/lab";
import { getProducts } from "../../service"
import { useStyles } from "./styles";
import { Sidebar, ErrorFound} from "../../components";

export default function ProductList() {
    const classes = useStyles();

    const [page, setPage] = useState(1);
    const [elementsPerPage, setElementsPerPage] = useState(0);

    const { isLoading, isError, error, data} = useQuery('get-products', getProducts)

    console.log(error)

    if (!isLoading) {
        return (
            <div> carregando </div>
        )
    }

    // if(isError){
    //     const status = error.response.status;
    //     const message = error.response.statusText;
    //     return(
    //         <ErrorFound status={status} message={message} />
    //     )
    // }

    return (
        <Sidebar>
            <Box p="5">
                <Pagination />
            </Box>
        </Sidebar>
    )
}