import React from "react";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import OurPrograms from "./components/OurPrograms";
import BlogPost from "./components/BlogPost";
import OurImpact from "./components/OurImpact";
import GetInvolved from "./components/GetInvolved";

function App() {
  return (
    <main>
      <Navbar />
      <AboutUs />
      <OurPrograms />
      <OurImpact />
      <GetInvolved />
      <BlogPost />
    </main>
  );
}

export default App;
