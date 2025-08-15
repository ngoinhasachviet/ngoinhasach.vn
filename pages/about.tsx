
import Header from "../components/Header";

export default function About() {
  return (
    <>
      <Header />
      <div className="max-w-[1200px] mx-auto px-6 py-10 bg-[#fefcf5] text-[#374151]">
        <h1 className="text-3xl font-bold text-center mb-8 text-green-700">Giới thiệu về Ngôi Nhà Sách</h1>
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <img src="/images/intro.png" alt="Người đọc sách" className="rounded-xl shadow-md w-full lg:w-1/2 lg:w-1/2 h-auto object-cover" />
          <div className="text-lg leading-relaxed space-y-4 lg:w-1/2">
            <p>Người đứng sau <strong>Ngôi Nhà Sách</strong> là anh <strong>Trần Minh Dũng</strong>, một quản lý dự án phần mềm giàu kinh nghiệm, từng gắn bó với nhiều công ty công nghệ hàng đầu tại Việt Nam. Anh cũng là một người yêu sách chân thành và luôn say mê sưu tầm sách hay và đặc biệt.</p>
            <p>Trên hành trình tìm kiếm sách, chính anh đôi khi cũng gặp phải những khó khăn khi muốn tìm một cuốn sách thật sự phù hợp với nhu cầu hay sở thích riêng của mình. Từ những trải nghiệm ấy, anh đã quyết định tạo nên Ngôi Nhà Sách, một nơi giúp tất cả những người yêu sách dễ dàng tìm kiếm và khám phá những tựa sách thực sự phù hợp, thậm chí trước cả khi họ nhận ra mình sẽ cần đến chúng.</p>
            <p>Với sự hỗ trợ của trí tuệ nhân tạo (AI), việc tìm kiếm sách trên website sẽ không chỉ đơn giản mà còn mang đến một trải nghiệm hoàn toàn khác biệt, sâu sắc và đầy cảm hứng.</p>
            <p><strong>Ngôi Nhà Sách</strong> ra đời với mong muốn trở thành nơi chào đón những tâm hồn yêu tri thức, nơi mỗi người đọc đều cảm thấy như trở về một không gian yên bình, thoải mái khám phá và tìm kiếm. Đặc biệt, website còn hỗ trợ người dùng so sánh giá cả, xem đánh giá và tìm kiếm mức giá tốt nhất với sự trợ giá thêm từ chính Ngôi Nhà Sách, giúp việc sở hữu những cuốn sách yêu thích trở nên dễ dàng hơn bao giờ hết.</p>
            <p className="text-sm italic">Chúng tôi luôn trân trọng và mong nhận được những góp ý, trao đổi từ các bạn qua email: <a href="mailto:ngoinhasachvn@gmail.com" className="text-blue-600 underline">ngoinhasachvn@gmail.com</a></p>
          </div>
        </div>
      </div>
    </>
  );
}
