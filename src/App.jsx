
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CreateApartment from "./pages/CreateApartment";
import ApartmentDetail from "./pages/ApartmentDetail";
import EditApartment from "./pages/EditApartment";
import Bookmarks from "./pages/Bookmarks";
import About from "./pages/About";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main content with Sidebar */}
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-4 bg-gray-50">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateApartment />} />
              <Route path="/apartments/:id" element={<ApartmentDetail />} />
              <Route path="/edit/:id" element={<EditApartment />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
