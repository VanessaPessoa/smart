import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as Page from "../pages"

export default function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" index element={<Page.SupermarketList />} />
            <Route path="/login" element={<Page.Login />} />
            <Route path="/register" element={<Page.Register />} />
            {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>    );
}