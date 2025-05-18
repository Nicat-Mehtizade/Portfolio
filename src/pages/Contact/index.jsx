import StarsBackground from "../../components/StarsBackground";
import { FiUser } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm("service_pgjotxi", "template_8zmmigj", form.current, {
        publicKey: "kUSUW87y0B9D3TMtO",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Your message has been sent successfully!");
          setIsSending(false);
          form.current.reset()
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error(error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <div className="relative ">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#2a1f45",
            color: "#fff",
            border: "1px solid #a855f7",
            boxShadow: "0 0 10px rgba(168, 85, 247, 0.5)",
          },
          success: {
            iconTheme: {
              primary: "#a855f7",
              secondary: "#f9f7fd",
            },
          },
          error: {
            iconTheme: {
              primary: "#f43f5e",
              secondary: "#fef2f2",
            },
          },
        }}
      />
      <StarsBackground />
      <div className="relative z-10">
        <div className="bg-gradient-to-br from-[#141023] to-[#201732]">
          <div className="max-w-[1250px] mx-auto">
            <div className="py-20">
              <h1 className="text-5xl font-bold bg-clip-text text-transparent text-center bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
                Get In Touch
              </h1>
              <p className="text-gray-300 max-w-2xl text-center mx-auto mb-6">
                Have a question or want to work together? Fill out the form
                below and I'll get back to you as soon as possible.
              </p>
              <div className="flex justify-center items-center">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="bg-[#19142D] rounded-lg border border-purple-500/50 py-6 px-5 w-[600px]"
                >
                  <label
                    className="block text-gray-300 mb-1 font-medium"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <div className="relative mb-3">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
                      <FiUser />
                    </span>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      className="w-full bg-[#2a1f45]/50 border border-purple-500/30 rounded-lg py-3 px-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                    />
                  </div>
                  <label
                    className="block text-gray-300 mb-1 font-medium"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <div className="relative mb-3">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400">
                      <FaRegEnvelope />
                    </span>

                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your email adress"
                      className="w-full bg-[#2a1f45]/50 border border-purple-500/30 rounded-lg py-3 px-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                    />
                  </div>
                  <label
                    className="block text-gray-300 mb-1 font-medium"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <div className="relative mb-4">
                    <span className="absolute left-4 top-4 text-purple-400">
                      <MdOutlineChatBubbleOutline />
                    </span>

                    <textarea
                      name="message"
                      id="message"
                      placeholder="Your message"
                      className="w-full bg-[#2a1f45]/50 border border-purple-500/30 rounded-lg py-3 px-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                    ></textarea>
                  </div>
                  <div className="flex justify-center">
                    <button
                      className="group relative cursor-pointer inline-flex items-center justify-center px-8 py-3 font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg overflow-hidden shadow-lg transition-all hover:scale-105 disabled:opacity-70"
                      type="submit"
                    >
                      {isSending ? "Sending..." : "Send Message"}{" "}
                      <IoPaperPlaneOutline />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
