import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contacts() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sectionStyle = {
    padding: "80px 50px",
    backgroundColor: "#231F20",
    color: "#FEF7F2",
  };
  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    color: "#231F20",
  };
  const btnStyle = {
    padding: "10px 20px",
    borderRadius: "5px",
    backgroundColor: "#FEF7F2",
    color: "#231F20",
    fontWeight: "bold",
    marginTop: "10px",
    cursor: loading ? "not-allowed" : "pointer",
    opacity: loading ? 0.7 : 1,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_9unfdq8", // Service ID
        "template_gbzutlg", // Template ID
        form.current,
        "m7QBdllkf9MXnf8Ck" // Public Key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          toast.error("Oops! Something went wrong. Try again.");
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section style={sectionStyle} id="contact">
      <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>Contact</h2>
      <form
        ref={form}
        onSubmit={handleSubmit}
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          style={inputStyle}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          style={inputStyle}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          style={inputStyle}
          required
        ></textarea>
        <button type="submit" style={btnStyle} disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
    </section>
  );
}
