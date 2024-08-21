import React from "react";

function Contact() {
  return (
    <section id="contactus" className="py-14 pl-10 ">
      <h2 className="text-2xl font-bold text-blue-900 ">Contact Us</h2>
      <div className="flex flex-col gap-5 pt-5 pl-5 text-xl">
        <p>Feel free to reach out for more information or to get involved.</p>
        <p>
          <b>Email:</b> rajeecharity@gmail.com
        </p>
        <p>
          <b>Address:</b> 7/6 Mettu Thottam, M.Komarapalayam Post,
          Sathyamangalam, Erode Dt – 638401, TN, India
        </p>
      </div>
      <h3 className="font-bold text-2xl  pt-14">
        Follow Us: Facebook | Twitter | Instagram
      </h3>
    </section>
  );
}

export default Contact;
