import React from "react";

function OurPrograms() {
  return (
    <section
      id="ourprograms"
      className=" bg-blue-200 min-h-[400px] py-14 pl-10"
    >
      <h2 className="text-2xl font-bold text-blue-900">Our Programs</h2>
      <ul className="flex flex-col gap-5 pt-5 pl-5 text-xl">
        <li>
          <b>Education:</b> Providing scholarships, learning resources, and
          educational programs to underprivileged children.
        </li>
        <li>
          <b>Health:</b> Offering medical camps, health check-ups, and support
          for medical treatments.
        </li>
        <li>
          <b>Nutrition:</b> Distributing nutritious meals and food supplies to
          communities in need.
        </li>
        <li>
          <b>Infrastructure:</b> Enhancing school facilities and community
          centers for better learning and living environments.{" "}
        </li>
      </ul>
    </section>
  );
}

export default OurPrograms;
