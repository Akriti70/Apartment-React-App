import { useState, useEffect } from "react";
import apartmentsDataList from "./apartments.json";

export default function ApartmentsList() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("apartments");
    if (stored) {
      setApartments(JSON.parse(stored));
    } else {
      setApartments(apartmentsDataList);
    }
  }, []);

  const toggleBookmark = (id) => {
    const updated = apartments.map((ap) =>
      ap.id === id ? { ...ap, isBookmarked: !ap.isBookmarked } : ap
    );
    setApartments(updated);
    localStorage.setItem("apartments", JSON.stringify(updated));
  };

  return (
    <div className="Apartment-list-container">
      {apartments.map((apartment) => (
        <div key={apartment.id} className="Apartment-box">
          <img src={apartment.images[0]} alt={apartment.title} />
          <div className="properties-description">
            <h3>{apartment.title}</h3>
            <p>{apartment.location}</p>
            <p>Price: €{apartment.price}</p>
            <p>{apartment.availability}</p>
            <button onClick={() => toggleBookmark(apartment.id)}>
              {apartment.isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
