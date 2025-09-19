import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { contact } from "../data/contact";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaDownload } from "react-icons/fa6";

const Contact = () => {
  const form = useRef();
  // const service_id = import.meta.env.SERVICE_ID;
  // const template_id = import.meta.env.TEMPLATE_ID;
  // const email_public_key = import.meta.env.PUBLIC_KEY;
  // console.log(service_id);
  const icons = {
    github: { icon: <FaGithub size={28} />, label: "GitHub" },
    linkedin: { icon: <FaLinkedin size={28} />, label: "LinkedIn" },
    twitter: { icon: <FaTwitter size={28} />, label: "Twitter" },
    leetcode: { icon: <SiLeetcode size={28} />, label: "LeetCode" },
    resume: {
      icon: <FaDownload size={28} />,
      label: "Resume",
      link: "/resume.pdf",
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent!");
        form.current.reset();
      })
      .catch((err) => alert("Failed to send message: " + err.text));
  };

  return (
    <section
      id="contact"
      className="py-10 container mx-auto border-t border-[#25213b] min-h-[80vh]"
    >
      <div className="flex justify-center my-10 lg:py-12">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="shadow-lg border bg-white/30 backdrop-blur-md  p-2 px-5 text-xl rounded-md mx-4">
            Contact
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-2">
        {/* Info Section */}
        <div className="bg-[#FFFFFF] flex mx-2 flex-col justify-center gap-y-4 shadow-lg rounded-xl p-8">
          <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
          <p className="mb-4 text-gray-700">
            You can contact me via email or send me a direct message using the
            form.
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${contact.email}`} className="text-blue-500">
              {contact.email}
            </a>
          </p>
          <p>
            <strong>Phone:</strong> {contact.phone}
          </p>
          <p>
            <strong>Location:</strong> {contact.location}
          </p>
          <div className="flex space-x-4 mt-6">
            {Object.entries(icons).map(([key, { icon, label, link }]) => (
              <a
                key={key}
                href={link}
                target={key === "resume" ? "_self" : "_blank"}
                rel="noreferrer"
                download={key === "resume"}
                className="relative group cursor-target text-gray-600 hover:text-blue-500 transition-colors duration-200"
              >
                {icon}
                {/* Tooltip */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-[#FFFFFF] shadow-lg rounded-xl p-8 mx-2"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full border px-3 py-2 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              required
              className="w-full border px-3 py-2 rounded-lg"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-2 cursor-target bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
