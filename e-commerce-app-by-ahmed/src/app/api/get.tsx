// Import necessary dependencies

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMethod } from "./calls";
import { cartActions } from "../store/slice/cartSlice";

const GetAddedData = () => {
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     const fetchApiForAllCartItems = async () => {
  //       try {
  //         const response = await getMethod();
  //         dispatch(cartActions.addToCart({ product: response, quantity: 0 }));
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  //     fetchApiForAllCartItems();
  //   }, []);

  // Rest of your component code...

  return <>data Updated to redux store</>;
};

export default GetAddedData;
