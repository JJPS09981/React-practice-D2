import { useState } from "react";
import BookCreat from "./components/BookCreat.js";
import BookList from "./components/BookList.js";

function App() {
  const [books, setBooks] = useState([]);

  const editBookById = function (id, newTitle) {
    const updateBooks = books.map((book) => {
      if (book.id === id) return { ...book, title: newTitle };
      return book;
    });

    setBooks(updateBooks);
  };

  const deleteBookById = (id) => {
    const updateBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updateBooks);
  };

  function secureRandomString(length = 12) {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const array = new Uint32Array(length);
    crypto.getRandomValues(array); // 更隨機、更安全
    return Array.from(array, (x) => chars[x % chars.length]).join("");
  }

  const handleCreatBook = (title) => {
    const updateBooks = [
      ...books,
      { id: secureRandomString(20), title: title },
    ];

    if (title !== "") setBooks(updateBooks);
    console.log(updateBooks);
  };

  return (
    <div className="app">
      <h1>書籍清單</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreat onSubmit={handleCreatBook} />
    </div>
  );
}
export default App;
