import React from "react";

function Gallery() {
  return (
    <section className="py-14 pl-10 ">
      <h2 className="text-2xl font-bold text-blue-900 pb-5 ">Our Gallery</h2>

      <div className="gallery flex flex-wrap gap-5 ">
        <img
          src="/src/assets/feature-1.jpg"
          alt="featured image 1"
          width={300}
          height={200}
          onClick={() => window.open("/src/assets/feature-1.jpg")}
          className="cursor-pointer object-contain object-top"
        />
        <img
          src="/src/assets/feature-2.jpeg"
          alt="featured image 2"
          width={300}
          height={200}
          onClick={() => window.open("/src/assets/feature-2.jpeg")}
          className="cursor-pointer object-contain object-top"
        />
        <img
          src="/src/assets/feature-3.png"
          alt="featured image 3"
          width={300}
          height={200}
          onClick={() => window.open("/src/assets/feature-3.png")}
          className="cursor-pointer object-contain object-top"
        />
      </div>
    </section>
  );
}

export default Gallery;
