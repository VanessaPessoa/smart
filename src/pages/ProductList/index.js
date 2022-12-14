import React, { useState } from "react";
import { useQuery } from "react-query";
import {
    Box
} from "@mui/material";
import {
    Sidebar,
    ErrorFound,
    ListLoadingScreen,
    Status,
    SearchCity,
    ProductsList
} from "../../components";

import { getProducts } from "../../service"
import AddNewProduct from "./addNewProduct";
import { useStyles } from "./styles";


export default function ProductList() {
    const classes = useStyles();
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [contentPage, setContentPage] = useState([]);
    const [city, setCity] = useState([]);

    const { isLoading, isError, error } = useQuery({
        queryKey: ['products', page, city?.id],
        queryFn: () => getProducts(page, city?.id),
        onSuccess: (data) => {
            const result = data?.data;
            setContentPage(result?.content);
            setTotalPages(result?.totalPage);
        },
        keepPreviousData: true,
    });

    if (isLoading) {
        return (
            <ListLoadingScreen />
        )
    }

    if (isError) {
        const status = error.response?.status;
        const message = error.response?.statusText;
        return (
            <ErrorFound status={status} message={message} />
        )
    }

    return (
        <Sidebar>
            <Box p="5">
                <div className={classes.buttons}>
                    <AddNewProduct />
                    <SearchCity
                        label="Cidade"
                        setCity={setCity}
                    />
                </div>
                {city && contentPage?.length > 0 ? (
                    <ProductsList page={page} setPage={setPage} contentPage={contentPage} totalPages={totalPages} />
                ) :
                    <>
                        {city ? <Status message="Nenhum produto foi encontrado"/> :  <Status message="Informe a cidade" />}
                    </>

                }

            </Box>
        </Sidebar>
    )
}