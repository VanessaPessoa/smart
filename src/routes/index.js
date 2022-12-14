import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Page from "../pages"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<Page.SupermarketList />} />
                <Route path="/add-supermarket"  element={<Page.AddSupermarket />} />
                <Route path="/add-product"  element={<Page.AddProduct />} />
                <Route path="/add-product/city=:idCity/supermarket=:idSupermarket" element={Page.AddProduct} />
                <Route path="/products"  element={<Page.ProductList />} />
                <Route path="/product=:id/supermarket=:idMercado" element={<Page.ProductSection />} />
                <Route path="/supermarket=:idMercado/city=:cidade/uf=:uf" element={<Page.SupermarketSection />} />
                <Route path="*" element={<Page.ErrorFound status={404} message="page not found" />} />
            </Routes>
        </BrowserRouter>
    );
}