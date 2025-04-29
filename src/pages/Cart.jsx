import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseQuantity,
} from "../../features/cart/cartSlice";
import { X } from "lucide-react";

export default function Cart() {
  const dispatch = useDispatch();
  const { cartItems, totalQuantity, totalPrice } = useSelector((state) => state.cart);

  if (cartItems.length === 0) {
    return (
      <div className="p-10 text-center text-2xl font-bold text-gray-500">
        Your cart is empty 🛒
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-10 text-gray-900">Your Shopping Cart</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 bg-white border border-gray-200 rounded-xl shadow p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-contain rounded-lg border"
              />

              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 mt-1">
                  ${item.price.toFixed(2)} × {item.quantity}
                </p>
                <p className="text-gray-800 font-medium mt-1">
                  Subtotal: ${(item.price * item.quantity).toFixed(2)}
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center mt-3 space-x-3">
                  <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 font-bold text-lg"
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                          image: item.image,
                        })
                      )
                    }
                    className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 font-bold text-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-600 hover:text-red-800 transition"
                title="Remove item"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white border border-gray-200 rounded-xl shadow p-6 h-fit">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Order Summary</h3>
          <div className="flex justify-between text-lg mb-2">
            <span>Total Items:</span>
            <span className="font-medium">{totalQuantity}</span>
          </div>
          <div className="flex justify-between text-lg mb-4">
            <span>Total Price:</span>
            <span className="font-bold text-blue-600">${totalPrice.toFixed(2)}</span>
          </div>
          <button
            onClick={() => dispatch(clearCart())}
            className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition-all duration-300"
          >
            Clear Cart 🗑️
          </button>
        </div>
      </div>
    </div>
  );
}
