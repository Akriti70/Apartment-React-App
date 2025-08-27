
import React from "react";

export default function ApartmentCard({ id, title, location, price, imageURL, status }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "12px",
      textAlign: "center"
    }}>
      <img src={imageURL} alt={title} style={{ width: "100%", height: "180px", objectFit: "cover" }} />
      <h3>{title}</h3>
      <p>{location}</p>
      <p style={{ fontWeight: "bold", color: "#007bff" }}>${price}/month</p>
      <span>Status: {status}</span>
    </div>
  );
}
