import React from "react";

function OurImpact() {
  return (
    <section id="ourimpact" className="py-14 pl-10 flex flex-col gap-5">
      <h2 className="text-2xl font-bold text-blue-900 ">Our Impact</h2>{" "}
      <p className="text-lg">
        We have made significant strides in empowering communities through our
        dedicated efforts in education, health, nutrition, and infrastructure
        development. Here are some highlights of our impact:
      </p>
      <ul className="flex flex-col gap-5 text-lg pl-5">
        <li>
          <b>Education:</b> Providing scholarships, educational materials, and
          learning programs to underprivileged children, helping them achieve
          their academic goals and build a brighter future.
        </li>
        <li>
          <b>Health:</b> Offering medical camps, regular health check-ups, and
          financial support for critical medical treatments, improving the
          overall health and well-being of the communities we serve.
        </li>
        <li>
          <b>Nutrition:</b> Distributing nutritious meals and food supplies to
          communities in need, ensuring that everyone has access to healthy and
          balanced diets.
        </li>
        <li>
          <b>Infrastructure:</b> Enhancing school facilities and community
          centers for better learning and living environments, creating spaces
          that foster growth and development.
        </li>
      </ul>
      <p className="text-lg">
        Through these initiatives, we have reached thousands of individuals,
        making a tangible difference in their lives and contributing to the
        sustainable development of our communities.
      </p>
    </section>
  );
}

export default OurImpact;
