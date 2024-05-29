import { useState, useEffect } from "react";
import Product from "../components/Product"
import Spinner from "../components/Spinner";


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  async function fetchPost() {
    setLoading(true);

    try {
      const response = await fetch(API_URL);
      const data = await response.json()
      console.log(data);
      setItems(data);
      
    } catch (error) {
      console.log("Error occured");
      setItems([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchPost();
  },[])

  return (
    <div className="">
      {loading ? (
        <div className="h-[80vh] flex justify-center items-center">
          <Spinner />
        </div>
      ) : items.length > 0 ? (
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  max-w-6xl
        p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            items.map((item) => (
              <Product key={item.id} item={item} />
            ))
          }
        </div>
      ) : (
        <div
        className="flex justify-center items-center">No Data Found </div>
      )}
    </div>
  );
};

export default Home;
