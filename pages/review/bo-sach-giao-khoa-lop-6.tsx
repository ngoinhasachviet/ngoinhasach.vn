// pages/review/bo-sach-giao-khoa-lop-6.tsx
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function SGKLop6() {
  // ===== Structured Data (SEO) =====
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Bộ sách giáo khoa lớp 6 gồm những môn nào?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Thường có: Ngữ văn, Toán, Khoa học tự nhiên, Lịch sử & Địa lí, Giáo dục công dân, Ngoại ngữ 1 (tiếng Anh), Tin học, Công nghệ, Âm nhạc, Mỹ thuật, Giáo dục thể chất, Hoạt động trải nghiệm, Nội dung địa phương. Tùy danh mục của từng trường."
        }
      },
      {
        "@type": "Question",
        "name": "Mua sách giáo khoa lớp 6 như thế nào để đúng và đủ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Luôn theo danh mục trường: kiểm tra năm học/phiên bản, đối chiếu mã sách/ISBN, ưu tiên gian hàng chính hãng, mua đủ môn bắt buộc và vở bài tập nếu giáo viên yêu cầu."
        }
      },
      {
        "@type": "Question",
        "name": "Mua SGK lớp 6 online hay tại nhà sách thì tốt hơn?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Mua online nhanh và nhiều ưu đãi; mua tại nhà sách dễ kiểm tra trực tiếp. Dù cách nào, bạn vẫn nên bám danh mục trường để đảm bảo đúng bộ sách giáo khoa lớp 6."
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
      { "@type": "ListItem", "position": 3, "name": "Bộ sách giáo khoa lớp 6" }
    ]
  };

  const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Product",
      "name": "Bộ sách giáo khoa lớp 6",
      "category": "Textbook",
      "image": "https://example.com/images/sgk-lop-6-cover.jpg",
      "url": "https://example.com/review/bo-sach-giao-khoa-lop-6"
    },
    "author": { "@type": "Organization", "name": "Ngôi Nhà Sách" },
    "reviewRating": { "@type": "Rating", "ratingValue": "4.7", "bestRating": "5" },
    "description":
      "Review bộ sách giáo khoa lớp 6: tổng quan môn học, ưu - nhược điểm, checklist mua theo danh mục trường, mẹo mua SGK online và tại nhà sách."
  };

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/images/placeholder-book.jpg";
  };

  return (
    <>
      <Head>
        <title>Bộ sách giáo khoa lớp 6 (SGK lớp 6) – Review chi tiết, checklist mua đúng | Ngôi Nhà Sách</title>
        <meta
          name="description"
          content="Review bộ sách giáo khoa lớp 6 (SGK lớp 6): gồm những môn nào, ưu - nhược điểm, checklist mua theo danh mục trường, mẹo mua SGK online/chính hãng."
        />
        <meta
          name="keywords"
          content="sách giáo khoa lớp 6, SGK lớp 6, bộ sách giáo khoa lớp 6, mua SGK lớp 6, danh mục trường lớp 6"
        />
        <meta property="og:title" content="Bộ sách giáo khoa lớp 6 – Review & checklist mua đúng" />
        <meta
          property="og:description"
          content="Tổng quan SGK lớp 6, cách chọn theo danh mục trường, ưu - nhược điểm và nơi mua chính hãng."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/images/sgk-lop-6-cover.jpg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }} />
      </Head>

      <Header />

      <main className="bg-[#fefcf5] min-h-screen max-w-[1400px] w-full mx-auto px-4 pb-10">
        {/* ===== Banner trong main ===== */}
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
                <span className="font-medium">Bộ sách giáo khoa lớp 6</span>
              </nav>
              <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow">
                Bộ sách giáo khoa lớp 6 (SGK lớp 6) – Review chi tiết & checklist mua đúng
              </h1>
              <p className="text-white/90 mt-1">Tổng quan môn học • Theo danh mục trường • Nơi mua SGK chính hãng</p>
            </div>
          </div>
        </section>

        <article className="bg-white rounded-2xl shadow p-6 md:p-8 leading-relaxed text-gray-800">
          {/* Bìa + tóm tắt nhanh */}
          <section className="flex flex-col md:flex-row gap-6 items-start mb-4">
            <img
              src="/images/sgk-lop-6-cover.jpg"
              alt="Bìa bộ sách giáo khoa lớp 6"
              onError={handleImgError}
              className="w-40 md:w-48 rounded-xl shadow"
            />
            <div className="text-gray-700">
              <p className="italic">
                **Sách giáo khoa lớp 6** đánh dấu bước chuyển từ Tiểu học lên THCS. Bộ **SGK lớp 6** cần rõ ràng, nhiều
                hoạt động thực hành, hỗ trợ tự học – để học sinh bắt nhịp chương trình mới một cách vững vàng.
              </p>
              <p className="text-sm text-gray-500 mt-2">Cập nhật: 09/2025 • Biên tập: Ngôi Nhà Sách</p>
            </div>
          </section>

          {/* Điểm nhanh: dùng nhiều biến thể từ khóa nhưng tự nhiên */}
          <div className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50 p-4">
            <p className="font-semibold text-emerald-900">Điểm nhanh</p>
            <ul className="list-disc pl-5 text-emerald-900/90 mt-1 space-y-1">
              <li>
                **Bộ sách giáo khoa lớp 6** nhấn mạnh: tự học, dự án nhóm, ghi chép khoa học – nền tảng quan trọng khi bước vào THCS.
              </li>
              <li>
                Chọn **SGK lớp 6** <strong>theo danh mục trường</strong>: đúng năm học/phiên bản, đủ môn bắt buộc, kèm vở bài tập nếu được yêu cầu.
              </li>
              <li>
                Mua **sách giáo khoa** online hãy chọn **gian hàng chính hãng**; tại **nhà sách** nên đối chiếu danh mục ngay tại quầy.
              </li>
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
              <span className="text-gray-900 font-semibold">4.7</span>
              <span className="text-gray-500">(Đánh giá biên tập Ngôi Nhà Sách)</span>
            </div>

            <div className="h-px bg-emerald-100 my-3" />

            {/* Giá 1 hàng */}
            <div className="flex flex-nowrap items-baseline gap-6 md:gap-8 overflow-x-auto text-[15px]">
              <div className="flex items-baseline gap-2 whitespace-nowrap">
                <span className="font-semibold text-blue-600">Tiki:</span>
                <a
                  href="https://tiki.vn/sach-giao-khoa-bo-lop-6-chan-troi-sang-tao-sach-bai-hoc-bo-12-cuon-chuan-p275215840.html?spid=275215841&utm_source=accesstrade&utm_medium=tiki-aff&utm_campaign=AFF_NBR_ACT_UNK_TIKIVN-TNWGVSKG_ALL_VN_ALL_UNK_UNK_TAPX.b9c70e87-a6cf-4614-8d2f-52ad0f233df4_TAPU.7e816ab8-b482-4a28-bd38-1b2a6d1159b8&utm_term=TAPM.KjnK5ZkSxFthcqk8RoezBNExXfMrbAJGapFn5m1756920229_TAPP.2046475_TAPT.TI3&tclid=30606bdf-0d84-4230-841c-c9c87069918c&fsl=true&isOpenStore=false&trackId=68b879a5a517476a1a713272&osName=Windows&deepLink=tikivn%3A%2F%2Fproducts%2F275215840%3Fspid%3D275215841%26utm_source%3Daccesstrade%26utm_medium%3Dtiki-aff%26utm_campaign%3DAFF_NBR_ACT_UNK_TIKIVN-TNWGVSKG_ALL_VN_ALL_UNK_UNK_TAPX.b9c70e87-a6cf-4614-8d2f-52ad0f233df4_TAPU.7e816ab8-b482-4a28-bd38-1b2a6d1159b8%26utm_term%3DTAPM.KjnK5ZkSxFthcqk8RoezBNExXfMrbAJGapFn5m1756920229_TAPP.2046475_TAPT.TI3%26tclid%3D30606bdf-0d84-4230-841c-c9c87069918c&clickId=334af7ab-a913-432b-a5f0-2fa78efd0be2&fullUrl=https%3A%2F%2Fti.ki%2Fadd%2FTNWGVSKG%3Futm_term%3DTAPM.KjnK5ZkSxFthcqk8RoezBNExXfMrbAJGapFn5m1756920229_TAPP.2046475_TAPT.TI3%26TIKI_URI%3Dhttps%253A%252F%252Ftiki.vn%252Fsach-giao-khoa-bo-lop-6-chan-troi-sang-tao-sach-bai-hoc-bo-12-cuon-chuan-p275215840.html%253Fspid%253D275215841&isFBApp=false&deepLinkData=&hash=TNWGVSKG"
                  className="font-medium text-gray-900 hover:underline"
                  rel="nofollow sponsored"
                >
                  177.400 ₫
                </a>
              </div>
              <div className="hidden md:block h-4 w-px bg-emerald-100" />
              <div className="flex items-baseline gap-2 whitespace-nowrap">
                <span className="font-semibold text-orange-600">Shopee:</span>
                <a
                  href="https://shopee.vn/search?keyword=s%C3%A1ch%20gi%C3%A1o%20khoa%20l%E1%BB%9Bp%206"
                  className="font-medium text-gray-900 hover:underline"
                  rel="nofollow sponsored"
                >
                  Xem giá bộ sách giáo khoa lớp 6
                </a>
              </div>
              <div className="hidden md:block h-4 w-px bg-emerald-100" />
              <div className="flex items-baseline gap-2 whitespace-nowrap">
                <span className="font-semibold text-rose-600">Fahasa:</span>
                <a
                  href="https://www.fahasa.com/catalogsearch/result/?q=s%C3%A1ch+gi%C3%A1o+khoa+l%E1%BB%9Bp+6"
                  className="font-medium text-gray-900 hover:underline"
                  rel="nofollow sponsored"
                >
                  Xem giá SGK 6
                </a>
              </div>
            </div>

            <div className="mt-3 text-emerald-900">
              <span className="font-semibold">Ngôi Nhà Sách</span> khuyên bạn kiểm tra <strong>Danh mục SGK lớp 6 của trường</strong> trước khi đặt mua.
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <a href="https://tiki.vn/search?q=s%C3%A1ch+gi%C3%A1o+khoa+l%E1%BB%9Bp+6" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition" rel="nofollow sponsored">Mua Tiki</a>
              <a href="https://shopee.vn/search?keyword=s%C3%A1ch%20gi%C3%A1o%20khoa%20l%E1%BB%9Bp%206" className="px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition" rel="nofollow sponsored">Mua Shopee</a>
              <a href="https://www.fahasa.com/catalogsearch/result/?q=s%C3%A1ch+gi%C3%A1o+khoa+l%E1%BB%9Bp+6" className="px-4 py-2 rounded-lg bg-rose-600 text-white hover:bg-rose-700 transition" rel="nofollow sponsored">Mua Fahasa</a>
            </div>
          </div>

          {/* ===== Nội dung cốt lõi: tối ưu từ khóa một cách tự nhiên ===== */}
          <h2 className="text-2xl font-semibold text-emerald-700 mt-8 mb-3">
            Bộ sách giáo khoa lớp 6 gồm những gì?
          </h2>
          <p>
            Ở cấp THCS, **sách giáo khoa lớp 6** bắt đầu phân hóa rõ theo từng môn. Tùy trường, danh mục có thể gồm: <strong>Ngữ văn</strong>, <strong>Toán</strong>, <strong>Khoa học tự nhiên</strong>, <strong>Lịch sử &amp; Địa lí</strong>, <strong>Giáo dục công dân</strong>, <strong>Ngoại ngữ 1</strong> (thường là tiếng Anh), <strong>Tin học</strong>, <strong>Công nghệ</strong>, <strong>Âm nhạc</strong>, <strong>Mỹ thuật</strong>, <strong>Giáo dục thể chất</strong>, <strong>Hoạt động trải nghiệm</strong> và <strong>Nội dung địa phương</strong>. Khi mua **bộ sách giáo khoa lớp 6**, bạn nên đối chiếu <em>đúng danh mục của trường</em> để đủ – đúng từng đầu sách.
          </p>

          <h2 className="text-2xl font-semibold text-emerald-700 mt-6 mb-3">
            Review bộ SGK lớp 6: Ưu – nhược điểm thường gặp
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Ưu:</strong> Nội dung tăng tính <em>thực hành</em> và <em>dự án</em>, khuyến khích tự học; nhiều bài có gợi ý hoạt động nhóm, thí nghiệm đơn giản và câu hỏi mở rộng.
            </li>
            <li>
              <strong>Nhược:</strong> Khối lượng kiến thức lớn hơn lớp 5, yêu cầu học sinh biết <em>ghi chép – lập kế hoạch</em>; một số em có thể cần thêm vở bài tập/tài liệu phụ trợ để luyện lại.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-emerald-700 mt-6 mb-3">
            Checklist mua bộ sách giáo khoa lớp 6 (đúng &amp; đủ)
          </h2>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Tải/nhận <strong>danh mục SGK lớp 6 của trường</strong> (năm học hiện hành).</li>
            <li>Đối chiếu <strong>mã sách/ISBN</strong>, đúng <strong>phiên bản</strong> và <strong>năm tái bản</strong>.</li>
            <li>Mua đủ <strong>môn bắt buộc</strong>; hỏi giáo viên về <strong>vở bài tập</strong> hoặc <strong>tài liệu bổ trợ</strong> nếu có.</li>
            <li>Nếu <strong>mua online</strong>, chọn **gian hàng chính hãng**, đọc kỹ mô tả đủ đầu sách.</li>
            <li>Ghi chú tên học sinh/lớp lên từng quyển để tránh thất lạc khi vào năm học.</li>
          </ol>

          <h2 className="text-2xl font-semibold text-emerald-700 mt-6 mb-3">
            Mua SGK lớp 6 online hay tại nhà sách?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl border border-emerald-100 p-4">
              <p className="font-medium text-emerald-900 mb-1">Mua online (Tiki/Shopee/Fahasa)</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Nhanh, nhiều ưu đãi; dễ so sánh giá **bộ sách giáo khoa lớp 6**.</li>
                <li>Nhớ kiểm tra danh mục trường và **chọn gian hàng chính hãng**.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-emerald-100 p-4">
              <p className="font-medium text-emerald-900 mb-1">Mua tại nhà sách</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Xem trực tiếp, dễ đối chiếu danh mục.</li>
                <li>Hỏi nhân viên về phiên bản/năm in để đúng bộ **SGK lớp 6**.</li>
              </ul>
            </div>
          </div>

          {/* ===== FAQ UI ===== */}
          <section id="faq" aria-labelledby="faq-title" className="mt-10">
            <h2 id="faq-title" className="text-2xl font-semibold text-emerald-700 mb-3">Câu hỏi thường gặp về sách giáo khoa lớp 6</h2>
            <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-teal-50 to-sky-50 p-4 md:p-5">
              <details className="group border-b border-emerald-100 last:border-b-0 py-3">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-medium text-gray-900">Bộ SGK lớp 6 có giống các trường không?</span>
                  <span className="ml-3 text-emerald-700 transition-transform group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-2 text-gray-700">Mỗi trường có thể chọn bộ khác nhau, vì vậy luôn theo <strong>Danh mục SGK lớp 6 của trường</strong> trước khi mua.</p>
              </details>

              <details className="group border-b border-emerald-100 last:border-b-0 py-3">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-medium text-gray-900">Có cần mua tài liệu tham khảo ngay không?</span>
                  <span className="ml-3 text-emerald-700 transition-transform group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-2 text-gray-700">Ưu tiên nắm chắc nội dung trong **sách giáo khoa** và vở bài tập. Tài liệu tham khảo mua thêm khi thật sự cần.</p>
              </details>

              <details className="group py-3">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="font-medium text-gray-900">Khác biệt lớn giữa lớp 5 và SGK lớp 6?</span>
                  <span className="ml-3 text-emerald-700 transition-transform group-open:rotate-180">⌄</span>
                </summary>
                <p className="mt-2 text-gray-700">Tăng khối lượng kiến thức, nhiều môn mới/sát thực tế, chú trọng tự học – dự án – thuyết trình.</p>
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
