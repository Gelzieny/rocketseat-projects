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


        <div className="py-8 px-4   transition-colors duration-300">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 dark:shadow-purple-600/10">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
              </div>

              <div className="text-left">
                <p className="text-sm text-gray-500 dark:text-gray-400">Soluções</p>
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                  Projetos 
                  <span className="text-blue-500 dark:text-blue-400 ml-2">Rocketseat</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}