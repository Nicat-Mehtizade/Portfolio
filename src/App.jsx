import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ClientLayout from "./layout/client";
import About from "./pages/About";
import ResumePage from "./pages/ResumePage";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/resume" element={<ResumePage/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
