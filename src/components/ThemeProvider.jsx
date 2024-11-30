import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  // On initial load, get the saved theme or default to "dark"
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.className = savedTheme; // Set initial theme class
  }, []);

  // Update the theme class on the root element whenever the theme changes
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme); // Save the current theme to localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <button
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors z-50 shadow-lg"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <Sun className="w-6 h-6 text-accent" />
        ) : (
          <Moon className="w-6 h-6 text-accent" />
        )}
      </button>
      {children}
    </div>
  );
};

export default ThemeProvider;
