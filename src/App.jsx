import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";

import List from "./pages/List";

import Details from "./pages/Details";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/list" element={<List />} />

        <Route path="/details/:id" element={<Details />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;