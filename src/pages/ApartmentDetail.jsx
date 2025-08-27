
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apartmentsDataList from "../components/apartments.json"; // Agar aap JSON se fetch karna chahte ho
import "../index.css";

export default function ApartmentDetail() {
  const { id } = useParams(); // URL se id lete hain
  const navigate = useNavigate();

  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    // localStorage me saved apartments check karo
    const stored = localStorage.getItem("apartments");
    const apartments = stored ? JSON.parse(stored) : apartmentsDataList;

    const found = apartments.find((apt) => apt.id === parseInt(id));
    setApartment(found);
  }, [id]);

  if (!apartment) {
    return <p>Loading...</p>;
  }

  return (
    <div className="apartment-detail-container">
      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        &larr; Back
      </button>

      <div className="apartment-detail-card">
        {/* Image */}
        <img
          src={apartment.images ? apartment.images[0] : apartment.imageURL}
          alt={apartment.title}
          className="apartment-detail-image"
        />

        {/* Content */}
        <div className="apartment-detail-content">
          <h2 className="apartment-title">{apartment.title}</h2>
          <p className="apartment-location">{apartment.location}</p>
          <p className="apartment-price">€{apartment.price}</p>

          {/* Status Badge */}
          <span
            className={`status-badge ${
              apartment.availability === "Available" || apartment.status === "available"
                ? "status-available"
                : "status-rented"
            }`}
          >
            {apartment.availability === "Available" || apartment.status === "available"
              ? "Available"
              : "Rented"}
          </span>

          {/* Description */}
          <p className="apartment-description">
            {apartment.description || "No description available for this apartment."}
          </p>
        </div>
      </div>
    </div>
  );
}
