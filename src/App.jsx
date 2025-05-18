import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ClientLayout from "./layout/client";
import About from "./pages/About";
import ResumePage from "./pages/ResumePage";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<ResumePage/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
