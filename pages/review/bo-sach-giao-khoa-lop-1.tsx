import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function SGKLop1() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Nên mua bộ sách giáo khoa lớp 1 như thế nào?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ưu tiên theo yêu cầu của nhà trường, kiểm tra danh mục từng môn trong năm học, chọn đúng phiên bản mới và mua kèm vở bài tập nếu trường sử dụng."
        }
      },
      {
        "@type": "Question",
        "name": "Có cần mua đủ tất cả các môn ngay từ đầu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nên mua đủ các môn bắt buộc; các tài liệu bổ trợ có thể bổ sung sau. Hỏi giáo viên chủ nhiệm và tham khảo danh mục chính thức của trường."
        }
      },
      {
        "@type": "Question",
        "name": "Mua online hay tại nhà sách?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nếu mua online, chọn gian hàng chính hãng, xem kỹ danh sách đầu sách và phiên bản. Tại nhà sách, bạn có thể đối chiếu danh mục trực tiếp với danh sách của trường."
        }
      }
    ]
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Trang chủ", "item": "https://example.com/" },
      { "@type": "ListItem", "position": 2, "name": "Review sách", "item": "https://example.com/review" },
      { "@type": "ListItem", "position": 3, "name": "Bộ sách giáo khoa lớp 1" }
    ]
  };

  const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Product",
      "name": "Bộ sách giáo khoa lớp 1",
      "category": "Textbook",
      "image": "https://example.com/images/sgk-lop-1-cover.jpg",
      "url": "https://example.com/review/bo-sach-giao-khoa-lop-1"
    },
    "author": { "@type": "Organization", "name": "Ngôi Nhà Sách" },
    "reviewRating": { "@type": "Rating", "ratingValue": "4.8", "bestRating": "5" },
    "description": "Đánh giá tổng quan về bộ sách giáo khoa lớp 1: cấu trúc môn học, ưu nhược điểm và lưu ý khi chọn mua."
  };

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/images/placeholder-book.jpg";
  };

  return (
    <>
      <Head>
        <title>Bộ sách giáo khoa lớp 1 (SGK lớp 1) – Review chi tiết & gợi ý chọn | Ngôi Nhà Sách</title>
        <meta
          name="description"
          content="Review bộ sách giáo khoa lớp 1 (SGK lớp 1): cấu trúc môn học, ưu – nhược điểm, lưu ý khi mua theo danh mục của trường. Gợi ý nơi mua chính hãng."
        />
        <meta name="keywords" content="sách giáo khoa lớp 1, SGK lớp 1, bộ sách giáo khoa lớp 1, mua SGK lớp 1" />
        <meta property="og:title" content="Bộ sách giáo khoa lớp 1 – Review & gợi ý chọn" />
        <meta
          property="og:description"
          content="Đánh giá bộ SGK lớp 1, lưu ý khi chọn theo danh mục trường, gợi ý nơi mua chính hãng."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/images/sgk-lop-1-cover.jpg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }} />
      </Head>

      <Header />

      <main className="bg-[#fefcf5] min-h-screen max-w-[1400px] w-full mx-auto px-4 pb-10">
        {/* Banner trong main */}
        <section className="relative w-full mt-3 mb-6 overflow-hidden rounded-2xl border border-emerald-100">
          <img src="/images/banner1.png" alt="Banner Ngôi Nhà Sách" className="w-full h-40 md:h-56 object-cover" />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-5 md:px-8">
              <nav className="text-sm text-white/90 mb-2">
                <Link href="/" className="hover:underline">Trang chủ</Link>
                <span className="mx-2">›</span>
                <Link href="/review" className="hover:underline">Review sách</Link>
                <span className="mx-2">›</span>
                <span className="font-medium">Bộ sách giáo khoa lớp 1</span>
              </nav>
              <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow">
                Bộ sách giáo khoa lớp 1 (SGK lớp 1) – Review & gợi ý chọn
              </h1>
              <p className="text-white/90 mt-1">Tổng quan cấu trúc môn học • Lưu ý mua theo danh mục của trường</p>
            </div>
          </div>
        </section>

        <article className="bg-white rounded-2xl shadow p-6 md:p-8 leading-relaxed text-gray-800">
          {/* ===== KHỐI BÌA SÁCH + TÓM TẮT (mới thêm) ===== */}
          <section className="flex flex-col md:flex-row gap-6 items-start mb-4">
            <img
              src="/images/sgk-lop-1-cover.jpg"
              alt="Bìa bộ sách giáo khoa lớp 1"
              onError={handleImgError}
              className="w-40 md:w-48 rounded-xl shadow"
            />
            <div className="text-gray-700">
              <p className="italic">
                Bộ SGK lớp 1 giúp học sinh làm quen nề nếp học tập, đặt nền tảng đọc – viết – tính toán qua hoạt động
                ngắn, vui và dễ hiểu.
              </p>
            </div>
          </section>

          {/* Mở bài */}
          <p>
            Bước vào lớp 1 là giai đoạn quan trọng, bộ sách giáo khoa phù hợp sẽ giúp trẻ làm quen với nề nếp học tập và
            xây nền tảng ngôn ngữ – toán học. Bài review này tổng hợp những điểm cần biết, ưu – nhược điểm thường gặp và
            cách chọn mua đúng theo danh mục của trường.
          </p>

          {/* Điểm nhanh */}
          <div className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50 p-4">
            <p className="font-semibold text-emerald-900">Điểm nhanh</p>
            <ul className="list-disc pl-5 text-emerald-900/90 mt-1 space-y-1">
              <li>Trọng tâm: Làm quen chữ – số, nề nếp học tập vui – dễ hiểu.</li>
              <li>Ưu tiên: Đúng danh mục trường yêu cầu, phiên bản mới.</li>
              <li>Gợi ý: Mua trọn bộ + vở bài tập để đồng bộ nội dung.</li>
            </ul>
          </div>

          {/* Card thông tin: rating + giá 1 hàng + CTA */}
          <div className="mt-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-emerald-100 shadow-sm p-4 md:p-5">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="w-5 h-5 text-amber-500 fill-current" aria-hidden="true">
                    <path d="M10 15.27L16.18 18l-1.64-7.03L19 6.9l-7.19-.61L10 0 8.19 6.29 1 6.9l4.46 4.07L3.82 18z"/>
                  </svg>
                ))}
              </div>
              <span className="text-gray-900 font-semibold">4.8</span>
              <span className="text-gray-500">(Đánh giá biên tập Ngôi Nhà Sách)</span>
            </div>

            <div className="h-px bg-emerald-100 my-3" />

            {/* Giá cùng 1 hàng */}
            <div className="flex flex-nowrap items-baseline gap-6 md:gap-8 overflow-x-auto text-[15px]">
              <div className="flex items-baseline gap-2 whitespace-nowrap">
                <span className="font-semibold text-blue-600">Tiki:</span>
                <a href="https://tiki.vn/search?q=s%C3%A1ch+gi%C3%A1o+khoa+l%E1%BB%9Bp+1" className="font-medium text-gray-900 hover:underline" rel="nofollow sponsored">
                  Xem giá
                </a>
              </div>
              <div className="hidden md:block h-4 w-px bg-emerald-100" />
              <div className="flex items-baseline gap-2 whitespace-nowrap">
                <span className="font-semibold text-orange-600">Shopee:</span>
                <a href="https://shopee.vn/search?keyword=s%C3%A1ch%20gi%C3%A1o%20khoa%20l%E1%BB%9Bp%201" className="font-medium text-gray-900 hover:underline" rel="nofollow sponsored">
                  Xem giá
                </a>
              </div>
              <div className="hidden md:block h-4 w-px bg-emerald-100" />
              <div className="flex items-baseline gap-2 whitespace-nowrap">
                <span className="font-semibold text-rose-600">Fahasa:</span>
                <a href="https://www.fahasa.com/catalogsearch/result/?q=s%C3%A1ch+gi%C3%A1o+khoa+l%E1%BB%9Bp+1" className="font-medium text-gray-900 hover:underline" rel="nofollow sponsored">
                  Xem giá
                </a>
              </div>
            </div>

            <div className="mt-3 text-emerald-900">
              <span className="font-semibold">Ngôi Nhà Sách</span> tặng bạn <span className="font-semibold">ưu đãi MoMo</span> khi mua qua liên kết chính hãng.
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <a href="https://tiki.vn/search?q=s%C3%A1ch+gi%C3%A1o+khoa+l%E1%BB%9Bp+1" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition" rel="nofollow sponsored">Mua Tiki</a>
              <a href="https://shopee.vn/search?keyword=s%C3%A1ch%20gi%C3%A1o%20khoa%20l%E1%BB%9Bp%201" className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition" rel="nofollow sponsored">Mua Shopee</a>
              <a href="https://www.fahasa.com/catalogsearch/result/?q=s%C3%A1ch+gi%C3%A1o+khoa%20l%E1%BB%9Bp%201" className="px-4 py-2 rounded-lg bg-rose-600 text-white hover:bg-rose-700 transition" rel="nofollow sponsored">Mua Fahasa</a>
            </div>
          </div>

          {/* Nội dung chính */}
          <h2 className="text-2xl font-semibold text-emerald-700 mt-8 mb-3">Tổng quan & cấu trúc môn học</h2>
          <p>
            Ở lớp 1, trọng tâm là Tiếng Việt (ngữ âm – chữ cái – ghép vần), Toán (số đếm, cộng trừ trong phạm vi cơ bản),
            cùng các môn làm quen như Đạo đức, Tự nhiên & Xã hội, Âm nhạc, Mỹ thuật, Giáo dục thể chất. Cách trình bày nên
            sáng, nhiều hình minh họa, hoạt động ngắn giúp trẻ dễ tiếp thu.
          </p>

          <h2 className="text-2xl font-semibold text-emerald-700 mt-6 mb-3">Ưu – nhược điểm thường gặp</h2>
          <ul className="list-disc pl-6">
            <li><strong>Ưu:</strong> Hình ảnh sinh động, hoạt động rõ bước, gợi ý phụ huynh hỗ trợ tại nhà.</li>
            <li><strong>Nhược:</strong> Một số bài có thể hơi nhanh với trẻ mới làm quen; cần luyện lại qua vở bài tập.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-emerald-700 mt-6 mb-3">Lưu ý khi chọn mua</h2>
          <ul className="list-disc pl-6">
            <li>Luôn <strong>theo danh mục của trường</strong> (mã ISBN/đầu sách cụ thể).</li>
            <li>Chọn <strong>phiên bản mới</strong>, đúng năm học; mua kèm <strong>vở bài tập</strong> nếu giáo viên sử dụng.</li>
            <li>Ưu tiên <strong>đơn vị chính hãng</strong> để đảm bảo chất lượng in ấn, đủ đầu sách.</li>
          </ul>

          {/* FAQ UI */}
          <section id="faq" aria-labelledby="faq-title" className="mt-10">
            <h2 id="faq-title" className="text-2xl font-semibold text-emerald-700 mb-3">Hỏi – Đáp nhanh</h2>
            <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 p-4 md:p-5">
              <details className="group border-b border-emerald-100 last:border-b-0 py-3">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-medium text-gray-900">Nên mua bộ SGK lớp 1 ở đâu?</span>
                  <span className="ml-3 text-emerald-700 transition-transform group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-2 text-gray-700">Chọn gian hàng chính hãng trên Tiki/Shopee/Fahasa hoặc nhà sách uy tín tại địa phương.</p>
              </details>
              <details className="group py-3">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-medium text-gray-900">Có cần mua thêm sách tham khảo?</span>
                  <span className="ml-3 text-emerald-700 transition-transform group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-2 text-gray-700">Tùy giáo viên chủ nhiệm; ưu tiên hoàn thành SGK và vở bài tập trước khi bổ sung tài liệu khác.</p>
              </details>
            </div>
          </section>

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
        </article>
      </main>

      <Footer />
    </>
  );
}
