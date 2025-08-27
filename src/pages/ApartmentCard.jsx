
// import { FaRegStar, FaStar } from "react-icons/fa";
// import "../styles/App.css";

// export default function ApartmentCard({ title, location, price, imageURL, status, isBookmarked }) {
//   return (
//     <div className="apartment-card">
//       {/* Apartment Image */}
//       <img src={imageURL} alt={title} />

//       {/* Bookmark Button */}
//       <button className="bookmark-btn">
//         {isBookmarked ? (
//           <FaStar className="bookmark-active" />
//         ) : (
//           <FaRegStar className="bookmark-inactive" />
//         )}
//       </button>

//       <div className="apartment-card-content">
//         {/* Title */}
//         <h3 className="apartment-title">{title}</h3>

//         {/* Location */}
//         <p className="apartment-location">{location}</p>

//         {/* Price */}
//         <p className="apartment-price">${price}</p>

//         {/* Status Badge (Day 8) */}
//         <span
//           className={`status-badge ${
//             status === "available" ? "status-available" : "status-rented"
//           }`}
//         >
//           {status === "available" ? "Available" : "Rented"}
//         </span>
//       </div>
//     </div>
//   );
// }
