import React from "react";
import {
  Person,
  Telegram,
  Email,
  PhoneAndroid,
  Comment,
} from "@mui/icons-material";
import FormSubmit from "./FormSubmit";

const Contact = () => {
  return (
    <div className="flex flex-center justify-center mt-[50px]">
      <FormSubmit />
      <div className="bg-white p-8 rounded-lg w-[30vw] shadow-md m-[50px]">
        <h2 className="text-xl font-semibold mb-6 text-center dark:text-black">Contact Us</h2>
        <form
          className="space-y-4 g-form"
          method="post"
          data-email="nishantvedjadhav@gmail.com"
          action="https://script.google.com/macros/s/AKfycbxe7Bha36F30GOTOoQUCDPLoJ6uvtHbP42rJT_fMKStpvlluXfeD9gcyVWgzgEvehEI7A/exec"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              <Person /> Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              <Email /> Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="mobile"
              className="block text-sm font-medium text-gray-700"
            >
              <PhoneAndroid /> Mobile
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              <Comment /> Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="3"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit <Telegram />
            </button>
            <div style={{ display: "none" }} className="thankyou_message">
              <h2>
                <em>Thanks</em> for contacting us! We will get back to you soon!
              </h2>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
