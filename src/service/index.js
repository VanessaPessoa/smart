import {apiProducts} from "../api";

export function getProducts(page) {
    return apiProducts.get(`produto/?page=${page}`)
}
