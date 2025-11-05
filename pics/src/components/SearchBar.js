import { useState } from "react";
import "../css/SearchBar.css";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  const handleChange = function (e) {
    setTerm(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          className="searchInput bg-gray-50 border border-gray-300 text-gray-900 rounded mt-3"
          value={term}
          type="text"
          placeholder="請輸入想搜尋的東西"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
export default SearchBar;
