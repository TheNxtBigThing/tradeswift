import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { publicRequest, userRequest } from "../redux/requestMethods";
import {useDispatch,useSelector} from 'react-redux';
const Payment = () => {
  const [paymentId, setPaymentId] = useState("");
const user = useSelector((state) =>state.user.user);
  useEffect(() => {
    // Load Razorpay script when component mounts
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    try {
      // Make an API call to create a payment order
      const response = await userRequest(user.token).post("/payment", {
        amount: 1000,
        currency: "INR",
        receipt: "order_rcptid_11",
        userId: user.id,
      });

      // Log the response to verify data
      console.log("Payment order response:", response);

      // Once you get the payment ID from your server, set it in the state
      setPaymentId(response.data._id);

      // Check if Razorpay is initialized
      if (window.Razorpay) {
        const options = {
          key: "rzp_test_HzvZBX3kKR3CoN",
          amount: 1000,
          currency: "INR",
          name: "TheNextBigThing",
          description: "Purchase Description",
          image: {},
          order_id: response._id,
          handler: function (response) {
            toast.success("Payment successful: " + 123456);
          },
          prefill: {
            name: "Customer Name",
            email: "customer@example.com",
            contact: "9999999999",
          },
          theme: {
            color: "#3399cc",
          },
        };
        const razorpay = new window.Razorpay(options);
        razorpay.open();
      } else {
        throw new Error("Razorpay SDK not initialized");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error processing payment. Please try again later.");
    }
  };

  return (
    <div>
      <h1>Razorpay Payment Integration</h1>
      <button onClick={handlePayment} className="border-2 border-sky-400 p-2">Pay Now</button>
    </div>
  );
};

export default Payment;
