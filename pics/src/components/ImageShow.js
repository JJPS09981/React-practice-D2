function ImageShow({ image }) {
  return (
    <div className="grid grid-cols-5 gap-4">
      <img
        className="w-full h-48 object-cover rounded-lg"
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}
export default ImageShow;
