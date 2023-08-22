import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const postFormData = async (name, email, message, toastId) => {
  const result = await axios
    .post(
      `${import.meta.env.VITE_BASE_URL}`,
      { fields: { name: name, email: email, message: message } },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      if (response.status === 200) {
        toast.update(toastId, {
          render: "Thanks for reaching out!",
          type: toast.TYPE.SUCCESS,
          autoClose: 5000,
        });
      } else {
        throw new error("something went wrong!");
      }
    })
    .catch((error) => {
      if (!error.response) {
        toast.update(toastId, {
          render: "internet connection required!",
          type: toast.TYPE.WARNING,
          autoClose: 5000,
        });
      } else {
        toast.update(toastId, {
          render: error,
          type: toast.TYPE.ERROR,
          autoClose: 5000,
        });
      }
    });
};
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const messageInputRef = useRef(null);
  const toastRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    toastRef.current = toast.info("processing your info...");
    //clearing the form
    nameInputRef.current.value = "";
    emailInputRef.current.value = "";
    messageInputRef.current.value = "";
    // posting data to airtable
    postFormData(name, email, message, toastRef.current);
  };

  return (
    <div className="contact_form flex flex-col sm:flex-row justify-between gap-8 font-bold text-center sm:text-left pb-8 lg:pb-16 border-b border-text-primary">
      <div className="flex flex-col gap-4 lg:gap-8">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl">Contacts</h1>
        <p className="text-xs sm:text-sm max-w-sm text-text-primary">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I'll get back to you as soon as possible.
        </p>
      </div>
      <form
        action="submit"
        className="flex flex-col gap-5 text-sm font-bold"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            ref={nameInputRef}
            type="text"
            placeholder="name"
            required
            onChange={() => setName(nameInputRef.current.value)}
          />
        </div>
        <div>
          <input
            ref={emailInputRef}
            type="email"
            placeholder="email"
            required
            onChange={() => setEmail(emailInputRef.current.value)}
          />
        </div>
        <div>
          <textarea
            ref={messageInputRef}
            rows={4}
            cols={30}
            type="text"
            placeholder="message"
            className="resize-none"
            required
            onChange={() => setMessage(messageInputRef.current.value)}
          />
        </div>
        <div className="self-end">
          <button
            type="submit"
            className="btn relative uppercase tracking-widest pb-1"
          >
            send message
          </button>
        </div>
      </form>
      <ToastContainer theme="dark" autoClose={false} />
    </div>
  );
};

export default Contact;
