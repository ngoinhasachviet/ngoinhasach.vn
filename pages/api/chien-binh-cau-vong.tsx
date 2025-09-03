import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";

export default function ReviewChienBinhCauVong() {
  const [activeTab, setActiveTab] = useState("review");
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <>
      <Head>
        <title>Review Chiến Binh Cầu Vồng - Andrea Hirata | Ngôi Nhà Sách</title>
        <meta
          name="description"
          content="Chiến Binh Cầu Vồng - tác phẩm kinh điển đầy cảm hứng về giáo dục, nghị lực và cách sống con người. Review chi tiết, nội dung chính và thông điệp nhân văn sâu sắc."
        />
        <meta
          name="keywords"
          content="sách hay, sách cho trẻ, sách về cách sống con người, review Chiến Binh Cầu Vồng, sách truyền cảm hứng, sách cảm động"
        />
        <meta
          property="og:title"
          content="Review sách Chiến Binh Cầu Vồng – Andrea Hirata | Ngôi Nhà Sách"
        />
        <meta
          property="og:description"
          content="Chiến Binh Cầu Vồng – cuốn sách đầy nhân văn về giáo dục, niềm tin và ước mơ. Một trong những cuốn sách hay nên đọc ít nhất một lần trong đời."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/images/chien-binh-cau-vong-cover.jpg" />
      </Head>

      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Breadcrumb */}
        <div className="bg-white py-3 border-b">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="text-sm text-slate-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Trang chủ
              </Link>
              <span className="mx-2">›</span>
              <Link
                href="/review"
                className="hover:text-blue-600 transition-colors"
              >
                Review sách
              </Link>
              <span className="mx-2">›</span>
              <span className="text-slate-900 font-medium">
                Chiến Binh Cầu Vồng
              </span>
            </nav>
          </div>
        </div>

        {/* Book Cover and Basic Info */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar with cover + info */}
            <div className="md:w-1/4">
              <div className="sticky top-24">
                <div className="rounded-xl shadow-lg overflow-hidden">
                  <img
                    src="/images/chien-binh-cau-vong-cover.jpg"
                    alt="Bìa sách Chiến Binh Cầu Vồng - Andrea Hirata"
                    className="w-full object-cover"
                  />
                </div>

                <div className="mt-6 bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 font-semibold text-slate-900">
                        4.9
                      </span>
                      <span className="ml-1 text-slate-500">(1890)</span>
                    </div>
                    <button
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className={`p-2 rounded-full ${
                        isBookmarked
                          ? "bg-amber-50 text-amber-500"
                          : "bg-slate-100 text-slate-400 hover:bg-slate-200"
                      }`}
                      aria-label={
                        isBookmarked ? "Bỏ lưu đánh giá" : "Lưu đánh giá này"
                      }
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </button>

                    
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-slate-600">Tác giả:</span>
                      <span className="font-medium">Andrea Hirata</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-slate-600">Thể loại:</span>
                      <span className="font-medium">Tiểu thuyết, Nhân văn</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-slate-600">Số trang:</span>
                      <span className="font-medium">400 trang</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-slate-600">Thời gian đọc:</span>
                      <span className="font-medium">~6-7 giờ</span>
                    </div>

