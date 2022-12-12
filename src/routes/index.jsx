import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/dashboardPage";
import { LoginPage } from "../pages/loginPage";
import { RegisterPage } from "../pages/registerPage";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route index element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />
            <Route path='dashboard/:name' element={<DashboardPage />} />
        </Routes> 
    )
}