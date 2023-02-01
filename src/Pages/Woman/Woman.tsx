import { Navigate } from "react-router-dom";
import ProductsContent from "../../Components/ProductsContent/ProductsContent";
import { loginPath } from "../../paths/paths";
import { useAppSelector } from "../../store/hooks/hooks";

import arrival_shoes_src from "./../../Assets/woman_shoes_top.png";

function Woman() {
  const isLoggedIn = useAppSelector((state) => state.users.loginStatus.isLoggedIn);

  return isLoggedIn ? <ProductsContent image={arrival_shoes_src} /> : <Navigate to={loginPath} />;
}

export default Woman;
