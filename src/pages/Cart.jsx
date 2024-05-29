import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="mb-8">
      {cart.length > 0 ? (
        <div className="flex flex-col md:flex-row md:max-w-4xl
        p-2 mx-auto space-y-10 gap-20 min-h-[80vh] md:justify-center">
          <div >
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <div className="font-bold text-green-600 text-2xl">Your Cart</div>
              <div className="font-bold text-green-600 text-4xl">Summary</div>
              <p>Total Items : {cart.length}</p>
            </div>

            <div className="flex flex-col space-y-2">
              <p>Total Amount: ${totalAmount}</p>
              <button
              className="text-white  bg-green-600 rounded-full font-semibold
        text-[12px] p-2 px-3 uppercase hover:bg-white hover:text-black hover:border-2 border-green-600 *: transition duration-300 ease-in"
              >Checkout Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-[80vh] gap-8">
          <h1 className="text-3xl text-green-600 font-bold ">Cart Empty</h1>
          <Link to={"/"}>
            <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
        text-xl p-2 px-8 uppercase hover:bg-gray-700 hover:text-white *: transition duration-300 ease-in"
            >Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
