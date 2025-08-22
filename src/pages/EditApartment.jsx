
import { useParams } from "react-router-dom";

export default function EditApartment() {
  const { id } = useParams();

  return (
    <div className="bg-white shadow rounded p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Apartment</h1>
      <p className="text-gray-700">Edit the apartment with ID: <strong>{id}</strong></p>
      {/* Form fields to edit apartment can be added here */}
    </div>
  );
}
