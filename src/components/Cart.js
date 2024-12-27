import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  // to read the cart, you have to subscribed to the store
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      <h1>Cart</h1>
      <div>
        <button onClick={handleClearCart}>Clear Cart</button>
        {cartItems.length === 0 && <p>Cart is Empty!</p>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
