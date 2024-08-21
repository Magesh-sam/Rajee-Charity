import React from "react";

function AboutUs() {
  return (
    <section id="aboutus" className=" bg-[#f1f1f1] text-[#121212] py-14 pl-10 ">
      <h1 className="text-5xl text-center font-bold text-blue-900">
        Rajee Subramani Public Charitable Trust
      </h1>
      <h2 className="text-3xl text-center text-violet-600 font-semibold pt-3">
        Creating Opportunities, Transforming Lives
      </h2>
      <h2 className="text-3xl text-center text-blue-900 font-semibold pt-3 italic font-sans ">
        #transformalife
      </h2>
      <h3 className="font-bold text-2xl  pt-14">
        Welcome to the Rajee Subramani Public Charitable Trust website!
      </h3>
      <p className="text-lg  mt-5 max-w-[85vw] font-normal flex flex-col gap-5">
        <span>
          Our mission is to empower underprivileged communities by providing
          essential support in education, health, and community nourishment.
          Through our dedicated efforts, we aim to create sustainable
          development and brighter futures for all. Explore our initiatives,
          discover our impact, and join us in making a difference.
        </span>
        <span>
          Together, we are
          <span className="font-bold text-violet-500">
            {" "}
            creating opportunities and transforming lives
          </span>
          .
        </span>
        <span>Thank you for being a part of our journey.</span>
      </p>
    </section>
  );
}

export default AboutUs;
