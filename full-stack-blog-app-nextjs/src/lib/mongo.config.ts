import mongoose from "mongoose";

const { MONGO_URI } = process.env;

if (!MONGO_URI) {
  throw new Error("Invalid enviroment Variable MONGO URI");
}

export function connect() {
  mongoose
    .connect(MONGO_URI!, {
      tls: true,
    })
    .then(() => console.log("database connected sucessfully"))
    .catch((e) => {
      console.log("something went wrong", e);
    });
}
