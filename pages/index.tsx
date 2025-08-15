
import Header from "../components/Header";
import SearchSection from "../components/SearchSection";
import SearchResults from "../components/SearchResults";
import ReviewSection from "../components/ReviewSection";
import Footer from "../components/Footer";

function NewBooksSection() {
  return (
    <div className="bg-white p-4 rounded-xl shadow mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">📚 Sách hay</h2>
      <ul className="space-y-2">
        <li className="text-sm">1. Nhà Giả Kim - Paulo Coelho</li>
        <li className="text-sm">2. Muôn Kiếp Nhân Sinh - Nguyên Phong</li>
        <li className="text-sm">3. Tuổi trẻ đáng giá bao nhiêu - Rosie Nguyễn</li>
        <li className="text-sm">4. Đắc Nhân Tâm - Dale Carnegie</li>
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#fefcf5] min-h-screen max-w-[1400px] w-full mx-auto flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-3/4 flex flex-col gap-6">
          <SearchSection />
          <SearchResults />
        </div>
        <div className="w-full lg:w-1/4 flex flex-col">
          <NewBooksSection />
          <ReviewSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
