import { LuDownload } from "react-icons/lu";
import StarsBackground from "../../components/StarsBackground";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const ResumePage = () => {
  return (
    <div className="relative ">
      <StarsBackground />
      <div className="relative z-10">
        <div className="bg-gradient-to-br from-[#141023] to-[#201732] py-20">
          <div className="max-w-[1000px] mx-auto flex flex-col items-center justify-center">
            <a
              href="/docs/Nijat-Mehtizadeh-CV.docx"
              download
              className="flex justify-center items-center mb-8 gap-2 transition duration-300 w-[250px] text-white text-lg font-semibold  rounded-lg bg-[#6839ea] py-1 px-10 hover:bg-[#3d0ec0] "
            >
              <LuDownload />
              Download CV
            </a>
            <div className="w-full">
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <Viewer fileUrl="/docs/Nijat-Mehtizadeh-CV.pdf" />;
              </Worker>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
