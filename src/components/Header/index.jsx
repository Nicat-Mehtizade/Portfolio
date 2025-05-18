import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FaCodeBranch } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-[#191827]/70 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1300px] mx-auto">
        <div className="py-4 flex justify-between items-center">
          <NavLink to={"/"}>
            <p className="text-[#6839ea] text-3xl font-bold">Nm.</p>
          </NavLink>
          <nav className="flex gap-14 items-center text-white">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ""}`
              }
            >
              <IoHomeOutline />
              Home
            </NavLink>

            <NavLink
            to={"/about"}
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ""}`
              }
            >
              <LuUser />
              About
            </NavLink>
            <NavLink
            to={"/projects"}
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ""}`
              }
            >
              <AiOutlineFundProjectionScreen />
              Projects
            </NavLink>
            <NavLink
            to={"/resume"}
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ""}`
              }
            >
              <CgFileDocument />
              Resume
            </NavLink>
            <NavLink
              target="_blank"
              className={`flex items-center gap-1 text-lg bg-[#6839ea91] rounded-sm py-2 px-6 border border-[#6839ea] transition duration-300 hover:-translate-y-1 hover:bg-[#6839ea]`}
              to={"https://github.com/Nicat-Mehtizade"}
            >
              <FaCodeBranch />
              <FaStar />
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
