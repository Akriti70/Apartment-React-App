
import { useParams } from "react-router-dom";

export default function ApartmentDetail() {
  const { id } = useParams();

  return (
    <div className="bg-white shadow rounded p-6">
      <h1 className="text-2xl font-bold mb-4">Apartment Detail</h1>
      <p className="text-gray-700">Showing details for apartment ID: <strong>{id}</strong></p>
      {/* Apartment details can be populated  */}
    </div>
  );
}
