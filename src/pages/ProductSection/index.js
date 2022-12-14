import { Card, CardActions, CardContent, Chip } from "@mui/material";
import Image from "mui-image";
import React, { useState } from "react"
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import {
    ErrorFound,
    SectionLoadingScreen,
    Sidebar,
    Status,
    Toastfy
} from "../../components"
import { classifyPrice, getProductId } from "../../service";
import { toast } from "react-toastify"
import ImageDefault from "../../image/default.jpg"
import { useStyles } from "./styles";
import { Language, LocationOn, Storefront, ThumbDown, ThumbUp } from "@mui/icons-material";
import AddNewPrice from "./addNewPrice";
import History from "./history"


export default function ProductSection() {
    const classes = useStyles();
    let { id, idMercado } = useParams();
    const [product, setProduct] = useState([]);
    const [price, setPrice] = useState([]);
    const [avaliation, setAvaliation] = useState([]);
    const [supermaket, setSupermakert] = useState([]);
    const [alert, setAlert] = useState(false);


    function refreshPage(ms) {
        setTimeout(function () { window.location.reload(false) }, ms);
    }

    const classify = (tipoAvaliacao, idPreco) => {
        classifyPrice(tipoAvaliacao, idPreco).then((response) => {
            toast.success("Avaliado com sucesso !");
            setAlert(true);
            refreshPage(5001);
        }).catch((err) => {
            toast.error(err?.message);
            setAlert(true);
        });
    }

    const { isLoading, isError, error } = useQuery({
        queryKey: ['product data', id, idMercado],
        queryFn: () => getProductId(id, idMercado),
        onSuccess: (data) => {
            const result = data.data.data;
            setProduct(result);
            setPrice(result.precoAtual);
            setAvaliation(result.precoAtual?.avaliacao);
            setSupermakert(result.unidadeEmpresaResponse)
        },
        keepPreviousData: true,
    });

    if (isLoading) {
        return <SectionLoadingScreen />
    }

    if (isError) {
        const status = error.response?.status;
        const message = error.response?.statusText;
        return (
            <ErrorFound status={status} message={message} />
        )
    }

    const productEmpty = () => {
        if (!avaliation && !supermaket) {
            return true;
        }
        return false;
    }

    return (
        <Sidebar>
            {alert && <Toastfy />}

            {product && (
                <Card className={classes.card}>
                    <CardContent>
                        <div className={classes.content}>
                            <Image width={200} height="auto" fit="contain" src={product?.image || ImageDefault} />

                            <div className={classes.price}>
                                <span className={classes.product}>
                                    {product.nome} - R${price?.valor}
                                </span>


                                {avaliation &&
                                    <div className={classes.avaliacao}>
                                        <Chip
                                            color="success"
                                            icon={<ThumbUp />}
                                            label={avaliation?.quantidadeAvaliacoesPositivas}
                                            onClick={() => classify("POSITIVA", price?.id)}
                                        />
                                        <Chip
                                            color="error"
                                            icon={<ThumbDown />}
                                            label={avaliation?.quantidadeAvaliacoesNegativas}
                                            onClick={() => classify("NEGATIVA", price?.id)}
                                        />
                                    </div>
                                }

                                {supermaket &&
                                    <div className={classes.supermaket}>
                                        <div>
                                            <Storefront />
                                            <p> Supermercado:  {supermaket.empresa.nome} </p>
                                        </div>
                                        <div>
                                            <LocationOn />
                                            <p> {supermaket.endereco} </p>
                                        </div>
                                        <div>
                                            <Language />
                                            <p> {supermaket.empresa.site} </p>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </CardContent>

                    <CardActions>
                        {!productEmpty() && (
                            <AddNewPrice
                                idProduto={product?.id}
                                idUnidadeEmpresa={supermaket?.id} />
                        )}
                    </CardActions>
                </Card>
            )}

            {productEmpty() ?
                <Status message="No momento produto não possui informações" />
                : <History idUnidadeEmpresa={supermaket?.id} idProduto={product?.id} />
            }
        </Sidebar>
    )
}