import React from "react";

function ContactForm() {
  return (
    <section className="py-14 pl-10 ">
      <h2 className="text-2xl font-bold text-blue-900 ">
        Contact Us for any queries!
      </h2>
      <form
        className="flex flex-col gap-5 max-w-80 "
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />

        <label className="flex flex-col">
          Name
          <input type="text" className="border-2 p-2" name="name" required />
        </label>
        <label className="flex flex-col">
          Email
          <input type="email" className="border-2 p-2" name="email" required />
        </label>
        <label className="flex flex-col">
          Message
          <textarea className="border-2 p-2" name="message" required></textarea>
        </label>
        <button
          type="submit"
          className="bg-blue-900  hover:bg-blue-700 text-white  max-w-fit rounded-md px-3 py-2"
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
