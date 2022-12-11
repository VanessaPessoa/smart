import React, { useState } from "react";
import { useQuery } from "react-query";
import {
    Box,
    Pagination
} from "@mui/material";
import {
    Sidebar,
    ErrorFound, 
    ListLoadingScreen,
    ProductItem
} from "../../components";

import { getProducts } from "../../service"
import AddNewProduct from "./addNewProduct";
import { useStyles } from "./styles";
export default function ProductList() {
    const classes = useStyles();
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [contentPage, setContentPage] = useState([]);

    const { isLoading, isError, error } = useQuery({
        queryKey: ['products', page],
        queryFn: () => getProducts(page),
        onSuccess: (data) => {
            const result = data?.data;
            setContentPage(result?.content);
            setTotalPages(result?.totalPage);
        },
        keepPreviousData: true
    });

    const handleChange = (event, value) => {
        setPage(value);
    };

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
                <AddNewProduct />
                <Pagination
                    className={classes.positionCenter}
                    page={page}
                    count={totalPages}
                    onChange={handleChange} />

                <div className={classes.productList}>
                    {contentPage.length > 0 && contentPage.map(item =>
                        <ProductItem 
                            key={item.id}
                            imgUrl={item.imagem}
                            title={item.nome}
                            code={item.codigoProduto} 
                            price={item.precoAtual}
                        />  
                    )}
                </div>
                <Pagination
                    className={classes.positionCenter}
                    page={page}
                    count={totalPages}
                    onChange={handleChange}
                />

            </Box>
        </Sidebar>
    )
}