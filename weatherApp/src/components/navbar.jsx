import { useState, useEffect } from "react";

export default function Navbar() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
      if (theme === "light") {
        document.querySelector("html").classList.remove("dark");
      } else {
        document.querySelector("html").classList.add("dark");
      }
    }, [theme]);

    useEffect(() => {
      switch (theme) {
        case "light":
          localStorage.setItem("theme", "light");
          break;
        case "dark":
          localStorage.setItem("theme", "dark");
          break;
        default:
          localStorage.setItem("theme");
          break;
      }
    }, [theme]);

    return (
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="   https://cdn-icons-png.flaticon.com/512/1163/1163763.png " className="h-12" alt="Weather Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Weather</span>
          </a>
          <div className="flex md:order-2">
            <div className="relative block ">
              <label className="inline-flex items-center cursor-pointer gap-1">
              <button type="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Theme</button>
                </label>
            </div>
          </div>
        </div>
      </nav>

  );
}