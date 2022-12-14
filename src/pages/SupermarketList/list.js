import React from "react";
import {
    Box,
    Pagination
} from "@mui/material";
import {
    ProductItem,
} from "../../components";

import { useStyles } from "./styles";
import { useNavigate } from "react-router-dom";


export default function List({contentPage, setPage, page, totalPages, cidade, uf}) {
    const classes = useStyles();

    const navigate = useNavigate();

    const redirectSupermarketSection = (idMercado) => {
        navigate(`/supermarket=${idMercado}/city=${cidade}/uf=${uf}`,)
    }

    const handleChange = (_, value) => {
        setPage(value);
    };
  
    return (
        <Box>
            <Pagination
                className={classes.positionCenter}
                page={page}
                count={totalPages}
                onChange={handleChange} />

            <div className={classes.productList}>
                {contentPage.length > 0 && contentPage.map(item =>
                    <ProductItem
                        key={item.id}
                        imgUrl={item.empresa.logo}
                        title={item.empresa.nome}
                        address={item.endereco}
                        label="Ver mercado"
                        onClick={() => redirectSupermarketSection( item.empresa.id)}
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

    )
}