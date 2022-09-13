import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Mesas } from "./pages/Mesas";
import PrivateRoutes from "./PrivateRoutes";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/cardapio"} element={<Home />} />
        <Route path={"/cozinha"} element={<Home />} />
        <Route path={"/mesas"} element={<Home />} />
        <Route path={"/home"} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
