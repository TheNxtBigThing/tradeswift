import React, { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { IoMdArrowBack } from "react-icons/io";
import { GrLinkNext } from "react-icons/gr";
import { toast } from 'react-hot-toast';

const CreateOwner = ({ onSaveFormData, onGoBack, type, ownerIndex, onNext }) => {
  const [formData, setFormData] = useState({
    ownerName: "",
    contact: "",
    email: "",
    aadhar: null,
    pancard: null,
    address: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value, // Store the file object or value
    });
  };

  const handleSaveData = () => {
    // Check if all fields are filled
    if (
      formData.ownerName &&
      formData.contact &&
      formData.email &&
      formData.address &&
      formData.aadhar &&
      formData.pancard
    ) {
      // Call the onSaveFormData function passed from the parent component
      onSaveFormData(formData, ownerIndex);
      toast.success("Owner has been saved.");
      onNext(); // Trigger the rendering of the next component
    } else {
      // Display toast message for mandatory fields
      toast.error("Please fill in all fields.");
    }
  };

  return (
    <div>
      <div className="createowner">
        <div className="mb-4">
          <label htmlFor="ownerName" className="block text-gray-700">
            Owner Name:
          </label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-md outline-sky-400 p-2 border-2 border-gray-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contact" className="block text-gray-700">
            Contact:
          </label>
          <div className="flex gap-2">
            <select
              id="origin"
              name="origin"
              className="form-select w-min mt-1 block rounded-3xl outline-sky-400 p-2 border-2 border-gray-200"
            >
              <option selected value="IND">
                IND +91
              </option>
              <option value="USA">USA +62</option>
            </select>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="form-input mt-1 block w-full rounded-md outline-sky-400 p-2 border-2 border-gray-200"
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-md outline-sky-400 p-2 border-2 border-gray-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700">
            Address:
          </label>
          <textarea
            type="text"
            id="address"
            name="address"
            rows={3}
            value={formData.address}
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-md outline-sky-400 p-2 border-2 border-gray-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="aadhar" className="block text-gray-700 my-2">
            Upload Aadhar:
          </label>
          <div className="relative rounded-md flex items-center justify-center border-sky-400 p-2 border-2 hover:bg-sky-400 font-bold hover:text-white">
            <input
              type="file"
              id="aadhar"
              name="aadhar"
              onChange={handleChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <FiUploadCloud />
            <span className="ml-2">
              {formData.aadhar ? formData.aadhar.name : "Choose File"}
            </span>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="pancard" className="block text-gray-700 my-2">
            Upload Pancard:
          </label>
          <div className="relative rounded-md flex items-center justify-center border-sky-400 p-2 border-2 hover:bg-sky-400 font-bold hover:text-white">
            <input
              type="file"
              id="pancard"
              name="pancard"
              onChange={handleChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <FiUploadCloud />
            <span className="ml-2">
              {formData.pancard ? formData.pancard.name : "Choose File"}
            </span>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="border-2 border-sky-400 p-2 rounded-full w-min flex justify-between items-center gap-2">
            <button onClick={onGoBack} className="flex items-center gap-2">
              <IoMdArrowBack />
              <span className=" text-nowrap font-bold">Go Back</span>
            </button>
          </div>
          <div
            className="border-2 border-sky-400 p-3 cursor-pointer rounded-full w-min flex justify-end items-center gap-2"
            onClick={handleSaveData}
          >
            <GrLinkNext className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOwner;