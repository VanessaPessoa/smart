import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Page from "../pages"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<Page.SupermarketList />} />
                <Route path="/products" index element={<Page.ProductList />} />
                <Route path="/profile" index element={<Page.UserProfile />} />
                <Route path="/login" element={<Page.Login />} />
                <Route path="/register" element={<Page.Register />} />
                <Route path="/logout" element={<Page.Register />} />
                <Route path="*" element={<Page.ErrorFound status={404} message="page not found" />} />
            </Routes>
        </BrowserRouter>
    );
}