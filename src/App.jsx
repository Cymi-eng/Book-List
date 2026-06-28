import { useState, useEffect } from "react";
import BookList from "./components/BookList";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("React");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchBooks = async () => {
    if (!search.trim()) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(search)}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }

      const data = await response.json();

      setBooks(data.docs.slice(0, 20));
    } catch (error) {
      setError("Failed to fetch books.");
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="container">
      <h1>📚 Book Finder</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              fetchBooks();
            }
          }}
        />

        <button onClick={fetchBooks}>Search</button>
      </div>

      {loading && <h2>Loading books...</h2>}

      {error && <h2 className="error">{error}</h2>}

      {!loading && !error && <BookList books={books} />}
    </div>
  );
}

export default App;