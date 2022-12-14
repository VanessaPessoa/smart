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


export default function List({contentPage, setPage, page, totalPages}) {
    const classes = useStyles();

    const navigate = useNavigate();

    const redirectProductSection = (id, idMercado) => {
        navigate(`/product=${id}/supermarket=${idMercado}`,)
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
                        imgUrl={item.imagem}
                        title={item.nome}
                        code={item.codigoProduto}
                        price={item.precoAtual?.valor}
                        label="Ver produto"
                        onClick={() => redirectProductSection(item.id, item.unidadeEmpresaResponse.id)}
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