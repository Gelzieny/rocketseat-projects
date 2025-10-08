import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { useTheme } from "./context";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header className="container mx-auto px-4 py-8 md:py-12">
        <button
          onClick={toggleTheme}
          className="absolute top-4 right-6 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </header>
    </>
  )
}