import { Navigate } from "react-router-dom";
import ProductsContent from "../../Components/ProductsContent/ProductsContent";
import { loginPath } from "../../paths/paths";
import { useAppSelector } from "../../store/hooks/hooks";

function Man() {
  const isLoggedIn = useAppSelector((state) => state.users.loginStatus.isLoggedIn);

  return isLoggedIn ? <ProductsContent /> : <Navigate to={loginPath} />;
}

export default Man;
