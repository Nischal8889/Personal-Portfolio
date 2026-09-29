import { useEffect, useState } from "react";

type Theme = "auto" | "light" | "dark";

function getSavedTheme(): Theme {
  try {
    const saved = localStorage.getItem("portfolio-theme");

    if (saved === "light" || saved === "dark") {
      return saved;
    }
  } catch {
    // Use Auto if browser storage is unavailable.
  }

  return "auto";
}

export default function ThemeControl() {
  const [theme, setTheme] = useState<Theme>(getSavedTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;

    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // Theme switching still works without saving.
    }
  }, [theme]);

  return (
    <div
      className="theme-control"
      role="group"
      aria-label="Color theme"
    >
      <button
        type="button"
        aria-pressed={theme === "auto"}
        onClick={() => setTheme("auto")}
      >
        Auto
      </button>

      <button
        type="button"
        aria-pressed={theme === "light"}
        onClick={() => setTheme("light")}
      >
        Light
      </button>

      <button
        type="button"
        aria-pressed={theme === "dark"}
        onClick={() => setTheme("dark")}
      >
        Dark
      </button>
    </div>
  );
}