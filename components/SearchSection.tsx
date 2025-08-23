import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

const API_URL = process.env.NEXT_PUBLIC_BOOKS_API_URL as string;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string;


export default function SearchSection() {
  const [input, setInput] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedAges, setSelectedAges] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const ageGroups: Record<string, string[]> = {
    "Đang đi học": [
      "Trẻ sơ sinh", "Mẫu giáo", "Tiểu học", "Trung học", "Trung học phổ thông", "Đại học"
    ],
    "Người đi làm": [
      "18 – 25 tuổi", "25 – 35 tuổi", "35 – 45 tuổi", "45 – 55 tuổi", "55 – 62 tuổi"
    ],
    "Nghỉ hưu": [
      "62 – 67 tuổi", "67 – 72 tuổi", "72 – 77 tuổi", "77 tuổi trở lên"
    ]
  };

  const categoryGroups: Record<string, string[]> = {
    "Văn hóa Giải trí": [
      "Văn học", "Thiếu nhi", "Truyện tranh, Manga, Comic", "Điện ảnh - Nhạc - Họa", "Lịch sử", "Văn hóa - Địa lý - Du lịch", "Tôn giáo - Tâm linh"
    ],
    "Giáo dục": [
      "Giáo khoa & Giáo trình", "Học ngoại ngữ", "Tham khảo", "Từ điển", "Kiến thức tổng hợp", "Khoa học - Kỹ thuật", "Công nghệ thông tin", "Y học"
    ],
    "Kinh doanh & Cuộc sống": [
      "Kinh tế", "Chính trị - Pháp lý", "Nông - Lâm - Ngư nghiệp", "Kỹ năng sống & Nuôi dạy con", "Tâm lý - Giới tính", "Thường thức - Gia đình", "Tạp chí - Catalogue", "Thể dục - Thể thao"
    ]
  };

  const handleCheckboxChange = (label: string) => {
    if (Object.values(ageGroups).flat().includes(label)) {
      setSelectedAges(prev =>
        prev.includes(label) ? prev.filter(x => x !== label) : [...prev, label]
      );
    } else if (Object.values(categoryGroups).flat().includes(label)) {
      setSelectedCategories(prev =>
        prev.includes(label) ? prev.filter(x => x !== label) : [...prev, label]
      );
    }
    setSelectedFilters(prev =>
      prev.includes(label) ? prev.filter(x => x !== label) : [...prev, label]
    );
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": API_KEY,
        },
        body: JSON.stringify({
          input: input,
          ages: selectedAges,
          categories: selectedCategories,
         
        }),
      });
      const data = await res.json();

      if (data && Array.isArray(data)) {
        localStorage.setItem("searchResults", JSON.stringify(data));
        window.dispatchEvent(new Event("search-results-updated"));
      } else {
        localStorage.removeItem("searchResults");
      }
    } catch (err) {
      localStorage.removeItem("searchResults");
    } finally {
      setLoading(false);
    }
  };

  // tự động gọi API lần đầu
  useEffect(() => {
    const firstSearch = async () => {
      setLoading(true);
      try {
        const res = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_KEY,
          },
          body: JSON.stringify({
            input: "FIRST_SEARCH",
            ages: [],
            categories: [],
            
          }),
        });
        const data = await res.json();
        if (data && Array.isArray(data)) {
          localStorage.setItem("searchResults", JSON.stringify(data));
          window.dispatchEvent(new Event("search-results-updated"));
        } else {
          localStorage.removeItem("searchResults");
        }
      } catch (err) {
        localStorage.removeItem("searchResults");
      } finally {
        setLoading(false);
      }
    };

    firstSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      const clickedInsideDesktop = navRef.current?.contains(target);
      const clickedInsideMobile = mobileNavRef.current?.contains(target);
      if (!clickedInsideDesktop && !clickedInsideMobile) {
        setOpenGroup(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const mobileFilterButtonClass = "px-2 py-1 rounded-full border border-white/50 backdrop-blur-lg transition bg-[#366948] text-white text-xs";
  const mobileFilterLabelClass = "flex items-center gap-2 px-2 py-1 bg-[#366948] text-white cursor-pointer whitespace-nowrap text-sm";
  const mobileSelectedFilterClass = "flex items-center bg-indigo-200 text-indigo-800 text-xs px-2 py-0.5 rounded-full";

  
  return (
    <>
      <section className="relative mx-auto w-[calc(100%-0.5cm)] md:w-full h-[43vh] md:h-[45vh] bg-[url('/images/banner-mobile.png')] md:bg-[url('/images/banner.png')] bg-cover bg-center rounded-2xl overflow-visible">
        <div className="relative z-10 max-w-3xl mx-auto h-full flex flex-col justify-end md:justify-center items-center px-4">
          
          {/* Overlay loading */}
          {loading && (
            <div className="absolute inset-0 z-50 flex items-center justify-center">
              <div
                className="relative flex items-center justify-center rounded-full bg-white/80 shadow-xl md:w-[160px] md:h-[160px] w-[160px] h-[160px] overflow-hidden"
                style={{ boxShadow: "0 0 40px 0 #0002" }}
              >
                <span className="absolute inset-0 rounded-full border-4 border-t-[#86efac] border-r-transparent border-b-transparent border-l-transparent animate-spin"></span>
                <img
                  src="/images/loading.gif"
                  alt="Loading..."
                  className="w-full h-full object-cover relative z-10"
                  style={{ borderRadius: "50%" }}
                />
              </div>
            </div>
          )}

          <div className="w-full max-w-2xl space-y-6 mx-auto md:ml-[-0.5cm] mb-[2.7cm] md:mb-0 -translate-y-[-2.5cm] md:translate-y-0 md:mt-[2cm]">
            <p className="text-center text-xl md:text-2xl font-semibold text-white mb-2 drop-shadow-lg animate-pulse">
              Bạn chỉ cần gõ, việc khó để <span className="text-yellow-300">AI</span> lo!
            </p>

            {/* FORM: input + (DESKTOP inline toggle) + button */}
            <form onSubmit={handleSearch} className="w-full flex rounded-full overflow-hidden shadow-lg bg-white">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ví dụ: Sách làm tôi vui · Sách cho bé lười · Sách giống ‘Đắc Nhân Tâm’…"
                className="flex-1 px-6 py-3 text-gray-700 placeholder-gray-400 focus:outline-none transition-[padding,background] duration-300 ease-out"
              />
                          
               <button
                type="submit"
                className="group relative px-5 md:px-9 py-2 md:py-3 rounded-full 
                          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                          hover:brightness-110 text-white font-semibold 
                          flex items-center gap-2 md:gap-3 transition disabled:opacity-60 
                          shadow-lg shadow-purple-500/40"
                disabled={loading}
              >
                {/* icon bóng đèn nổi bật */}
                <span className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full bg-white/20">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2a7 7 0 0 0-4 12.9V17a1 1 0 0 0 1 1h1v1.5a1.5 1.5 0 0 0 3 0V18h1a1 1 0 0 0 1-1v-2.1A7 7 0 0 0 12 2zM9 20h6a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2z" />
                  </svg>
                </span>

                <span className="tracking-wide text-sm md:text-base">Tìm với AI</span>

                {/* hiệu ứng glow giống mockup */}
                <span className="absolute inset-0 rounded-full ring-2 ring-purple-400/40 group-hover:ring-purple-400/70 transition" />
              </button>
            </form>
         
            {selectedFilters.length > 0 && (
              <div className="w-full flex flex-wrap gap-2">
                {selectedFilters.map(label => (
                  <span
                    key={label}
                    className={
                      "md:flex md:items-center md:bg-indigo-200 md:text-indigo-800 md:text-sm md:px-3 md:py-1 md:rounded-full block md:block " +
                      mobileSelectedFilterClass +
                      " md:!text-sm md:!px-3 md:!py-1"
                    }
                  >
                    {label}
                    <button onClick={() => handleCheckboxChange(label)} className="ml-2 focus:outline-none" aria-label={`Bỏ lọc ${label}`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </span>
                ))}
              </div>
            )}

            <div ref={navRef} className="hidden md:flex w-full flex-wrap justify-start gap-6">
              <nav className="flex overflow-visible space-x-4 md:space-x-6 text-white text-sm">
                {Object.keys(ageGroups).map(group => (
                  <div key={group} className="relative">
                    <button
                      onClick={() => setOpenGroup(openGroup === group ? null : group)}
                      className={`px-3 py-1 rounded-full border border-white/50 backdrop-blur-lg transition ${
                        openGroup === group ? "bg-white/20 text-white" : "text-white hover:bg-white/10"
                      }`}
                    >
                      {group}
                    </button>
                    {openGroup === group && (
                      <div className="absolute left-0 mt-2 w-auto bg-white rounded-md shadow-lg text-gray-800 z-50">
                        {ageGroups[group].map(label => (
                          <label
                            key={label}
                            className="flex items-center gap-2 px-3 py-1 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                          >
                            <input
                              type="checkbox"
                              checked={selectedFilters.includes(label)}
                              onChange={() => handleCheckboxChange(label)}
                            />
                            <span>{label}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <nav className="flex overflow-visible space-x-4 md:space-x-6 text-white text-sm">
                {Object.keys(categoryGroups).map(group => (
                  <div key={group} className="relative">
                    <button
                      onClick={() => setOpenGroup(openGroup === group ? null : group)}
                      className={`px-3 py-1 rounded-full border border-white/50 backdrop-blur-lg transition ${
                        openGroup === group ? "bg-white/20 text-white" : "text-white hover:bg-white/10"
                      }`}
                    >
                      {group}
                    </button>
                    {openGroup === group && (
                      <div className="absolute left-0 mt-2 w-auto bg-white rounded-md shadow-lg text-gray-800 z-50">
                        {categoryGroups[group].map(label => (
                          <label
                            key={label}
                            className="flex items-center gap-2 px-3 py-1 hover:bg-gray-100 cursor-pointer whitespace-nowrap"
                          >
                            <input
                              type="checkbox"
                              checked={selectedFilters.includes(label)}
                              onChange={() => handleCheckboxChange(label)}
                            />
                            <span>{label}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE filter group rows */}
      <div ref={mobileNavRef} className="flex flex-wrap justify-center gap-6 px-4 mt-4 md:hidden -translate-y-[0.5cm] md:translate-y-0">
        {[ageGroups, categoryGroups].map((groups, idx) => (
          <nav key={idx} className="flex overflow-visible space-x-3 text-xs">
            {Object.keys(groups).map(group => (
              <div key={group} className="relative">
                <button onClick={() => setOpenGroup(openGroup === group ? null : group)} className={mobileFilterButtonClass}>
                  {group}
                </button>
                {openGroup === group && (
                  <div className="absolute left-0 mt-2 w-auto bg-white rounded-md shadow-lg text-gray-800 z-50">
                    {groups[group].map(label => (
                      <label key={label} className={mobileFilterLabelClass}>
                        <input
                          type="checkbox"
                          checked={selectedFilters.includes(label)}
                          onChange={() => handleCheckboxChange(label)}
                        />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        ))}
      </div>
    </>
  );
}
