function BookItem({ book }) {
  const coverImage = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/200x300?text=No+Cover";

  return (
    <div className="card">
      <img src={coverImage} alt={book.title} />

      <div className="card-content">
        <h2>{book.title}</h2>

        <p>
          <strong>Author:</strong>{" "}
          {book.author_name
            ? book.author_name.join(", ")
            : "Unknown"}
        </p>

        <p>
          <strong>Published:</strong>{" "}
          {book.first_publish_year || "N/A"}
        </p>

        <p>
          <strong>Edition Count:</strong>{" "}
          {book.edition_count}
        </p>

        <p>
          <strong>Language:</strong>{" "}
          {book.language ? book.language[0] : "N/A"}
        </p>
      </div>
    </div>
  );
}

export default BookItem;