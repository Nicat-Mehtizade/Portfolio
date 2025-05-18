import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  const handleGithub = () => {
    window.open("https://github.com/Nicat-Mehtizade", "_blank");
  };
  const handleLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/nijat-mehtizada-08b80933b/",
      "_blank"
    );
  };
  const handleEmail = () => {
    window.location.href = "mailto:nijat.mehdizadeh2003@gmail.com";
  };
  return (
    <div className="bg-black py-5">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between">
          <p className="text-white text-lg">Developed by Nijat Mehdizadeh</p>
          <div className="flex items-center gap-6">
            <button onClick={handleGithub} className="cursor-pointer">
              <FaGithub className="text-white" />
            </button>
            <button onClick={handleLinkedIn} className="cursor-pointer">
              <FaLinkedinIn className="text-white" />
            </button>
            <button onClick={handleEmail} className="cursor-pointer">
              <SiGmail className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
