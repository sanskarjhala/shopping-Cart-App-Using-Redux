import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const Product = ({ item }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  function removeFromCart() {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  function addToCart() {
    dispatch(add(item));
    toast.success("Added To Cart");
  }

  return (
    <div
      className="flex flex-col items-center justify-between
    hover:scale-110 , transition duration-300 ease-in gap-3 p-4 mt-10 rounded-xl 
    shadow-none hover:shadow-custom  "
    >
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {item.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {item.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={item.image} alt="" className="w-full h-full" />
      </div>
      <div className="flex justify-evenly items-center gap-11">
        <div>
          <p className="text-green-600 font-semibold 
          ">${item.price}</p>
        </div>
        <button 
        className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
        text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white *: transition duration-300 ease-in"
        >
          {cart.some((p) => p.id === item.id) ? (
            <button onClick={removeFromCart}>Remove Item</button>
          ) : (
            <button onClick={addToCart}>Add Item</button>
          )}
        </button>
      </div>
    </div>
  );
};

export default Product;
