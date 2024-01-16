import Navstyle from "../styles/navigation.module.css";
import React, { useState, useEffect } from "react";

const Navigation = () => {
  const [isNavFixed, setIsNavFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isFixed = scrollY > 0; // You can adjust this value based on when you want the navigation to become fixed

      setIsNavFixed(isFixed);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`${Navstyle.flex} ${isNavFixed ? Navstyle.fixedNav : ""}`}>
        <a href="#">
          <h1>PORTFOLIO</h1>
        </a>
        <ul className={Navstyle.liItem}>
          <a href="#2">
            <li className={Navstyle.mr_40}>Skills</li>
          </a>
          <a href="#Projects">
            <li className={Navstyle.mr_40}>Projects</li>
          </a>
          <a href="#About">
            <li className={Navstyle.mr_40}>About</li>
          </a>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
