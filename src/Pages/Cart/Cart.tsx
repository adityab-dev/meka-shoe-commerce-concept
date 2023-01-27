import { useAppSelector } from "../../store/hooks/hooks";

function Cart() {
    const isUserLoggedIn = useAppSelector((state) => state.users.loginStatus.isLoggedIn);

    return isUserLoggedIn ? <div>Cart</div> : <div>Cart</div>;
}

export default Cart;