{/* Bảng giá & ưu đãi hiển thị giống SearchResults */}
                    <div className="text-sm space-y-1 mb-4">
                      <p><span className="text-[#1A94FF] font-semibold">Tiki:</span> 61.920₫</p>
                      <p><span className="text-[#ee4d2d] font-semibold">Shopee:</span> —</p>
                      <p><span className="text-[#C92127] font-semibold">Fahasha:</span> —</p>
                      <p className="text-[13px] text-emerald-700 flex items-center gap-1">
                        <span className="font-semibold text-amber-600">Ngôi Nhà Sách</span> mến tặng bạn 2k qua
                        <img src="/images/momo.png" alt="MoMo" className="w-5 h-5 inline-block" />
                      </p>
                    </div>

                    {/* 3 nút mua: CSS giống SearchResults.tsx */}
                    <div className="flex gap-2">
                      <a
                        href="https://tiki.vn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#1A94FF] text-white text-sm py-1 rounded hover:opacity-90 text-center"
                      >
                        Mua Tiki&nbsp;  
                      </a>

                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#ee4d2d] text-white text-sm py-1 rounded text-center opacity-50 cursor-not-allowed pointer-events-none"
                      >
                        Mua Shopee
                      </a>

                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#C92127] text-white text-sm py-1 rounded text-center opacity-50 cursor-not-allowed pointer-events-none"
                      >
                        Mua Fahasha
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:w-3/4">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="border-b border-slate-200">
                  <nav className="flex">
                    <button
                      className={`px-6 py-4 font-medium text-sm ${
                        activeTab === "review"
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-slate-500 hover:text-slate-700"
                      }`}
                      onClick={() => setActiveTab("review")}
                    >
                      Review chi tiết
                    </button>
                    <button
                      className={`px-6 py-4 font-medium text-sm ${
                        activeTab === "content"
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-slate-500 hover:text-slate-700"
                      }`}
                      onClick={() => setActiveTab("content")}
                    >
                      Nội dung chính
                    </button>
                    <button
                      className={`px-6 py-4 font-medium text-sm ${
                        activeTab === "author"
                          ? "text-blue-600 border-b-2 border-blue-600"
                          : "text-slate-500 hover:text-slate-700"
                      }`}
                      onClick={() => setActiveTab("author")}
                    >
                      Tác giả
                    </button>
                  </nav>
                </div>

                <div className="p-6 md:p-8">
                  {/* Review chi tiết */}
                  {activeTab === "review" && (
                    <>
                      <h1 className="text-3xl font-bold text-slate-900 mb-4">
                        Chiến Binh Cầu Vồng: Bản hùng ca về tri thức và niềm tin
                      </h1>

                      <div className="prose max-w-none">
                        <p className="text-lg text-slate-700 italic border-l-4 border-blue-500 pl-4 py-2 mb-6">
                          “Chiến Binh Cầu Vồng” là cuốn tiểu thuyết lay động lòng
                          người, kể về hành trình của những đứa trẻ nghèo nhưng
                          đầy nghị lực, chứng minh rằng tri thức có thể thắp
                          sáng cả những nơi tối tăm nhất.
                        </p>

                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">
                          Tổng quan
                        </h2>
                        <p className="text-slate-700 mb-4">
                          Với bối cảnh đảo Belitong (Indonesia), tác phẩm khắc
                          họa hành trình mười đứa trẻ kiên trì học tập trong
                          ngôi trường ọp ẹp. Dù thiếu thốn, các em vẫn nuôi
                          dưỡng niềm tin vào giáo dục và tương lai. Đây là một
                          trong những *sách hay* nhất về *cách sống con người*,
                          phù hợp để trở thành *sách cho trẻ* và cả người lớn.
                        </p>

                        <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">
                          Điểm nổi bật
                        </h3>
                        <ul className="list-disc pl-5 text-slate-700 mb-6">
                          <li>
                            <span className="font-medium">
                              Câu chuyện chân thực:
                            </span>{" "}
                            Dựa trên trải nghiệm của chính tác giả, tạo chiều sâu
                            nhân văn mạnh mẽ.
                          </li>
                          <li>
                            <span className="font-medium">
                              Nhân vật đầy sức sống:
                            </span>{" "}
                            Mỗi chiến binh cầu vồng đều để lại dấu ấn khó quên.
                          </li>
                          <li>
                            <span className="font-medium">
                              Thông điệp truyền cảm hứng:
                            </span>{" "}
                            Giáo dục và ước mơ có thể thay đổi cuộc đời.
                          </li>
                        </ul>
                      </div>
                    </>
                  )}

                  {/* Nội dung chính */}
                  {activeTab === "content" && (
                    <>
                      <h2 className="text-2xl font-bold text-slate-900 mb-6">
                        Nội dung chính của sách
                      </h2>

                      <div className="space-y-6">
                        <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                          <h3 className="text-xl font-semibold text-slate-800 mb-3">
                            Giáo dục trong nghèo khó
                          </h3>
                          <p className="text-slate-700">
                            Dù trường học ọp ẹp, thiếu bàn ghế và sách vở, các
                            em vẫn học với niềm đam mê bất tận.
                          </p>
                        </div>

                        <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                          <h3 className="text-xl font-semibold text-slate-800 mb-3">
                            Sức mạnh của niềm tin
                          </h3>
                          <p className="text-slate-700">
                            Mười đứa trẻ trở thành "chiến binh cầu vồng", biểu
                            tượng của hy vọng và nghị lực vượt khó.
                          </p>
                        </div>

                        <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
                          <h3 className="text-xl font-semibold text-slate-800 mb-3">
                            Bài ca nhân văn
                          </h3>
                          <p className="text-slate-700">
                            Tác phẩm khẳng định giáo dục và lòng nhân ái chính
                            là nền tảng bền vững để thay đổi xã hội.
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  {/* Tác giả */}
                  {activeTab === "author" && (
                    <>
                      <h2 className="text-2xl font-bold text-slate-900 mb-6">
                        Tác giả Andrea Hirata
                      </h2>

                      <div className="flex items-start gap-6 mb-6">
                        <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center text-2xl flex-shrink-0">
                          ✍️
                        </div>
                        <div>
                          <p className="text-slate-700 mb-4">
                            <strong className="text-slate-900">
                              Andrea Hirata
                            </strong>{" "}
                            là nhà văn Indonesia nổi tiếng, tác giả của nhiều tác
                            phẩm cảm động về tuổi thơ, giáo dục và khát vọng.
                            “Chiến Binh Cầu Vồng” là tiểu thuyết đầu tay nhưng đã
                            làm rạng danh văn học Indonesia trên thế giới.
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                              Giáo dục
                            </span>
                            <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                              Nhân văn
                            </span>
                            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
                              Cảm động
                            </span>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Call to action */}
              <div className="mt-8 bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  Khám phá thêm sách hay với AI
                </h2>
                <p className="text-slate-700 mb-6">
                  Hãy quay lại{" "}
                  <Link
                    href="/"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Trang chủ Ngôi Nhà Sách
                  </Link>{" "}
                  để trải nghiệm tính năng tìm kiếm bằng AI và khám phá những{" "}
                  <strong>sách hay, sách cho trẻ, sách về cách sống con người</strong>{" "}
                  phù hợp nhất dành cho bạn.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
