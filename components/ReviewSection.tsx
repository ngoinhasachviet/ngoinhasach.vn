import Link from "next/link";

export default function ReviewSection() {
  return (
    <section className="w-full order-1 lg:order-2 mb-10 lg:mb-0 px-4">
      <h2 className="text-2xl font-bold text-primary-green mb-6 border-b pb-2">
        ✍️ Review sách
      </h2>
      <div className="grid gap-5">

       {/* Chiến Binh Cầu Vồng */}
        <Link
          href="/review/chien-binh-cau-vong"
          className="flex gap-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 items-start"
        >
          <img
            src="/images/chien-binh-cau-vong-cover.jpg"
            alt="Chiến Binh Cầu Vồng"
            className="w-20 h-28 object-cover rounded-lg shadow-sm flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-800 truncate">
              Chiến Binh Cầu Vồng
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              Bản hùng ca cảm động về tri thức, giáo dục và ước mơ.
            </p>
          </div>
        </Link>

        {/* Trên Đường Băng */}
        <Link
          href="/review/tren-duong-bang"
          className="flex gap-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 items-start"
        >
          <img
            src="/images/tren-duong-bang-cover.jpg"
            alt="Trên Đường Băng"
            className="w-20 h-28 object-cover rounded-lg shadow-sm flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-800 truncate">
              Trên Đường Băng
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              Hành trang bình yên cho tuổi trẻ...
            </p>
          </div>
        </Link>

       {/* SGK Lớp 1 */}
        <Link
          href="/review/bo-sach-giao-khoa-lop-1"
          className="flex gap-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 items-start"
        >
          <img
            src="/images/sgk-lop-1-cover.jpg"
            alt="Bộ sách giáo khoa lớp 1"
            className="w-20 h-28 object-cover rounded-lg shadow-sm flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-800 truncate">
              Bộ sách giáo khoa lớp 1
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              Review chi tiết & lưu ý mua theo danh mục trường.
            </p>
          </div>
        </Link>

        {/* SGK Lớp 6 */}
        <Link
          href="/review/bo-sach-giao-khoa-lop-6"
          className="flex gap-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 items-start"
        >
          <img
            src="/images/sgk-lop-6-cover.jpg"
            alt="Bộ sách giáo khoa lớp 6"
            className="w-20 h-28 object-cover rounded-lg shadow-sm flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-800 truncate">
              Bộ sách giáo khoa lớp 6
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">
              Tổng quan môn học, kỹ năng tự học & nơi mua chính hãng.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
