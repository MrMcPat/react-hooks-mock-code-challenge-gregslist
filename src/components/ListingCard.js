import React, {useState} from "react";

function ListingCard({listing, onDelete}) {
  const [isFavorite, setIsFavorite] = useState(false)

  function handleFavClick() {
    setIsFavorite(isFavorite => !isFavorite)
  }

  function handleDelClick() {
    onDelete(listing.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={handleFavClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavClick}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDelClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
