import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ClientLayout from "./layout/client";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
