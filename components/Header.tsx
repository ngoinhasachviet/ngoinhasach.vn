import { useState, useEffect } from "react";
import { Sun, Moon, User } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [showGenres, setShowGenres] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="w-full bg-white dark:bg-gray-800 shadow sticky top-0 z-50">
      <div className="max-w-[1400px] w-full mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Menu */}
        <div className="flex items-center gap-4">
          <img src="/images/logo.png" alt="logo" className="w-16 h-16" />
          <nav className="flex gap-6 items-center text-lg text-gray-800 dark:text-white">
            <Link href="/" className="px-3 py-1 text-base font-semibold hover:text-[#2c7a7b] hover:bg-[#e6f4ea] rounded transition">Trang chủ</Link>
            <div className="relative">
              <button onClick={() => setShowGenres(!showGenres)}>Thể loại</button>
              {showGenres && (
                <div className="absolute left-0 mt-2 bg-white dark:bg-gray-700 shadow rounded px-4 py-2 space-y-2 z-50">
                  <Link href="#" className="px-3 py-1 text-base font-semibold hover:text-[#2c7a7b] hover:bg-[#e6f4ea] rounded transition">Văn học</Link>
                  <Link href="#" className="px-3 py-1 text-base font-semibold hover:text-[#2c7a7b] hover:bg-[#e6f4ea] rounded transition">Hạt giống tâm hồn</Link>
                </div>
              )}
            </div>
            <Link href="/about" className="px-3 py-1 text-base font-semibold hover:text-[#2c7a7b] hover:bg-[#e6f4ea] rounded transition">Giới thiệu</Link>
          </nav>
        </div>

        {/* Nút chế độ tối + login */}
        <div className="flex gap-4 items-center">
          <button onClick={toggleDarkMode} className="flex items-center gap-2 text-sm text-gray-700 hover:text-green-600 transition">{darkMode ? <><Moon className='w-4 h-4' /><span>Tối</span></> : <><Sun className='w-4 h-4' /><span>Ngày</span></>}</button>
          <User className="w-6 h-6 text-gray-700 hover:text-green-600 transition cursor-pointer" />
        </div>
      </div>
    </header>
  );
}