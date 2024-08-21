import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-900 h-12 flex items-center justify-center">
      <p className="text-white">
        Copyright © {new Date().getFullYear()} Rajee Subramani Public Charitable
        Trust
      </p>
    </footer>
  );
}

export default Footer;
