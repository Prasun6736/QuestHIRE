"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_qovrd1e", "template_nosds8f", formData, "IWfsfRUER0fuh_d2x")
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("Failed to send message", error);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <footer className="shadow-sm bg-white text-blue-600 py-16">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 items-start gap-8">
        {/* Left Section */}
        <div className="space-y-6 text-left">
          <h2 className="text-2xl font-bold text-blue-800">We Value Your Feedback!</h2>
          <p className="text-blue-600 leading-relaxed">
          Your insights help us improve your interview experience. Share your
          thoughts and suggestions to help us serve you better!
          </p>

          {/* Contact Info Section */}
          <div className="space-y-4 text-blue-800">
            <div className="flex items-center gap-3">
              <img
                src="/address.png"
                alt="Address Icon"
                className="w-6 h-6"
              />
              <div>
                <h3 className="font-bold text-blue-800">ADDRESS</h3>
                <p>Fiem ,India</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="/phone.png"
                alt="Phone Icon"
                className="w-6 h-6"
              />
              <div>
                <h3 className="font-bold text-blue-800">PHONE NUMBER</h3>
                <p>+91 7908806552</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <img
                src="/email.png"
                alt="Email Icon"
                className="w-7 h-6"
              />
              <div>
                <h3 className="font-bold text-blue-800">EMAIL</h3>
                <p>prasunmridha6@gmail.com</p>
              </div>
            </div>

            {/* Copyright Line */}
            <p className="text-sm font-bold text-blue-600 mt-4">
              © All Rights Reserved | Powered by QuestHIRE
            </p>
          </div>
        </div>

        {/* Right Section (Form) */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-full max-w-sm ml-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-blue-300 p-3 bg-white text-blue-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-blue-300 p-3 bg-white text-blue-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-blue-300 p-3 bg-white text-blue-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full border border-blue-300 p-3 bg-white text-blue-800 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-3 px-6 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
