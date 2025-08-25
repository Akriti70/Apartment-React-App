import apartmentsDataList from './apartments.json';

function ApartmentsList() {
  return (
    <div className="Apartment-list-container">
      <h2>Properties For Rent</h2>
      {apartmentsDataList.map((Apartment) => {
        return (
          <div key={Apartment.id} className="Apartment-box">
            
            <div className="Apartment-images-gallery">
              {Apartment.images.map((img, imgIndex) => (
                <img
                  key={`${Apartment.title}-${imgIndex}`}
                  src={img}
                  alt={`${Apartment.title}--${imgIndex}`}
                />
                
              ))}
            </div>
            <div className='properties-description'>
            <h3>{Apartment.title}</h3>
            <p>{Apartment.location}</p>
            <p>Price:{Apartment.price}</p>

            <p>Availability:{Apartment.availability}</p>
            <p>Bookmark{Apartment.isBookmarked}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ApartmentsList;
