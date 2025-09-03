import BookCard from './BookCard';

export default function NewReleases({ books }) {
  return (
    <section className="mt-12 px-4">
      <h2 className="text-2xl font-bold text-primary-green mb-6 border-b pb-2">
        📚 Sách hay
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((b) => (
          <BookCard key={b.id} book={b} />
        ))}
      </div>
    </section>
  );
}
