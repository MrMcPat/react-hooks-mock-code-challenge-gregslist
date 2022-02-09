import React, {useState} from 'react'

function ListingsForm({onSubmitListing, onSort}) {
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [location, setLocation] = useState("")

    function handleOnChange(e) {
        onSort(e.target.value)
    }

    function handleSubmit (e) {
        e.preventDefault();
        fetch("http://localhost:6001/listings", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                description: description,
                image: image,
                location: location,
            })
        })
        .then(resp => resp.json())
        .then(newListing => onSubmitListing(newListing))
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)}/>
            <input type="text" placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)}/>
            <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
        <select onChange={handleOnChange}>
            <option value="Unsorted">Unsorted</option>
            <option value="Sort By Location">Sort By Location</option>
            <option value="Sort By Description">Sort By Description</option>
        </select>
    </div>
  )
}

export default ListingsForm