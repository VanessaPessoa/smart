import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { ErrorFound, ListLoadingScreen, Sidebar } from "../../components";
import { getSupermaketId } from "../../service";
import ImageDefault from "../../image/mercadoDefault.jpg";
import { Card, CardContent } from "@mui/material";
import Image from "mui-image";
import { useStyles } from "./styles"
import { Language, LocationOn, Storefront } from "@mui/icons-material";
import { ListProductsSupermaket } from "./listProducts";

export default function SupermarketSection() {
    const classes = useStyles();

    let { idMercado, cidade, uf } = useParams();
    const [data, setData] = useState();

    const { isLoading, isError, error } = useQuery({
        queryKey: ['products', idMercado],
        queryFn: () => getSupermaketId(idMercado),
        onSuccess: (data) => {
            const result = data?.data.data;
            setData(result)
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
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <Image width={200} height="auto" fit="contain" src={data?.empresa.logo?.image || ImageDefault} />
                    <div className={classes.supermaket}>
                        <div>
                            <Storefront />
                            <p> Supermercado:  {data?.empresa.nome} </p>
                        </div>
                        <div>
                            <LocationOn />
                            <p> {data?.endereco}, {cidade} - {uf} </p>
                        </div>
                        <div>
                            <Language />
                            <p> {data?.empresa.site} </p>
                        </div>
                    </div>
                </CardContent>

            </Card>
            <ListProductsSupermaket idMercado={idMercado} />

        </Sidebar>
    )
}