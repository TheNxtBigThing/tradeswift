import React, { useState } from "react";
import CreateTrade from "../widgets/CreateTrade";
import CreateOwner from "../widgets/CreateOwner";
import CreateDocuments from "../widgets/CreateDocuments";
import { IoAddCircle } from "react-icons/io5";

const FileTrade = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    type: "",
    ownerType: "",
    owners: [
      {
        ownerName: "",
        contact: "",
        email: "",
        aadhar: null,
        pancard: null,
        address: "",
      },
    ],
    descriptionFile: null,
    form48: null,
    dateOfUse: null,
    GSTDoc: null,
    logo: null,
    MSMERegistration: null,
    Bills: [{}],
  });

  const [showOwners, setShowOwners] = useState(false);
  const [showDocuments, setShowDocuments] = useState(false);
  const [showFormData, setShowFormData] = useState(false);

  // Function to handle saving form data in FileTrade component
  const handleSaveFormData = (data, index) => {
    setFormData(data); // Update form data state with the received data
  };

  // Function to handle moving to the next step
  const handleNextStep = () => {
    if (!showOwners) {
      setShowOwners(true); // Show CreateOwner component
    } else if (!showDocuments) {
      setShowDocuments(true); // Show CreateDocuments component
    }
  };
  const receiveFormData = (data) => {
    console.log("Form Data from CreateDocuments:", data);
  };

  // Function to handle going back to the previous step
  const handleGoBack = () => {
    if (showDocuments) {
      setShowDocuments(false); // Hide CreateDocuments component
    } else if (showOwners) {
      setShowOwners(false); // Hide CreateOwner component
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className=" mx-auto mt-8  bg-white rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">File TradeMark</h2>

        {/* Render CreateTrade component */}
        {!showOwners && !showDocuments && (
          <CreateTrade onSaveFormData={handleSaveFormData} onNext={handleNextStep} />
        )}

        {/* Render CreateOwner components */}
        {showOwners && !showDocuments && 
          formData.owners.map((owner, index) => (
            <CreateOwner
              key={index}
              onSaveFormData={(data) => handleSaveFormData(data, index)}
              onGoBack={handleGoBack}
              type={formData.ownerType}
              ownerIndex={index}
              onNext={handleNextStep} // Pass onNext prop to CreateOwner
            />
          ))}

        {/* Render CreateDocuments component */}
        {showDocuments && <CreateDocuments onSaveFormData={handleSaveFormData} alldata={formData}  onReceiveFormData={receiveFormData}  type={formData.ownerType} onGoBack={handleGoBack} />}

        {showOwners &&  formData.ownerType === "INDIVIDISUAL" && (
          <div className="flex justify-end items-end">
            <div
              id="addpartner"
              className="border-2 border-sky-400 w-min gap-2 rounded-full p-2 flex justify-center items-center"
              onClick={handleNextStep}
            >
              <p className="font-bold text-nowrap">Add Owner</p>
              <IoAddCircle style={{ fontSize: "1.5rem" }} className="" />
            </div>
          </div>
        )}

        {/* Show/Hide Form Data button */}
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowFormData(!showFormData)}
        >
          {showFormData ? "Hide FormData" : "Show FormData"}
        </button>

        {/* Display Form Data */}
        {showFormData &&  (
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Form Data</h3>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileTrade;

