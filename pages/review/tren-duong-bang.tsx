import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useState } from "react";
export default function ReviewTrenDuongBang() {
  const [activeTab, setActiveTab] = useState("review");
  const [isBookmarked, setIsBookmarked] = useState(false);
  return (
    <>
      <Head>
        <title>Review Trên Đường Băng - Tony Buổi Sáng | Ngôi Nhà Sách</title>
        <meta
          name="description"
          content="Đánh giá chi tiết sách Trên Đường Băng của Tony Buổi Sáng - cuốn sách truyền cảm hứng mạnh mẽ cho giới trẻ Việt Nam với những bài học về hành trình trưởng thành."
        />
        <meta name="keywords" content="review sách, Trên Đường Băng, Tony Buổi Sáng, sách tuổi trẻ, phát triển bản thân, định hướng thanh niên" />
        <meta property="og:title" content="Review sách Trên Đường Băng – Tony Buổi Sáng | Ngôi Nhà Sách" />
        <meta
          property="og:description"
          content="Khám phá những bài học quý giá từ cuốn sách Trên Đường Băng - hành trang không thể thiếu cho người trẻ trên đường chinh phục ước mơ."
        />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/images/tren-duong-bang-cover.jpg" />
      </Head>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Breadcrumb */}
        <div className="bg-white py-3 border-b">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="text-sm text-slate-600">
              <Link href="/" className="hover:text-blue-600 transition-colors">Trang chủ</Link>
              <span className="mx-2">›</span>
              <Link href="/review" className="hover:text-blue-600 transition-colors">Review sách</Link>
              <span className="mx-2">›</span>
              <span className="text-slate-900 font-medium">Trên Đường Băng</span>
            </nav>
          </div>
        </div>
        
        {/* Book Cover and Basic Info */}
        <section className="max-w-6xl mx-auto px-4 py-8">
         <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <div className="sticky top-24">
                <div className="rounded-xl shadow-lg overflow-hidden">
                  <img 
                    src="/images/tren-duong-bang-cover.jpg" 
                    alt="Bìa sách Trên Đường Băng - Tony Buổi Sáng" 
                    className="w-full object-cover"
                  />
                </div>
                
                <div className="mt-6 bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 font-semibold text-slate-900">5.0</span>
                      <span className="ml-1 text-slate-500">(2340)</span>
                    </div>
                    <button 
                      onClick={() => setIsBookmarked(!isBookmarked)}
                      className={`p-2 rounded-full ${isBookmarked ? 'bg-amber-50 text-amber-500' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}
                      aria-label={isBookmarked ? "Bỏ lưu đánh giá" : "Lưu đánh giá này"}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-slate-600">Tác giả:</span>
                      <span className="font-medium">Tony Buổi Sáng</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-slate-600">Thể loại:</span>
                      <span className="font-medium">Self-help, Phát triển bản thân</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-slate-600">Số trang:</span>
                      <span className="font-medium">272 trang</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-slate-600">Thời gian đọc:</span>
                      <span className="font-medium">~4-5 giờ</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 md:w mx-auto">
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-2 font-semibold text-slate-900">5.0</span>
                        <span className="ml-1 text-slate-500">(2340)</span>
                      </div>
                      
                    </div>

                    {/* Bảng giá & ưu đãi hiển thị giống SearchResults */}
                    <div className="text-sm space-y-1 mb-4">
                      <p><span className="text-[#1A94FF] font-semibold">Tiki:</span> 77.500₫</p>
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
                        href="https://tiki.vn/tren-duong-bang-tony-buoi-sang-p191782162.html?spid=191782164&utm_source=accesstrade&utm_medium=tiki-aff&utm_campaign=AFF_NBR_ACT_UNK_TIKIVN-TNWGVSKG_ALL_VN_ALL_UNK_UNK_TAPX.b9c70e87-a6cf-4614-8d2f-52ad0f233df4_TAPU.7e816ab8-b482-4a28-bd38-1b2a6d1159b8&utm_term=TAPM.yfVL11eDhGRMWRjxyChyxbCzKCZT51HtipO5tJ1756920016_TAPP.2046475_TAPT.TI3&tclid=c0d41897-73df-4d9c-8f98-a86e2ca759d2&fsl=true&isOpenStore=false&trackId=68b878d1a517476a1a712d02&osName=Windows&deepLink=tikivn%3A%2F%2Fproducts%2F191782162%3Fspid%3D191782164%26utm_source%3Daccesstrade%26utm_medium%3Dtiki-aff%26utm_campaign%3DAFF_NBR_ACT_UNK_TIKIVN-TNWGVSKG_ALL_VN_ALL_UNK_UNK_TAPX.b9c70e87-a6cf-4614-8d2f-52ad0f233df4_TAPU.7e816ab8-b482-4a28-bd38-1b2a6d1159b8%26utm_term%3DTAPM.yfVL11eDhGRMWRjxyChyxbCzKCZT51HtipO5tJ1756920016_TAPP.2046475_TAPT.TI3%26tclid%3Dc0d41897-73df-4d9c-8f98-a86e2ca759d2&clickId=41106679-aba6-4c1a-936f-fc204884f767&fullUrl=https%3A%2F%2Fti.ki%2Fadd%2FTNWGVSKG%3Futm_term%3DTAPM.yfVL11eDhGRMWRjxyChyxbCzKCZT51HtipO5tJ1756920016_TAPP.2046475_TAPT.TI3%26TIKI_URI%3Dhttps%253A%252F%252Ftiki.vn%252Ftren-duong-bang-tony-buoi-sang-p191782162.html%253Fspid%253D191782164&isFBApp=false&deepLinkData=&hash=TNWGVSKG"
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
            </div>
            
            <div className="md:w-3/4">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="border-b border-slate-200">
                  <nav className="flex">
                    <button
                      className={`px-6 py-4 font-medium text-sm ${activeTab === 'review' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                      onClick={() => setActiveTab('review')}
                    >
                      Review chi tiết
                    </button>
                    <button
                      className={`px-6 py-4 font-medium text-sm ${activeTab === 'content' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                      onClick={() => setActiveTab('content')}
                    >
                      Nội dung chính
                    </button>
                    <button
                      className={`px-6 py-4 font-medium text-sm ${activeTab === 'author' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
                      onClick={() => setActiveTab('author')}
                    >
                      Tác giả
                    </button>
                  </nav>
                </div>
                
                <div className="p-6 md:p-8">
                  {activeTab === 'review' && (
                    <>
                      <h1 className="text-3xl font-bold text-slate-900 mb-4">Trên Đường Băng: Hành trang bình yên cho tuổi trẻ</h1>
                      
                      <div className="prose max-w-none">
                        <p className="text-lg text-slate-700 italic border-l-4 border-blue-500 pl-4 py-2 mb-6">
                          "Trên Đường Băng" như người bạn đồng hành, dịu dàng nhưng kiên định, giúp người trẻ gom góp bình yên và dũng khí trước khi "cất cánh" trên hành trình cuộc đời.
                        </p>
                        
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Tổng quan</h2>
                        <p className="text-slate-700 mb-4">
                          "Trên Đường Băng" của Tony Buổi Sáng là một trong những cuốn sách truyền cảm hứng nổi bật nhất dành cho giới trẻ Việt Nam. Với văn phong gần gũi, dí dỏm nhưng không kém phần sâu sắc, cuốn sách đã chạm đến trái tim của hàng triệu độc giả.
                        </p>
                        
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Đánh giá chi tiết</h2>
                        
                        <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Ưu điểm nổi bật</h3>
                        <ul className="list-disc pl-5 text-slate-700 mb-6">
                          <li className="mb-2"><span className="font-medium">Văn phong giản dị, dí dỏm:</span> Thông điệp rõ ràng mà không giáo điều, dễ dàng tiếp cận với mọi đối tượng độc giả</li>
                          <li className="mb-2"><span className="font-medium">Truyền cảm hứng nhẹ nhàng:</span> Tạo cảm giác an yên khi đọc, phù hợp với những độc giả trẻ đang tìm kiếm định hướng</li>
                          <li className="mb-2"><span className="font-medium">Nhiều ví dụ thực tế:</span> Dễ áp dụng cho người mới bắt đầu, giúp biến lý thuyết thành hành động cụ thể</li>
                        </ul>
                        
                        <h3 className="text-xl font-semibold text-slate-800 mt-6 mb-3">Đối tượng độc giả</h3>
                        <p className="text-slate-700 mb-4">
                          Cuốn sách phù hợp với nhiều đối tượng độc giả, đặc biệt là học sinh, sinh viên và những người trẻ mới bắt đầu hành trình tự lập. Nếu bạn đang tìm kiếm một cuốn sách "nhẹ mà sâu", đây chắc chắn là lựa chọn đáng cân nhắc.
                        </p>
                        
                        <div className="bg-slate-50 rounded-xl p-5 my-6 border border-slate-200">
                          <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                            <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            Góc nhìn từ độc giả
                          </h4>
                          <p className="text-slate-700 italic">
                            "Trên Đường Băng giống một cuộc chuyện trò trong sáng sớm: không khoa trương, không phán xét, chỉ có những lời nhắc đủ dịu để ta muốn bắt đầu lại, tốt hơn hôm qua."
                          </p>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Kết luận</h2>
                        <p className="text-slate-700 mb-4">
                          "Trên Đường Băng" của Tony Buổi Sáng là một cuốn sách đưa ta về trạng thái cân bằng: vừa quyết liệt với mục tiêu, vừa dịu dàng với chính mình. Hành trang ấy giúp đường băng luôn đủ dài để cất cánh, và quan trọng hơn, giúp bạn tận hưởng hành trình đó một cách trọn vẹn.
                        </p>
                      </div>
                    </>
                  )}
                  
                  {activeTab === 'content' && (
                    <>
                      <h2 className="text-2xl font-bold text-slate-900 mb-6">Nội dung chính của sách</h2>
                      
                      <div className="space-y-6">
                        <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                          <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center">
                            <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Chuẩn bị cho chuyến bay cuộc đời
                          </h3>
                          <p className="text-slate-700">
                            Tony Buổi Sáng ví tuổi trẻ như máy bay trên đường băng: cần tăng tốc với ngoại ngữ, đọc sách, trải nghiệm và kỷ luật cá nhân để có thể cất cánh. Mỗi ngày tiến một chút, đường băng sẽ đủ dài cho bạn vươn tới những chân trời mới.
                          </p>
                        </div>
                        
                        <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                          <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center">
                            <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            Dấn thân và kiên định
                          </h3>
                          <p className="text-slate-700">
                            Đừng chờ cơ hội; hãy tự tạo cơ hội. Những va vấp là bài học, giúp ta hiểu mình mạnh yếu ở đâu để điều chỉnh hướng bay. Tony khuyên người trẻ nên dấn thân, chấp nhận thử thách và kiên định với mục tiêu.
                          </p>
                        </div>
                        
                        <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
                          <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center">
                            <svg className="w-5 h-5 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            Giữ sự tử tế và bình yên
                          </h3>
                          <p className="text-slate-700">
                            Thành công có ý nghĩa khi đi cùng lòng tử tế. Sách khơi gợi cảm giác ấm áp, không ồn ào thúc ép – đó là bình yên giúp ta bền bỉ hơn. Tony nhấn mạnh tầm quan trọng của việc giữ gìn sự tử tế trong mọi hoàn cảnh.
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {activeTab === 'author' && (
                    <>
                      <h2 className="text-2xl font-bold text-slate-900 mb-6">Tác giả Tony Buổi Sáng</h2>
                      
                      <div className="flex items-start gap-6 mb-6">
                        <div className="w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center text-2xl flex-shrink-0">
                          📚
                        </div>
                        <div>
                          <p className="text-slate-700 mb-4">
                            <strong className="text-slate-900">Tony Buổi Sáng</strong> là bút danh quen thuộc với cộng đồng yêu đọc Việt Nam. Với văn phong dí dỏm, gần gũi nhưng giàu trải nghiệm, những lời khuyên của Tony trở nên dễ đọc, dễ tiếp thu và dễ áp dụng vào thực tế.
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                              Truyền cảm hứng
                            </span>
                            <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                              Dí dỏm
                            </span>
                            <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
                              Thực tế
                            </span>
                            <span className="inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-800">
                              Nhân văn
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                          <h4 className="text-sm font-semibold text-slate-900 mb-2">Chủ đề ưa thích</h4>
                          <p className="text-slate-700">Học hỏi • Kỷ luật • Tử tế</p>
                        </div>
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                          <h4 className="text-sm font-semibold text-slate-900 mb-2">Giọng điệu</h4>
                          <p className="text-slate-700">Ấm áp, khích lệ, thẳng thắn vừa phải</p>
                        </div>
                      </div>
                      
                      <div className="bg-slate-50 rounded-xl p-5 border-l-4 border-blue-500">
                        <p className="text-slate-700 italic mb-2">
                          "Điều quan trọng không phải là chạy nhanh nhất, mà là chuẩn bị tốt để chạy đủ dài."
                        </p>
                        <p className="text-sm text-slate-600">— tinh thần trong "Trên Đường Băng"</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              <div className="mt-8 bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Bạn đã sẵn sàng cất cánh?</h2>
                <p className="text-slate-700 mb-6">Hãy sở hữu ngay cuốn sách này để khám phá những bài học quý giá cho hành trình của bạn</p>
                
                
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