import { useEffect, useState } from "react";

export default function ToggleDarkMode() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (enabled) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [enabled]);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className="ml-auto px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition"
    >
      {enabled ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}