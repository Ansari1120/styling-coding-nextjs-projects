"use client";

import React, { useState } from "react";
import { CiBrightnessUp, CiCloudMoon } from "react-icons/ci";
export let mode: boolean;

const ToggleThemeIcon = () => {
  const [theme, setTheme] = useState(false);
  mode = theme;
  console.log(mode);
  return (
    <>
      <button
        className="w-10 h-10 bg-blue-100 rounded-lg dark:bg-slate-800 hover:ring:2 ring-blue-400 pl-3 mt-1"
        onClick={() => setTheme(!theme)}
        aria-label="toggle dark mode"
      >
        {theme ? <CiBrightnessUp /> : <CiCloudMoon />}
      </button>
    </>
  );
};

export default ToggleThemeIcon;
