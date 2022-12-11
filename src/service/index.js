import axios from "axios";
import {apiProducts} from "../api";

export function  getProducts() {
    return apiProducts.get("produto?page=1");
}
