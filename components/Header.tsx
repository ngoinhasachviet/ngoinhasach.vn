// Header.tsx
import { useState, useEffect, useRef } from "react";
import { Sun, Moon, User, ChevronDown, Loader2, Sparkles } from "lucide-react";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_BOOKS_API_URL as string;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string;

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [showGenres, setShowGenres] = useState(false);
  const [loading, setLoading] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const categoryGroups: Record<string, string[]> = {
    "Văn hóa Giải trí": [
      "Văn học",
      "Thiếu nhi",
      "Truyện tranh, Manga, Comic",
      "Điện ảnh - Nhạc - Họa",
      "Lịch sử",
      "Văn hóa - Địa lý - Du lịch",
      "Tôn giáo - Tâm linh",
    ],
    "Giáo dục": [
      "Giáo khoa & Giáo trình",
      "Học ngoại ngữ",
      "Tham khảo",
      "Từ điển",
      "Kiến thức tổng hợp",
      "Khoa học - Kỹ thuật",
      "Công nghệ thông tin",
      "Y học",
    ],
    "Kinh doanh & Cuộc sống": [
      "Kinh tế",
      "Chính trị - Pháp lý",
      "Nông - Lâm - Ngư nghiệp",
      "Kỹ năng sống & Nuôi dạy con",
      "Tâm lý - Giới tính",
      "Thường thức - Gia đình",
      "Tạp chí - Catalogue",
      "Thể dục - Thể thao",
    ],
  };

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    if (next) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) {
        setShowGenres(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const handleCategoryClick = async (category: string) => {
    try {
      setLoading(category);
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": API_KEY,
        },
        body: JSON.stringify({
          input: "",
          ages: [],
          categories: [category],
        }),
      });
      const data = await res.json();
      if (data && Array.isArray(data)) {
        localStorage.setItem("searchResults", JSON.stringify(data));
        window.dispatchEvent(new Event("search-results-updated"));
      } else {
        localStorage.removeItem("searchResults");
      }
    } catch {
      localStorage.removeItem("searchResults");
    } finally {
      setLoading(null);
      setShowGenres(false);
    }
  };

  return (
    <header className="w-full bg-white/90 dark:bg-gray-900/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow sticky top-0 z-50">
      <div className="max-w-[1400px] w-full mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + Menu */}
        <div className="flex items-center gap-5">
          <Link href="/" className="relative flex items-center gap-2">
            <img src="/images/logo.png" alt="logo" className="w-12 h-12" />
            <span className="hidden sm:inline-block relative font-extrabold text-3xl bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 bg-clip-text text-transparent drop-shadow-md">
              Ngôi Nhà Sách
              {/* SVG dây leo với lá */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 220 80"
                className="absolute -top-6 -left-6 w-[160%] h-[180%] pointer-events-none opacity-90"
              >
                {/* Dây leo */}
                <path
                  d="M 0 60 C 40 10, 100 90, 160 30 S 240 70, 220 20"
                  fill="none"
                  stroke="#15803d"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Lá */}
                <path
                  d="M25 45 C20 35, 35 35, 30 45 Z"
                  fill="#16a34a"
                  transform="rotate(-20 25 45)"
                />
                <path
                  d="M70 65 C65 55, 80 55, 75 65 Z"
                  fill="#22c55e"
                  transform="rotate(15 70 65)"
                />
                <path
                  d="M120 40 C115 30, 130 30, 125 40 Z"
                  fill="#4ade80"
                  transform="rotate(-10 120 40)"
                />
                <path
                  d="M180 55 C175 45, 190 45, 185 55 Z"
                  fill="#34d399"
                  transform="rotate(20 180 55)"
                />
              </svg>
            </span>
          </Link>

          <nav className="flex gap-2 sm:gap-4 items-center text-gray-800 dark:text-gray-100">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-semibold hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-lg transition"
            >
              Trang chủ
            </Link>

            {/* Thể Loại */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setShowGenres((v) => !v)}
                className="group inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                <Sparkles className="w-4 h-4 group-hover:scale-110 transition" />
                Thể loại
                <ChevronDown className={`w-4 h-4 transition ${showGenres ? "rotate-180" : ""}`} />
              </button>

              {showGenres && (
                <div className="absolute left-0 mt-3 w-[min(92vw,900px)]">
                  <div className="rounded-2xl shadow-2xl ring-1 ring-black/5 overflow-hidden bg-white dark:bg-gray-800">
                    <div className="h-1 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-500" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 p-2 sm:p-4">
                      {Object.entries(categoryGroups).map(([groupName, items]) => (
                        <div key={groupName} className="p-3 sm:p-4">
                          <div className="mb-2 sm:mb-3 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                            {groupName}
                          </div>
                          <ul className="space-y-1">
                            {items.map((label) => {
                              const isLoading = loading === label;
                              return (
                                <li key={label}>
                                  <button
                                    onClick={() => handleCategoryClick(label)}
                                    className="w-full text-left text-sm px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-between transition"
                                  >
                                    <span>{label}</span>
                                    {isLoading ? (
                                      <Loader2 className="w-4 h-4 animate-spin opacity-70" />
                                    ) : (
                                      <span className="text-xs text-gray-400 group-hover:text-emerald-600">›</span>
                                    )}
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="px-3 py-2 text-sm font-semibold hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 rounded-lg transition"
            >
              Giới thiệu
            </Link>
          </nav>
        </div>

        {/* Darkmode + user */}
        <div className="flex gap-3 items-center">
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-300 transition"
          >
            {darkMode ? (
              <>
                <Moon className="w-4 h-4" />
                <span>Tối</span>
              </>
            ) : (
              <>
                <Sun className="w-4 h-4" />
                <span>Ngày</span>
              </>
            )}
          </button>
          <User className="w-6 h-6 text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-300 transition cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
