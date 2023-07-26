"use client";
let postMethod = async (data: any) => {
  try {
    const response = await fetch(`/api/add`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log("Cart items:", result);
  } catch (error) {
    console.log(error);
  }
};

let getMethod = async () => {
  try {
    const response = await fetch(`/api/add`); // Replace "/api/get" with the actual API endpoint URL
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data.res; // Assuming the response contains the "res" property with the cart items
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong");
  }
};

let putMethod = async (data: any) => {
  try {
    await fetch(`/api/add`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteMethod = async (product_id: any, userId: any) => {
  try {
    const res = await fetch(
      `/api/add?product_id=${product_id}&user_id=${userId}`,
      {
        method: "DELETE",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to delete data");
    }

    const result = await res.json();

    // Perform additional actions based on the response
    console.log("Data deleted successfully:", result);
    // Update the UI or display a success message to the user
  } catch (error) {
    console.error("Error deleting data:", error);
    // Display an error message or handle the error in an appropriate way
  }
};

export { getMethod, postMethod, putMethod, deleteMethod };
