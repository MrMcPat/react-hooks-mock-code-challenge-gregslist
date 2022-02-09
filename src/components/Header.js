import React from "react";
import Search from "./Search";
import ListingsForm from "./ListingsForm";

function Header({onSearch, onSubmitListing, onSort}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={onSearch} />
      <ListingsForm onSubmitListing={onSubmitListing} onSort={onSort}/>
    </header>
  );
}

export default Header;
