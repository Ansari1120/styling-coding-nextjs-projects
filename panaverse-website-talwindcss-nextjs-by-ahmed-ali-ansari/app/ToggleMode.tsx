"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { CiBrightnessUp, CiCloudMoon } from "react-icons/ci";

export const ToggleMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
 

  return (
    <>
      {/* <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select> */}
      <button
        className="w-10 h-10 bg-blue-100 rounded-lg dark:bg-slate-800 hover:ring:2 ring-blue-400 pl-3 mt-1"
        onClick={() => setTheme(theme === 'light' ? "dark" : "light")}
        aria-label="toggle dark mode"
        value={theme}
      >
        {theme == "dark" ? <CiBrightnessUp /> : <CiCloudMoon />}
      </button>
    </>
  );
};
