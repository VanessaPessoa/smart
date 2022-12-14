import React, { useState } from "react";
import {
    Box,
    Card,
    CardContent,
    Chip,
    Pagination,
    Tooltip,
    Typography
} from "@mui/material";
import {
    ErrorFound,
    ProductItem,
} from "../../components";

import { useStyles } from "./styles";
import { useQuery } from "react-query";
import { getPriceHistory } from "../../service";
import { ThumbDown, ThumbDownOutlined, ThumbUp, ThumbUpOutlined } from "@mui/icons-material";


export default function List({ idUnidadeEmpresa, idProduto }) {
    const classes = useStyles();
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [contentPage, setContentPage] = useState([]);

    const { isLoading, isError, error } = useQuery({
        queryKey: ['products', page],
        queryFn: () => getPriceHistory(page, idUnidadeEmpresa, idProduto),
        onSuccess: (data) => {
            const result = data?.data;
            setContentPage(result?.content);
            setTotalPages(result?.totalPage);
            console.log(result.content)
        },
        keepPreviousData: true,
    });


    if (isLoading) {
        return (
            <div> Carregando... </div>
        )
    }

    if (isError) {
        const status = error.response?.status;
        const message = error.response?.statusText;
        return (
            <ErrorFound status={status} message={message} />
        )
    }
    const handleChange = (_, value) => {
        setPage(value);
    };

    return (
        <Box className={classes.history}>
            <Typography variant="h5"> Histórico de preços </Typography>
            <Pagination
                className={classes.pagination}
                page={page}
                count={totalPages}
                onChange={handleChange} />

            <div className={classes.list}>
                {contentPage.length > 0 && contentPage.map(item =>
                    <div className={classes.cardHistory} key={item.id}>
                        <div> Versão: {item.versao} </div>
                        <div> Preço: {item.valor} </div>
                        <div className={classes.avaliacao}>
                            <Tooltip title="Avaliações Positivas">
                                <Chip
                                    color="success"
                                    icon={<ThumbUpOutlined />}
                                    label={item?.avaliacao?.quantidadeAvaliacoesPositivas}
                                    variant="outlined"
                                />
                            </Tooltip>
                            <Tooltip title="Avaliações negativas">
                                <Chip
                                    color="error"
                                    icon={<ThumbDownOutlined />}
                                    label={item?.avaliacao?.quantidadeAvaliacoesNegativas}
                                    variant="outlined"
                                />
                            </Tooltip>
                        </div>
                    </div>
                )}
            </div>
            <Pagination
                className={classes.pagination}
                page={page}
                count={totalPages}
                onChange={handleChange}
            />
        </Box>

    )
}