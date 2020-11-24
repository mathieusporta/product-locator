import React, { useState } from "react";


const SearchBarSection = () => {
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    if (
      product.tags.toLowerCase().includes(search) ||
      product.title.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
    ) {
      return product;
    }
  });

  return (
    <div className="searchBarSection">
      <div className="searchBar">
        <input
          className="input"
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
        />
        <button className="button">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="display">
        {filteredProducts.map((product) => (
          <div className="product">
            <h6>{product.category}</h6>
            <h3>{product.title}</h3>
            <h5>{product.price}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBarSection;
