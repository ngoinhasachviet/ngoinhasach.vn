export default function ReviewSection() {
  return (
    <section className="w-full lg:w-1/3 order-1 lg:order-2 mb-6 lg:mb-0 px-4 mt-10 lg:mt-0">
      <h2 className="text-lg font-semibold mb-3 text-gray-700">Review sách</h2>
      <div className="grid gap-4">
        <div className="flex gap-4 bg-white rounded-xl shadow p-3 items-start">
          <img
            src="https://m.media-amazon.com/images/I/91bYsX41DVL.jpg"
            alt="Review 1"
            className="w-20 h-28 object-cover rounded-md shadow flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-medium break-words">Atomic Habits</h3>
            <p className="text-sm text-gray-600 break-words">
              Thói quen nhỏ - thay đổi lớn...
            </p>
          </div>
        </div>
        <div className="flex gap-4 bg-white rounded-xl shadow p-3 items-start">
          <img
            src="https://m.media-amazon.com/images/I/81s6DUyQCZL.jpg"
            alt="Review 2"
            className="w-20 h-28 object-cover rounded-md shadow flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-medium break-words">Ikigai</h3>
            <p className="text-sm text-gray-600 break-words">
              Bí mật sống lâu và hạnh phúc...
            </p>
          </div>
        </div>
        <div className="flex gap-4 bg-white rounded-xl shadow p-3 items-start">
          <img
            src="https://m.media-amazon.com/images/I/71tbalAHYCL.jpg"
            alt="Review 3"
            className="w-20 h-28 object-cover rounded-md shadow flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-medium break-words">Thinking, Fast and Slow</h3>
            <p className="text-sm text-gray-600 break-words">
              Cách bộ não vận hành khi ra quyết định...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
