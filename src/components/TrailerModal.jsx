import React from "react";
import "../css/TrailerModal.css";

export default function TrailerModal({ trailerUrl, onClose }) {
  if (!trailerUrl) return null; // nothing to show

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <iframe
          width="800"
          height="450"
          src={trailerUrl}
          title="Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
