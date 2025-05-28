import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FaCodeBranch } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { MdContactSupport } from "react-icons/md";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [burger, setBurger] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
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
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-[#191827]/70 shadow-md"
          : "bg-gradient-to-r from-[#271656] via-black  to-[#271656]"
      }`}
    >
      <div className="max-w-[1300px] mx-auto">
        <div className="relative p-4 flex justify-between items-center">
          <NavLink to={"/"}>
            <p className="text-[#6839ea] text-3xl font-bold">Nm.</p>
          </NavLink>
          <nav className="hidden lg:flex gap-14 items-center text-white">
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
              to={"/contact"}
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ""}`
              }
            >
              <MdContactSupport />
              Contact
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
          <button
            onClick={() => setBurger(!burger)}
            className="text-[#6839ea] text-3xl block lg:hidden"
          >
            {burger ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>
        <AnimatePresence>
          {burger && (
            <div className="">
              <nav className="absolute top-17 backdrop-blur-md bg-[#191827]/70 shadow-md w-full flex flex-col lg:hidden gap-14 items-center text-white">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    transition: {
                      delay: 0.5,
                    },
                  }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${styles.navItem} ${isActive ? styles.active : ""}`
                    }
                  >
                    <IoHomeOutline />
                    Home
                  </NavLink>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    transition: {
                      delay: 0.4,
                    },
                  }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <NavLink
                    to={"/about"}
                    className={({ isActive }) =>
                      `${styles.navItem} ${isActive ? styles.active : ""}`
                    }
                  >
                    <LuUser />
                    About
                  </NavLink>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    transition: {
                      delay: 0.3,
                    },
                  }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <NavLink
                    to={"/projects"}
                    className={({ isActive }) =>
                      `${styles.navItem} ${isActive ? styles.active : ""}`
                    }
                  >
                    <AiOutlineFundProjectionScreen />
                    Projects
                  </NavLink>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    transition: {
                      delay: 0.2,
                    },
                  }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <NavLink
                    to={"/resume"}
                    className={({ isActive }) =>
                      `${styles.navItem} ${isActive ? styles.active : ""}`
                    }
                  >
                    <CgFileDocument />
                    Resume
                  </NavLink>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    transition: {
                      delay: 0.2,
                    },
                  }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <NavLink
                    to={"/contact"}
                    className={({ isActive }) =>
                      `${styles.navItem} ${isActive ? styles.active : ""}`
                    }
                  >
                    <MdContactSupport />
                    Contact
                  </NavLink>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    transition: {
                      delay: 0.1,
                    },
                  }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <NavLink
                    target="_blank"
                    className={`flex items-center gap-1 text-lg bg-[#6839ea91] rounded-sm py-2 px-6 border border-[#6839ea] transition duration-300 hover:-translate-y-1 hover:bg-[#6839ea]`}
                    to={"https://github.com/Nicat-Mehtizade"}
                  >
                    <FaCodeBranch />
                    <FaStar />
                  </NavLink>
                </motion.div>
              </nav>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;
