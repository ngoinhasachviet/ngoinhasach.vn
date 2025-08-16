// /components/SearchResults.tsx
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SearchResults() {
  const router = useRouter();
  const searchTerm = (router.query.q as string || "").toLowerCase();
  const [apiBooks, setApiBooks] = useState<any[] | null>(null);

  // Hàm reload lại data từ localStorage
  const reloadResults = () => {
    const resultStr = localStorage.getItem("searchResults");
    if (resultStr) {
      try {
        const arr = JSON.parse(resultStr);
        if (Array.isArray(arr) && arr.length > 0) setApiBooks(arr);
        else setApiBooks(null);
      } catch {
        setApiBooks(null);
      }
    } else {
      setApiBooks(null);
    }
  };

  useEffect(() => {
    reloadResults();
    // Lắng nghe event "search-results-updated"
    const handler = () => reloadResults();
    window.addEventListener("search-results-updated", handler);
    return () => window.removeEventListener("search-results-updated", handler);
  }, [router.query.q]);

  const books = apiBooks ? apiBooks : [];

  return (
    <section className="w-full px-6 py-5 mt-[-6.5px] bg-[#f9fafb] dark:bg-gray-900">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
        📚 Kết quả tìm kiếm {searchTerm && <>cho "<span className="text-emerald-600">{searchTerm}</span>"</>}
      </h2>
      {books.length === 0 && (
        <div className="text-center text-gray-500 py-10">Không tìm thấy kết quả nào phù hợp.</div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {books.map((item, index) => (
          <div key={index} className="bg-[#fefcf5] dark:bg-gray-800 rounded-xl shadow p-4 flex flex-col">
            <div className="flex gap-4 mb-4">
              <img
                src={item.thumbnailUrl || "/no-image.png"}
                alt={item.title}
                className="w-20 h-28 object-cover rounded-lg"
              />
              <div className="flex flex-col justify-center">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Tác giả: {item.author || "—"}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">⭐ {item.ratingAverage || 0} ({item.totalVote || 0})</p>
              </div>
            </div>
            <div className="text-sm space-y-1 mb-3">
              <p><span className="text-[#1A94FF] font-semibold">Tiki:</span> {item.tikiPrice ? item.tikiPrice + "₫" : "—"}</p>
              <p><span className="text-[#ee4d2d] font-semibold">Shopee:</span> {item.shopeePrice ? item.shopeePrice + "₫" : "—"}</p>
              <p><span className="text-[#C92127] font-semibold">Fahasha:</span> {item.fahashaPrice ? item.fahashaPrice + "₫" : "—"}</p>
              <p className="text-[13px] text-emerald-700 flex items-center gap-1">
                <span className="font-semibold text-amber-600">Ngôi Nhà Sách</span> mến tặng bạn {(item.momoGift || 0) + "k"} qua
                <img src="/images/momo.png" alt="MoMo" className="w-5 h-5 inline-block" />
              </p>
            </div>
            <div className="flex gap-2 mt-auto">
              <a href={item.tikiUrl || "#"} target="_blank" rel="noopener noreferrer"
                className="flex-1 bg-[#1A94FF] text-white text-sm py-1 rounded hover:opacity-90 text-center">Mua Tiki</a>
              <a
    href={item.shopeePrice ? item.shopeeurl : "#"}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex-1 bg-[#ee4d2d] text-white text-sm py-1 rounded text-center ${
      !item.shopeePrice ? "opacity-50 cursor-not-allowed pointer-events-none" : "hover:opacity-90"
    }`}
  >
    Mua Shopee
  </a>

  <a
    href={item.fahashaPrice ? item.fahashaurl : "#"}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex-1 bg-[#C92127] text-white text-sm py-1 rounded text-center ${
      !item.fahashaPrice ? "opacity-50 cursor-not-allowed pointer-events-none" : "hover:opacity-90"
    }`}
  >
    Mua Fahasha
  </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
