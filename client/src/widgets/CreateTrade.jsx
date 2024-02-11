import React, { useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { toast } from 'react-hot-toast';

const CreateTrade = ({ onSaveFormData, onNext }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    type: "",
    ownerType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveData = () => {
    // Check if all required fields are filled
    if (formData.companyName && formData.type && formData.ownerType) {
      onSaveFormData(formData);
      onNext(); // Call onNext to trigger the next step
    } else {
      // Display toast message for mandatory fields
      toast.error("Please fill in all fields.");
    }
  };

  return (
    <div>
      <div className="createtrade">
        <div className="mb-4">
          <label htmlFor="companyName" className="block text-gray-700">
            Company Name:
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="form-input mt-1 block w-full rounded-md outline-sky-400 p-2 border-2 border-gray-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-700">
            Type:
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="form-select mt-1 block w-full rounded-md outline-sky-400 p-2 border-2 border-gray-200"
          >
            <option value="">Select Trade-Type</option>
            <option value="PRODUCT_MARK">PRODUCT MARK</option>
            <option value="SERVICE_MARK">SERVICE MARK</option>
            <option value="WORD_MARK">WORD MARK</option>
            <option value="DEVICE_MARK">DEVICE MARK</option>
            <option value="CERTIFICATE_MARK">CERTIFCATE MARK</option>
            <option value="COLLECTIVE_MARK">COLLECTIVE MARK</option>
            <option value="SERIES_MARK">SERIES MARK</option>
            <option value="UNCONVENTIAL_MARK">UNCONVENTIAL MARK</option>
          </select>
        </div>
        <div className="mb-4 type">
          <label htmlFor="ownerType" className="block text-gray-700">
            Owner Type:
          </label>
          <select
            id="ownerType"
            name="ownerType"
            value={formData.ownerType}
            onChange={handleChange}
            className="form-select mt-1 block w-full rounded-md outline-sky-400 p-2 border-2 border-gray-200"
          >
            <option value="">Select Owner Type</option>
            <option value="INDIVISUAL">INDIVIDUAL PROPRIETOR</option>
            <option value="PARTNERSHIP">PARTNERSHIP FIRM</option>
            <option value="COMAPNY">COMPANY</option>
          </select>
        </div>
        <div
          className="border-2 border-sky-400 p-2 rounded-full w-min flex justify-end items-end cursor-pointer"
          onClick={handleSaveData}
        >
          <GrLinkNext className="" />
        </div>
      </div>
    </div>
  );
};

export default CreateTrade;
