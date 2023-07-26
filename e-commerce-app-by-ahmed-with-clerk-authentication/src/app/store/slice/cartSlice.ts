import {
  deleteMethod,
  getMethod,
  postMethod,
  putMethod,
} from "@/app/api/calls";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export interface CartState {
  items: Array<any>;
  anItem: Array<any>;
  totalAmount: number;
  totalQuantity: number;
  multiItems: number;
  checkHit: boolean;
  size?: string;
}

const initialState: CartState = {
  items: [],
  anItem: [],
  totalQuantity: 0,
  totalAmount: 0,
  multiItems: 0,
  checkHit: false,
  size: "",

};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(
      state: CartState,
      action: PayloadAction<{
        methd?: string;
        userId?: any;
        anItem?: any;
        product: any;
        quantity: number;
      }>
    ) {
      const newItem = action.payload.product;

      const ITEM = action.payload.anItem;
      const typeofOperation = action.payload.methd;
      const existingItem = state.items.find((item) => item.id == newItem.id);
      const selectedSize = state.size;
      let totalPrice: any;
      if (ITEM) {
        state.anItem.push(...ITEM);
      }

      state.totalQuantity = state.totalQuantity + action.payload.quantity;
      state.totalAmount =
      state.totalAmount + action.payload.quantity * newItem.price;

      if (!existingItem) {
        totalPrice = newItem.price * action.payload.quantity;
        state.items.push({
          ...newItem,
          quantity: action.payload.quantity,
          totalPrice,
          selectedSize,
        });
      } else {
        totalPrice =
          existingItem.totalPrice +
          existingItem.price * action.payload.quantity;
        existingItem.quantity += action.payload.quantity;
        existingItem.totalPrice = totalPrice;
      }
      state.totalAmount = totalPrice;
      {
        /* apis data operations   */
      }

      switch (typeofOperation) {
        case "post":
          postMethod({
            product_id: newItem.id,
            quantity: state.totalQuantity,
            size: state.size,
            price: state.totalAmount,
            type: newItem.type,
            category: newItem.category.name,
            productname: newItem.name,
          })
            .then(() => {
              console.log("data posted sucessfully");
            })
            .catch((err) => {
              console.log(err);
            });
          break;
        case "put":
          putMethod({
            user_id: newItem.user_id,
            product_id: newItem.product_id,
            quantity: state.totalQuantity,
            size: state.size,
            price: state.totalAmount,
            type: newItem.type,
            category: newItem.category.name,
            productname: newItem.name,
          })
            .then(() => {
              console.log("data updated sucessfully");
            })
            .catch((err) => {
              console.log(err);
            });
          break;
        case "delete":
          deleteMethod(newItem.product_id, newItem.user_id)
            .then(() => {
              state.items = state.items.filter(
                (item) => item.id !== newItem.product_id
              );
              console.log("data deleted sucessfully");
            })
            .catch((err) => {
              console.log(err);
            });
          break;
        default:
          console.log("NO Compatible operation!");
          break;
      }
    },

    removeFromCart(state: CartState, action: PayloadAction<string>) {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item.id === productId);

      state.totalQuantity--;

      state.totalAmount = state.totalAmount - existingItem?.price!;

      if (existingItem?.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== productId);
      } else {
        existingItem!.quantity--;
        existingItem!.totalPrice =
          existingItem!.totalPrice - existingItem?.price!;
      }
    },
    NoOfItems(
      state: CartState,
      action: PayloadAction<{
        Items: number;
        checkHit: boolean | null;
        size?: string;
      }>
    ) {
      state.multiItems = state.multiItems + action.payload.Items;

      if (action.payload.checkHit === false) {
        state.checkHit = true;
      } else {
        state.checkHit = false;
      }
      if (action.payload.size !== undefined) {
        state.size = action.payload.size;
      }
    },

    clearCart(state) {
      state = initialState;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
