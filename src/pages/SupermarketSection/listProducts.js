import React, { useState } from "react";
import { useQuery } from "react-query";
import {
    ListLoadingScreen,
    ErrorFound,
    ProductsList,
    Status
} from "../../components"
import { getProductsIdMercado } from "../../service";

export function ListProductsSupermaket({ idMercado }) {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [contentPage, setContentPage] = useState([]);

    const { isLoading, isError, error } = useQuery({
        queryKey: ['products', page, idMercado],
        queryFn: () => getProductsIdMercado(page, idMercado),
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
        <>
            {contentPage?.length > 0 ? (
                <ProductsList page={page} setPage={setPage} contentPage={contentPage} totalPages={totalPages} />
            ) :
                <>
                <Status message="Nenhum produto foi encontrado" />
                </>

            }
        </>
    )
}