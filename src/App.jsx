import React from "react";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import OurPrograms from "./components/OurPrograms";
import BlogPost from "./components/BlogPost";
import OurImpact from "./components/OurImpact";
import GetInvolved from "./components/GetInvolved";
import Donate from "./components/Donate";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <main>
      <Navbar />
      <AboutUs />
      <OurPrograms />
      <OurImpact />
      <GetInvolved />
      <Donate />
      <Gallery />
      <BlogPost />
      <Contact />
      <ContactForm />
    </main>
  );
}

export default App;
