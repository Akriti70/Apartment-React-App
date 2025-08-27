
import React, { useState, useEffect } from "react";
import "../index.css"; // अपने project की main CSS

export default function EditApartment({ apartment }) {
  // Props में apartment object आएगा (title, location, price, imageURL, status)
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    imageURL: "",
    status: "available",
  });

  useEffect(() => {
    if (apartment) {
      setFormData({
        title: apartment.title || "",
        location: apartment.location || "",
        price: apartment.price || "",
        imageURL: apartment.imageURL || "",
        status: apartment.status || "available",
      });
    }
  }, [apartment]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert("");
  };

  return (
    <div className="create-apartment-container">
      <h2>Edit Apartment</h2>
      <form className="apartment-form" onSubmit={handleSubmit}>
        <label>
          Title*
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
            required
          />
        </label>

        <label>
          Location*
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter location"
            required
          />
        </label>

        <label>
          Price*
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter price"
            required
          />
        </label>

        <label>
          Image URL
          <input
            type="text"
            name="imageURL"
            value={formData.imageURL}
            onChange={handleChange}
            placeholder="Enter image URL"
          />
        </label>

        <label>
          Availability
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="available">Available</option>
            <option value="rented">Rented</option>
          </select>
        </label>

        <div className="form-buttons">
          <button type="submit" className="submit-btn">
            Update Apartment
          </button>
          <button
            type="button"
            className="cancel-btn"
            onClick={() => window.history.back()}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

