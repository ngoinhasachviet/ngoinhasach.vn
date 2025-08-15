import { useState } from 'react';

export default function BookCard({ book }) {
  const [liked, setLiked] = useState(false);
  return (
    <div className="relative bg-white rounded-xl shadow-card overflow-hidden group hover:scale-105 transform transition">
      <img src={book.cover} alt={book.title} className="w-full h-48 object-cover" />

      <button
        onClick={() => setLiked(!liked)}
        className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md"
      >
        {liked ? '❤️' : '🤍'}
      </button>

      <div className="tooltip">
        Sách liên quan:
        <ul className="mt-1 list-disc list-inside">
          {book.related.map(r => <li key={r.id}>{r.title}</li>)}
        </ul>
      </div>

      <div className="p-4 flex flex-col justify-between space-y-2">
        <h3 className="font-semibold text-text-dark">{book.title}</h3>
        <p className="text-gray-600 text-sm">{book.author}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-400 line-through mr-2">₫{book.originalPrice}</span>
            <span className="font-bold text-primary-green">₫{book.salePrice}</span>
          </div>
          <button className="px-3 py-1 bg-accent-yellow rounded-lg hover:bg-yellow-300 flex items-center space-x-1">
            <img src={`/icons/${book.vendor}.png`} alt="vendor" className="h-4" />
            <span>Mua</span>
          </button>
        </div>
        <div className="flex items-center text-sm text-yellow-500">
          {'⭐'.repeat(book.rating)} <span className="ml-1 text-gray-500">({book.reviews})</span>
        </div>
      </div>
    </div>
  );
}
