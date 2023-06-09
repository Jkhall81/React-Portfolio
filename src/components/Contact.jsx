import React from "react";
import contactBg from "../assets/contact.webp";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative w-full h-screen m-auto md:pl-20 p-4 py-16"
    >
      <div
        className="absolute top-0 left-0 h-screen w-full bg-cover"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="w-full h-screen absolute top-0 left-0 bg-black/30 bg-gradient-to-r from-black"></div>
      <div className="relative max-w-6xl mx-auto">
        <h1 className="py-4 text-4xl font-bold text-center text-white">
          Contact
        </h1>
        <form
          action="https://getform.io/f/954d706a-56a6-48ab-8b04-3c01d8278bd1"
          method="POST"
          encType="multipart/form-data"
          className="mx-4 md:mx-auto md:max-w-3xl"
        >
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <div className="flex flex-col">
              <label className="text-white uppercase text-sm py-2">Name</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white uppercase text-sm py-2">Phone</label>
              <input
                className="border-2 rounded-lg p-3 flex border-gray-300"
                type="text"
                name="phone"
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label className="text-white uppercase text-sm py-2">Email</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-white uppercase text-sm py-2">Subject</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="subject"
            />
          </div>
          <div className="flex flex-col py-2">
            <label className="text-white uppercase text-sm py-2">Message</label>
            <textarea
              className="border-2 rounded-lg p-3 border-gray-300"
              rows="10"
              name="message"
            ></textarea>
          </div>
          <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
