import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CountryCard from "../component/CountryCard";

function CountryDetails() {
  const { name } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        if (!res.ok) throw new Error("Country not found");
        const result = await res.json();
        console.log(result);
        setData(result[0]);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchCountry();
  }, [name]);

  return (
    <div className="container mt-4">
      {loading && (
        <div className="text-center text-white">
          <div className="spinner-border text-white" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
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
      {data && <CountryCard data={data} />}
      <button
        className="btn btn-danger mb-4 d-block m-auto"
        onClick={() => navigate("/search")}
      >
        Back to Search
      </button>
    </div>
  );
}

export default CountryDetails;
