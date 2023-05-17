import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import logo from "./assets/logo.svg";
import lightLogo from "./assets/lightlogo.png";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import { BsFillLightbulbFill, BsFillLightbulbOffFill } from "react-icons/bs";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter>
      <header
        className={`w-full flex justify-between items-center ${
          darkMode ? `bg-gray-600` : `bg-gray-100`
        } sm:px-8 px-4 py-2 sticky top-0 z-30 transition-colors duration-700 drop-shadow-xl`}
      >
        <Link to="/">
          <img
            src={darkMode ? lightLogo : logo}
            alt="logo"
            className="w-32 sm:w-40 object-contain"
          />
        </Link>
        <div className="space-x-4">
          <Link
            to="/create-post"
            className="font-inter font-medium bg-[#0dd9a3] text-white px-4 py-2 rounded-md hover:rounded-xl transition-all duration-500"
          >
            Create
          </Link>
        </div>
      </header>
      <main
        className={`sm:p-8 px-4 py-8 w-full ${
          darkMode ? `bg-green-950/90` : `bg-green-100/70`
        } min-h-[calc(100vh-73px)] flex align-middle transition-colors duration-700`}
      >
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route
            path="/create-post"
            element={<CreatePost darkMode={darkMode} />}
          />
        </Routes>

        <div className="fixed bottom-5 right-5">
          <button
            className="px-6 py-6 rounded-full text-lg bg-gray-400 text-white font-bold transition-all duration-300 drop-shadow-xl"
            onClick={handleTheme}
          >
            {darkMode ? (
              <BsFillLightbulbFill size={25} />
            ) : (
              <BsFillLightbulbOffFill size={25} />
            )}
          </button>
        </div>
      </main>
    </BrowserRouter>
  );
};

export default App;
