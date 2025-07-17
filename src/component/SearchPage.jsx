import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!country.trim()) {
      setError("Please enter a country name");
      return;
    }
    if (country.trim()) {
      navigate(`/country/${country.trim()}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center "
      style={{ minHeight: "100vh" }}
    >
      <div className="card shadow p-4 w-100" style={{ maxWidth: "500px" }}>
        <h2 className="text-center mb-4 text-info"> Country Info Finder</h2>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter country name..."
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button className="btn btn-primary w-100" onClick={handleSearch}>
          Search
        </button>

        {error && (
          <div
            className="alert alert-danger text-center mt-3 fw-semibold" 
            style={{
              borderRadius: "10px",
              fontSize: "1rem",
              backgroundColor: "#ffe5e5",
              border: "1px solid #f5c2c7",
              color: "#b02a37",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
