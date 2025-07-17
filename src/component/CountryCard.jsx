import React from "react";
import "./CountryCards.css";

function CountryCard({ data }) {
  const {
    name,
    capital,
    population,
    region,
    flags,
    currencies,
    independent,
    area,
    continents,
    borders,
  } = data;

  const currencySymbol = currencies
    ? Object.values(currencies)[0]?.symbol
    : "N/A";

  return (
    <div className="card shadow-lg bg-light mb-4 fade-in-country-card">
      <img
        src={flags?.png}
        className="card-img-top p-3 d-inline "
        alt={`${name?.official} flag`}
        style={{ maxHeight: "250px", objectFit: "contain", maxWidth: "100%" }}
      />
      <div className="card-body">
        <h4 className="card-title text-center fs-2">
          <em> {name?.official}</em>
        </h4>
        <ul className="list-group list-group-flush mt-3">
          <li className="list-group-item">
            <strong>Capital:</strong> {capital?.[0]}
          </li>
          <li className="list-group-item">
            <strong>Population:</strong> {population.toLocaleString()}
          </li>
          <li className="list-group-item">
            <strong>Region:</strong> {region}
          </li>
          <li className="list-group-item">
            <strong>Currency Symbol:</strong> {currencySymbol}
          </li>
          <li className="list-group-item">
            <strong>Independent:</strong> {independent ? "Yes" : "No"}
          </li>
          <li className="list-group-item">
            <strong>Area:</strong> {area.toLocaleString()} km
          </li>
          <li className="list-group-item">
            <strong>Continents:</strong> {continents?.join(", ")}
          </li>
          <li className="list-group-item">
            <strong>Borders:</strong> {borders?.join(", ") || "None"}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CountryCard;
