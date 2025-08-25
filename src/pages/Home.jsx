import ApartmentsList from '../components/ApartmentsList';

export default function Home() {
  return (
    <div className="bg-white shadow rounded p-6">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <p className="text-gray-700">
        Welcome to the Apartments App! Browse available apartments and manage
        your listings.
      </p>
      <ApartmentsList />
    </div>
  );
}
