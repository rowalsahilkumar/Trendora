import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { toast } from "react-hot-toast";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantities, setQuantities] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        const fetchedProducts = response.data.products;
        setProducts(fetchedProducts);

        const initialQuantities = {};
        fetchedProducts.forEach((product) => {
          initialQuantities[product.id] = 0;
        });
        setQuantities(initialQuantities);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to load products");
        setLoading(false);
      });
  }, []);

  const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }));
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 0;

    const item = {
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.thumbnail,
      quantity,
    };

    dispatch(addToCart(item));
    toast.success(`${quantity} × ${product.title} added to cart! ✅`);
  };

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-extrabold text-center mb-10">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-2xl p-5 shadow-xl bg-white">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-contain rounded-lg"
            />
            <h2 className="text-xl font-bold mt-3">{product.title}</h2>
            <p className="text-gray-700 font-semibold mb-2">${product.price}</p>

            {/* ⭐ Ratings with Stars */}
            <div className="flex items-center text-yellow-500 mb-2">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i}>
                  {i < Math.round(product.rating) ? "★" : "☆"}
                </span>
              ))}
              <span className="ml-2 text-gray-600 text-sm">({product.rating})</span>
            </div>

            <div className="flex items-center space-x-3 mb-4">
              <button
                onClick={() => handleQuantityChange(product.id, -1)}
                className="px-3 py-1 text-lg bg-gray-200 rounded hover:bg-gray-300 font-bold"
              >
                −
              </button>
              <span className="text-lg font-semibold">
                {quantities[product.id] || 0}
              </span>
              <button
                onClick={() => handleQuantityChange(product.id, 1)}
                className="px-3 py-1 text-lg bg-gray-200 rounded hover:bg-gray-300 font-bold"
              >
                +
              </button>
            </div>

            <button
              onClick={() => handleAddToCart(product)}
              className={`w-full py-2 rounded-lg font-bold transition-all ${
                (quantities[product.id] || 0) === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
              disabled={(quantities[product.id] || 0) === 0}
            >
              Add {quantities[product.id] || 0} to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
