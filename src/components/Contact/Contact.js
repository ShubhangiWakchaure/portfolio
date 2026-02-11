import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = ({ sectionRef }) => {
  const form = useRef();
  const [toast, setToast] = useState({ show: false, type: "", message: "" });

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast({ show: false, type: "", message: "" });
    }, 3000); // disappears after 3 sec
  };
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_kxk8gya",
      "template_2nwx5is",
      form.current,
      "7igHKBY2IgAGtYNfU"
    )
      .then(() => {
      showToast("success", "Message sent successfully 🚀");
      form.current.reset();
    })
    .catch((error) => {
      console.log(error);
      showToast("error", "Failed to send message ❌");
    });
  };

  return (
    <section className="contact-section" id="contact"ref={sectionRef}>
      <div className="contact-title">
        <h2>Get in Touch With Me !!</h2>
      <div className="title-underline"></div>
      <p className="contact-subtext">
        Have a project in mind or just want to say hello? <br />
        I’d love to hear from you — let’s create something amazing together.
      </p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input type="email" name="from_email" placeholder="Your Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>

      {toast.show && (
        <div className={`toast ${toast.type}`}>
          {toast.message}
        </div>
      )}
    </section>
  );
};

export default Contact;