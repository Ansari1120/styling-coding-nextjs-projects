"use client"
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BiToggleLeft, BiToggleRight } from "react-icons/bi";

const ToggleTheme = () => {
  const [theme, setTheme]:any  = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <button
        className="w-8 h-8 bg-blue-100 rounded-lg dark:bg-slate-800 hover:ring:2 ring-blue-400"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label="toggle dark mode"
      ></button>
      {theme === "light" ? <BiToggleRight /> : <BiToggleLeft />}
    </>
  );
};

export default ToggleTheme;
