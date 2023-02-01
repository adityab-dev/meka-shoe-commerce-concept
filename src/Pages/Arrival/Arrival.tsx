import { Navigate } from "react-router-dom";
import ProductsContent from "../../Components/ProductsContent/ProductsContent";
import { loginPath } from "../../paths/paths";

import { useAppSelector } from "../../store/hooks/hooks";

import "./Arrival.css";

import arrival_shoes_src from "./../../Assets/arrival_shoes_top.png";

function Arrival() {
  const isLoggedIn = useAppSelector((state) => state.users.loginStatus.isLoggedIn);

  return isLoggedIn === true ? (
    <ProductsContent image={arrival_shoes_src} />
  ) : (
    <Navigate to={loginPath} />
  );
}

export default Arrival;
