function PhotoCard({ photo, className = "" }) {
  return (
    <div className={`photo-card ${className}`}>
      <img src={photo.url} alt={photo.title || "Salon photo"} />

      <div className="photo-overlay"></div>

      {photo.title && (
        <div className="photo-info">
          <h3>{photo.title}</h3>
        </div>
      )}
    </div>
  );
}

export default PhotoCard;