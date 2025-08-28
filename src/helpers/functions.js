
export const filterByAvailability = (apartments, status) => {
  return apartments.filter((apartment) => apartment.availability === status);
};

export const sortByPrice = (apartments, order = 'asc') => {
  return apartments.sort((a, b) =>
    order === 'asc' ? a.price - b.price : b.price - a.price
  );
};

export const findApartmentById = (apartments, id) => {
  return apartments.find((apartment) => apartment.id === id);
};

export const getBookmarked = (apartments) => {
  return apartments.filter((apartment) => apartment.isBookmarked);
};

// Adding apartment
export const addApartment = (apartments, newApartment, setApartments) => {
  const updated = [...apartments, newApartment];
  setApartments(updated);
  localStorage.setItem('apartments', JSON.stringify(updated));
};

// Delete apartment
export const deleteApartment = (apartments, id, setApartments) => {
  const updated = apartments.filter((a) => a.id !== id);
  setApartments(updated);
  localStorage.setItem('apartments', JSON.stringify(updated));
};

// updated apartment
export const updateApartment = (
  apartments,
  updatedApartment,
  setApartments
) => {
  const updated = apartments.map((a) =>
    a.id === updatedApartment.id ? updatedApartment : a
  );
  setApartments(updated);
  localStorage.setItem('apartments', JSON.stringify(updated));
};
// Bookmark toggle
export const toggleBookmark = (apartments, id, setApartments) => {
  const updated = apartments.map((a) =>
    a.id === id ? {...a, isBookmarked: !a.isBookmarked} : a
  );
  setApartments(updated);
  localStorage.setItem('apartments', JSON.stringify(updated));
};
