import {FcDeleteDatabase} from "react-icons/fc";
import { useDispatch } from "react-redux";
import  { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";



const CartItem = ({ item, itemIndex }) => {

  const dispatch = useDispatch();

  function removeFromCart(){              
    dispatch(remove(item.id));
    toast.error("Item REmoved From Cart");
  }

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-11  space-y-5 mt-11">
      <div className="h-[180px]">
        <img src={item.image} alt="item" className="w-full h-full"/>
      </div>

      <div className="space-y-5">
        <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
        <h3 className="w-40 text-gray-400 font-normal text-[10px] text-left">
        {item.description.split(" ").slice(0, 10).join(" ") + "..."}</h3>
        <div className="flex justify-between items-center">
          <p>$ {item.price}</p>
          <div onClick={removeFromCart}>
            <FcDeleteDatabase className="h-[50px]"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
