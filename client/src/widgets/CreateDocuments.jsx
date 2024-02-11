import React, { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { IoMdArrowBack } from "react-icons/io";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { CircularProgress } from '@mui/material'; // Import CircularProgress from Mui
import { toast } from "react-hot-toast";
import { Document, Page, pdfjs } from "react-pdf";
import { GrLinkNext } from "react-icons/gr";
import axios from "axios";
import { storage } from '../firebase';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { getDownloadURL } from "firebase/storage";
import { userRequest, publicRequest } from '../redux/requestMethods';
import LottieAnimation from "../components/LottieAnimation";
import { verifying } from "../assets";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const CreateDocuments = ({ onSaveFormData, onGoBack, type,onReceiveFormData,alldata }) => {
  const [formData, setFormData] = useState({
    descriptionFile: null,
    form48: null,
    GSTDoc: null,
    logo: null,
    MSMERegistration: null,
    partnershipDeed: null,
    COIDocument: null,
    Bills: [{}],
  });

  const [uploading, setUploading] = useState(false); // State for showing loader

  const handleChange = (e) => {
    const { name, files } = e.target;

    if (!files || files.length === 0) {
      return;
    }

    const file = files[0];
    const extension = file.name.split(".").pop().toLowerCase();
    const allowedExtensions = ["pdf", "jpg", "jpeg", "png", "gif"];

    if (allowedExtensions.includes(extension)) {
      setFormData({
        ...formData,
        [name]: file,
      });
    } else {
      toast.error("Please upload a valid PDF or image file.");
    }
  };

  const handleSaveData = async () => {
    if (formData.descriptionFile) {
      onSaveFormData(formData); // Save form data to parent component
      toast.success("Documents have been saved.");
      await uploadAndSaveDocuments();
      onReceiveFormData(formData); // Send form data back to parent component
      console.log(alldata);
    } else {
      toast.error("Please upload description file.");
    }
  };
  const uploadAndSaveDocuments = async () => {
    try {
      setUploading(true); // Show loader
      for (const key in formData) {
        if (formData.hasOwnProperty(key) && formData[key]) {
          const file = formData[key];
          const storageRef = ref(storage, `documents/${file.name}`);
          const snapshot = await uploadBytes(storageRef, file);
          const downloadURL = await getDownloadURL(snapshot.ref);
          await saveDocumentToMongoDB(file.name, downloadURL);
        }
      }
      setUploading(false); // Hide loader after uploading
      toast.success("Documents uploaded successfully."); // Show success toast
    } catch (error) {
      console.error("Error uploading documents:", error);
      toast.error("Failed to upload documents.");
      setUploading(false); // Hide loader if there's an error
    }
  };
  

  const saveDocumentToMongoDB = async (documentName, documentURL) => {
    try {
      const response = await publicRequest.post("/document", {
        documentname: documentName,
        documenturl: documentURL,
      });
      console.log("Document saved to MongoDB:", response.data);
    } catch (error) {
      console.error("Error saving document to MongoDB:", error);
      toast.error("Failed to save document details.");
    }
  };

  const RenderPDFField = ({ fieldName, label }) => {
    const file = formData[fieldName];
    const extension = file ? file.name.split(".").pop().toLowerCase() : null;
    const isPDF = extension === "pdf";

    return (
      <div className="mb-4 md:ms-20">
        <label htmlFor={fieldName} className="block text-gray-700 my-2">
          {label}:
        </label>
        <div>
          {file && (
            <div className="ml-2 flex justify-center items-center">
              {isPDF ? (
                <Document
                  file={file}
                  error={<div>Failed to load file</div>}
                >
                  <Page
                    pageNumber={1}
                    width={200}
                    height={200}
                    className="h-[250px] object-cover overflow-hidden border-slate-500 rounded-lg"
                  />
                </Document>
              ) : (
                <img
                  src={URL.createObjectURL(file)}
                  alt="Preview"
                  style={{ maxWidth: "100%", maxHeight: "200px" }}
                />
              )}
            </div>
          )}
        </div>
        <div className="relative rounded-md flex items-center justify-center border-sky-400 p-2 border-2 hover:bg-sky-400 font-bold hover:text-white">
          <input
            type="file"
            id={fieldName}
            name={fieldName}
            onChange={handleChange}
            className="opacity-0 cursor-pointer"
          />
          <FiUploadCloud />
          <span className="ml-2">
            {file ? file.name : "Choose File"}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="flex flex-wrap">
        <RenderPDFField fieldName="descriptionFile" label="Description File" />
        <RenderPDFField fieldName="form48" label="Form 48" />
        <RenderPDFField fieldName="GSTDoc" label="GST Document" />
        <RenderPDFField fieldName="logo" label="Logo" />
        <RenderPDFField
          fieldName="MSMERegistration"
          label="MSME Registration"
        />
        {type !== "INDIVIDUAL" && (
          <>
            <RenderPDFField
              fieldName="partnershipDeed"
              label="Partnership Deed"
            />
            <RenderPDFField fieldName="COIDocument" label="COI Document" />
          </>
        )}
      </div>

      <div className="border-2 border-sky-400 p-2 rounded-full w-min flex justify-between items-center gap-2">
        <button onClick={onGoBack} className="flex items-center gap-2">
          <IoMdArrowBack />
          <span className=" text-nowrap font-bold">Go Back</span>
        </button>
        
      </div>
      
      {uploading && (<div className="fixed w-screen h-screen top-0 start-0 z-50 flex justify-center  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 items-center">
        <LottieAnimation animation={verifying}/>

        </div>)} {/* Show loader if uploading */}

      <div className="border-2 border-sky-400 p-2 hover:bg-sky-400 hover:text-white rounded-full w-min flex justify-between items-center gap-2">
          <button onClick={handleSaveData} className="flex items-center gap-2">
            <IoCheckmarkDoneSharp />
            <span className=" text-nowrap font-bold">FILE TRADEMARK</span>
          </button>
        </div>
        
    </div>
    
  );
};

export default CreateDocuments;
