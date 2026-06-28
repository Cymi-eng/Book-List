import BookItem from "./BookItem";

function BookList({ books }) {
  if (books.length === 0) {
    return <h2>No books found.</h2>;
  }

  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookItem
          key={book.key}
          book={book}
        />
      ))}
    </div>
  );
}

export default BookList;