"use client";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import PDFFile from "@/components/PDF";
import {
  PDFDownloadLink,
  PDFViewer,
} from "@react-pdf/renderer/lib/react-pdf.browser.es.js";
import logo from "@/assets/images/logo.png";

const Form = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUpload = async () => {
    if (image) {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "ml_default");

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/diyhjfgqr/image/upload`,
          {
            method: "POST",
            body: formData,
          },
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Image uploaded successfully:", data);
          return data.secure_url;
        } else {
          const errorData = await response.json();
          console.error("Error uploading image to Cloudinary:", errorData);
        }
      } catch (error) {
        console.error("An error occurred during the image upload:", error);
      }
    }
  };

  const submit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const url = await handleUpload();
    if (url) {
      formData.picture = url;
      setLoading(false);
      open();
    }
  };
  const [formData, setFormData] = useState({
    names: "",
    passportNumber: "",
    conferenceName: "",
    conferenceVenue: "",
    conferenceStartDate: "",
    conferenceEndDate: "",
    conferenceCode: "",
    department: "",
    address: "",
    picture: logo,
    conferenceTheme: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <Modal opened={opened} onClose={close} fullScreen title="Invitation">
        <PDFDownloadLink
          document={<PDFFile pageData={formData} />}
          fileName="Invitation"
        >
          <button className="py-2 px-4 mb-4 bg-[#ccc] text-white font-bold">
            Download Invitation
          </button>
        </PDFDownloadLink>
        {loading ? (
          <div>
            <ClipLoader size={20} />
          </div>
        ) : (
          <PDFViewer className="w-full h-screen">
            <PDFFile pageData={formData} />
          </PDFViewer>
        )}
      </Modal>
      <form
        onSubmit={(event) => submit(event)}
        className="flex w-full md:w-[48%] md:h-[100%] flex-col gap-2 items-start"
      >
        <div className="w-full flex flex-col gap-1 items-start">
          <label htmlFor="conferenceName" className="">
            Conference Name <span className="text-[#FF0000]">*</span>
          </label>
          <input
            type="text"
            name="conferenceName"
            value={formData.conferenceName}
            onChange={(e) => handleChange(e)}
            id="conferenceName"
            placeholder="Enter The Conference Name"
            className="w-full py-2 px-3 border border-[#ccc] rounded-sm"
            required
          />
        </div>
        <div className="w-full flex flex-col gap-1 items-start">
          <label htmlFor="conferenceTheme" className="">
            Conference Theme <span className="text-[#FF0000]">*</span>
          </label>
          <input
            type="text"
            name="conferenceTheme"
            value={formData.conferenceTheme}
            onChange={(e) => handleChange(e)}
            id="conferenceTheme"
            placeholder="Enter The Conference Theme"
            className="w-full py-2 px-3 border border-[#ccc] rounded-sm"
            required
          />
        </div>

        <div className="w-full flex flex-col gap-1 items-start">
          <label htmlFor="venue" className="">
            Conference Code <span className="text-[#FF0000]">*</span>
          </label>
          <input
            type="text"
            name="conferenceCode"
            value={formData.conferenceCode}
            onChange={(e) => handleChange(e)}
            id="name"
            placeholder="Enter The Conference Code"
            className="w-full py-2 px-3 border border-[#ccc] rounded-sm"
            required
          />
        </div>
        <div className="w-full flex flex-col gap-1 items-start">
          <label htmlFor="date" className="">
            Conference Date <span className="text-[#FF0000]">*</span>
          </label>
          <div className="w-full flex items-center justify-between pl-2">
            <div className="w-[45%] flex flex-col gap-1 items-start">
              <label htmlFor="date" className="text-[95%]">
                Start Date <span className="text-[#FF0000]">*</span>
              </label>
              <input
                type="date"
                name="conferenceStartDate"
                value={formData.conferenceStartDate}
                onChange={(e) => handleChange(e)}
                id="name"
                placeholder="Enter Conference Date"
                className="w-full py-2 px-3 border border-[#ccc] rounded-sm"
                required
              />
            </div>
            <div className="w-[45%] flex flex-col gap-1 items-start">
              <label htmlFor="date" className="text-[95%]">
                End Date <span className="text-[#FF0000]">*</span>
              </label>
              <input
                type="date"
                name="conferenceEndDate"
                value={formData.conferenceEndDate}
                onChange={(e) => handleChange(e)}
                id="name"
                placeholder="Enter Conference Date"
                className="w-full py-2 px-3 border border-[#ccc] rounded-sm"
                required
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-1 items-start">
          <label htmlFor="venue" className="">
            Conference Venue <span className="text-[#FF0000]">*</span>
          </label>
          <input
            type="text"
            name="conferenceVenue"
            value={formData.conferenceVenue}
            onChange={(e) => handleChange(e)}
            id="name"
            placeholder="Enter The Conference Venue"
            className="w-full py-2 px-3 border border-[#ccc] rounded-sm"
            required
          />
        </div>
        <div className="w-full flex flex-col gap-1 items-start">
          <label htmlFor="name" className="">
            Participant Name <span className="text-[#FF0000]">*</span>
          </label>
          <input
            type="text"
            name="names"
            value={formData.names}
            onChange={(e) => handleChange(e)}
            id="name"
            placeholder="Enter Your Names"
            className="w-full py-2 px-3 border border-[#ccc] rounded-sm"
            required
          />
        </div>
        <div className="w-full flex flex-col gap-1 items-start">
          <label htmlFor="conference" className="">
            Department <span className="text-[#FF0000]">*</span>
          </label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={(e) => handleChange(e)}
            id="department"
            placeholder="Enter The Department"
            className="w-full py-2 px-3 border border-[#ccc] rounded-sm"
            required
          />
        </div>
        <div className="w-full flex flex-col gap-1 items-start">
          <label htmlFor="name" className="">
            Address <span className="text-[#FF0000]">*</span>
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={(e) => handleChange(e)}
            id="name"
            placeholder="Enter Your Address"
            className="w-full py-2 px-3 border border-[#ccc] rounded-sm"
            required
          />
        </div>
        <div className="w-full flex flex-col gap-1 items-start">
          <label htmlFor="date" className="">
            Passport Number <span className="text-[#FF0000]">*</span>
          </label>
          <input
            type="text"
            name="passportNumber"
            value={formData.passportNumber}
            onChange={(e) => handleChange(e)}
            id="name"
            placeholder="Enter Your Passport Number"
            className="w-full py-2 px-3 border border-[#ccc] rounded-sm"
            required
          />
        </div>
        <div className="w-full flex flex-col gap-1 items-start">
          <label htmlFor="file" className="">
            Upload Picture <span className="text-[#FF0000]">*</span>
          </label>
          <input
            type="file"
            name="picture"
            id="name"
            onChange={(e) => handleImageChange(e)}
            className="w-full py-2 px-3 border border-[#ccc] rounded-sm"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full ${loading ? "bg-[#ca7062]" : "bg-[#692014]"}  text-white font-bold flex items-center justify-center py-2 rounded-sm`}
        >
          {loading && (
            <span className={"mr-5 flex items-center justify-center"}>
              <ClipLoader size={20} color={"#fff"} />
            </span>
          )}
          {loading ? "Generating Invitation" : "Generate Invitation"}
        </button>
      </form>
    </>
  );
};

export default Form;
