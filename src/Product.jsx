import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Product.css";

function Product() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const filterToggle = (e) => {
    e.preventDefault();
    setShowFilter(!showFilter);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <div className="filter-strip">
        <a href="//" onClick={filterToggle}>
          {showFilter ? "Hide Filter" : "Show Filter"}
        </a>
        <h4>Recommended</h4>
      </div>
      {showFilter && (
        <div className="filter">
          <h3>Ideal For</h3>
          <select value={filter} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="men">Men</option>
            <option value="women">Women's Clothing</option>
            <option value="baby and kids">Baby & Kids</option>
          </select>
        </div>
      )}

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="products">
          {data.map((item) => (
            <div key={item.id} className="prodList">
              <div>
                <img src={item.image} alt={item.title} />
              </div>

              <div className="card-description">
                <h6>{item.title}</h6>
                <h6>{`Category: ${item.category}`}</h6>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Product;
