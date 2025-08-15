export default function Banner() {
  return (
    <div className="relative mt-14">
      <img src="/images/banner.png" alt="Gia đình đọc sách"
           className="w-full max-w-[1920px] h-[185px] object-cover rounded-xl shadow-card" />
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-200/30 via-transparent to-transparent rounded-xl pointer-events-none" />
      
    </div>
  );
}
