
import React from "react";
import "../index.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <button onClick={() => window.location.href = "/"} className="back-btn">
        Go to Home
      </button>
    </div>
  );
}
