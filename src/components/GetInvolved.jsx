import React from "react";

function GetInvolved() {
  return (
    <section
      id="getinvolved"
      className=" bg-blue-200  py-14 pl-10 flex flex-col gap-5"
    >
      <h2 className="text-2xl font-bold text-blue-900">Get Involved</h2>
      <p className="text-xl">
        Join us in our mission to make a positive impact. Your support can
        change lives.
      </p>
      <ul className="flex flex-col gap-5 pt-5 pl-5 text-xl">
        <li>
          <b>Donate:</b> Contribute to our cause and help us reach more people.
        </li>
        <li>
          <b>Volunteer:</b> Offer your time and skills to support our
          initiatives.
        </li>
        <li>
          <b>Partner:</b> Collaborate with us to expand our reach and
          effectiveness.
        </li>
        <a
          href="#contactus"
          className=" px-3 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-700 transition-all ease-in max-w-fit"
        >
          <li>Contact us</li>
        </a>{" "}
      </ul>
    </section>
  );
}

export default GetInvolved;
