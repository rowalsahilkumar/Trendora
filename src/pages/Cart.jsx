import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
} from "../../features/cart/cartSlice";
import { X } from "lucide-react";

export default function Cart() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  if (!cartState) {
    return (
      <div className="p-10 text-center text-red-500 font-bold">
        Redux cart slice not found!
      </div>
    );
  }

  const { cartItems, totalQuantity, totalPrice } = cartState;

  if (cartItems.length === 0) {
    return (
      <div className="p-10 text-center text-2xl font-bold text-gray-500">
        Your cart is empty 🛒
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-24">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-white shadow-md rounded-lg p-4"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-500">
                  ${item.price.toFixed(2)} x {item.quantity}
                </p>
              </div>
            </div>

            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-red-500 hover:text-red-700"
            >
              <X />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center border-t pt-4">
        <div className="text-lg font-semibold">
          Total ({totalQuantity} items):{" "}
          <span className="text-blue-600">${totalPrice.toFixed(2)}</span>
        </div>
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
