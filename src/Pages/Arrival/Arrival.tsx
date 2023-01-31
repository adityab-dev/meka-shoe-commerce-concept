import { Navigate } from "react-router-dom";
import ProductsContent from "../../Components/ProductsContent/ProductsContent";
import { loginPath } from "../../paths/paths";

import { useAppSelector } from "../../store/hooks/hooks";

import './Arrival.css'

function Arrival() {
  const isLoggedIn = useAppSelector((state) => state.users.loginStatus.isLoggedIn);
  
  return isLoggedIn === true ? <ProductsContent /> : <Navigate to={loginPath} />;
}

export default Arrival;
