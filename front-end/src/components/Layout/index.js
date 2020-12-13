import React, { useState } from "react";

// components
import Nav from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

function Layout(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Nav toggle={toggleHandle} />
      <Sidebar isOpen={isOpen} toggle={toggleHandle} />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
