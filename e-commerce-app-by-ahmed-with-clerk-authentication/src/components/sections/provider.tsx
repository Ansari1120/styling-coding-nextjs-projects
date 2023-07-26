"use client";
import { store } from "@/app/store/store";
import { Toaster } from "react-hot-toast";

import { Provider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      {children}
      <Toaster position="top-right" reverseOrder={true} />
    </Provider>
  );
};

export default Providers;
