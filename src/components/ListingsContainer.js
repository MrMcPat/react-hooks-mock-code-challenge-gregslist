import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDelete}) {

  const listingCard = listings.map(listing => {
    return <ListingCard key={listing.id} listing={listing} onDelete={onDelete}/>
  })

  return (
    <main>
      <ul className="cards">
        {listingCard}
      </ul>
    </main>
  );
}

export default ListingsContainer;
