"use client";

import localFont from "next/font/local";
import axios from "axios";
import { useState, useEffect } from "react";

const remBold = localFont({ src: "../public/fonts/REM-Bold.ttf" });

export default function Home() {
  const [placeholder, setPlaceholder] = useState("eggs, banana, chicken...");

  const handleFocus = () => {
    setPlaceholder("");
  };

  const handleBlur = () => {
    if (placeholder === "") {
      setPlaceholder("eggs, banana, chicken...");
    }
  };

  return (
    <main className="flex flex-col min-h-screen items-center p-24 bg-white dark:bg-primary text-secondary dark:text-slate-200">
      <h1 className={` ${remBold.className} text-4xl mb-10`}>
        What's in your fridge today?
      </h1>
      <input
        title="test"
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-[300px] py-3 px-2 rounded-md bg-slate-200 dark:bg-tertiary shadow-custom-btn-light dark:shadow-custom-btn-dark focus:outline-none"
      />
    </main>
  );
}
