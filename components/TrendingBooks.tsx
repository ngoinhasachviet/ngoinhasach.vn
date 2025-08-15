import BookCard from './BookCard';

export default function TrendingBooks({ books }) {
  return (
    <section className="px-4">
      <h2 className="text-2xl font-semibold text-primary-green mb-6">Top Trending</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {books.map(b => <BookCard key={b.id} book={b} />)}
      </div>
    </section>
  );
}
