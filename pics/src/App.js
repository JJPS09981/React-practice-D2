import SearchBar from "./components/SearchBar.js";
import searchImages from "./utils/api.js";
import ImageList from "./components/ImageList.js";
import ImageShow from "./components/ImageShow.js";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);

    setImages(result);
  };

  return (
    <div>
      <div>
        <h1 className="text-7xl font-bold bg-blue-200 ">圖片搜尋器</h1>
        <SearchBar onSubmit={handleSubmit} />
        <ImageList images={images} />
      </div>
    </div>
  );
}
export default App;
