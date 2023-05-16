import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import logo from "./assets/logo.svg";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-2 border-b border-b-[#e6ebf4] sticky top-0 z-30">
        <Link to="/">
          <img src={logo} alt="logo" className="w-32 sm:w-40 object-contain" />
        </Link>
        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md hover:rounded-xl transition-all"
        >
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)] flex align-middle">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
