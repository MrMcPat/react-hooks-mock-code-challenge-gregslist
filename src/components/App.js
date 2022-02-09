import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")
  const [isSorted, setIsSorted] = useState("Unsorted")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(data => setListings(data))
  }, [])

  function handleDelete(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then(resp => resp.json())
    .then(() => {
      const updatedListings = listings.filter(listing => {
        return listing.id !== id
      })
      setListings(updatedListings)
    })
  }

  function handleSearch (newSearch) {
    setSearch(newSearch)
  }

  function handleSubmitListing(newListing) {
    setListings([...listings, newListing])
  }

  function handleSort(sort) {
    setIsSorted(sort)
  }

  const filteredListings = listings.filter(listing => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })

  if(isSorted === "Sort By Location") {
    filteredListings.sort((listing1, listing2) => {
      if(listing1.location < listing2.location) {return -1}
      if(listing1.location > listing2.location) {return 1}
      return 0;
    })
  } else if (isSorted === "Sort By Description") {
    filteredListings.sort((listing1, listing2) => {
      if(listing1.description < listing2.description) {return -1}
      if(listing1.description > listing2.description) {return 1}
      return 0;
    })
  }


  
  return (
    <div className="app">
      <Header onSearch={handleSearch} onSubmitListing={handleSubmitListing} onSort={handleSort}/>
      <ListingsContainer listings={filteredListings} onDelete={handleDelete}/>
    </div>
  );
}

export default App;
