import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages";


export const RouterApp = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}