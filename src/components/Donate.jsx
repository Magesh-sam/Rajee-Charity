import React from "react";

function Donate() {
  return (
    <section id="donate" className="py-14 pl-10 ">
      <h2 className="text-2xl font-bold text-blue-900 ">Donate</h2>
      <div className="flex flex-col gap-5 pt-5 pl-5 text-xl">
        <p>
          Your generous donations help us continue our work and reach more
          people in need. Every contribution makes a difference.
        </p>
        <b>
          Bank Transfer: Account Name: Rajee Subramani Public Charitable Trust,
          Account Number: 40876264719, IFSC Code: SBIN0001674
        </b>
        <p>
          Cheque: Please make cheques payable to "Rajee Subramani Public
          Charitable Trust" and send to our address <a href="#contact">here</a>
        </p>
        <p>
          {" "}
          <b>Note:</b> Donations are eligible for tax exemptions under Section
          80G of the Income Tax Act. You will receive an 80G certificate for
          your contributions.
        </p>
      </div>
    </section>
  );
}

export default Donate;
