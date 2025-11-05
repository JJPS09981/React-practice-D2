import "../css/ImageList.css";
import ImageShow from "./ImageShow.js";

function ImageList({ images }) {
  const renderImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="image-list">{renderImages}</div>;
}

export default ImageList;
