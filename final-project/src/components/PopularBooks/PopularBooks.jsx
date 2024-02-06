// Import PopularBooks Css......................
import './PopularBooks.css';

// Import Title Props..........................
import TitileTypeOne from '../UI/TititleTypeOne/TititleTypeOne';

// Import popularbooks Books Data................
import { galleryData } from '../../data/dataBookStore';

// Import useState.........................
import { useState } from 'react';

function PopularBooks() {
  // Active button function
  const [activeButton, setactiveButton] = useState('all');

  const handFilterChange = (category) => {
    setactiveButton(category);
  };

  // Filter Gallery function
  const filterItems =
    activeButton == 'all'
      ? galleryData
      : galleryData.filter((item) => item.category === activeButton);

  return (
    <section className="PopularBooks">
      <div className="container popularbooks-container">
        <TitileTypeOne
          TitleTop={'Some quality items'}
          Title={'Popular Books'}
          className={'popularbooks-title'}
        />

        {/*...............Filter Tab Button............... */}
        <div className="filter-buttons">
          <button
            className={activeButton === 'all' ? 'active' : ''}
            onClick={() => handFilterChange('all')}
          >
            All
          </button>
          <button
            className={activeButton === 'Business' ? 'active' : ''}
            onClick={() => handFilterChange('Business')}
          >
            Business
          </button>
          <button
            className={activeButton === 'Technology' ? 'active' : ''}
            onClick={() => handFilterChange('Technology')}
          >
            Technology
          </button>
          <button
            className={activeButton === 'Adventure' ? 'active' : ''}
            onClick={() => handFilterChange('Adventure')}
          >
            Adventure
          </button>
          <button
            className={activeButton === 'Romantic' ? 'active' : ''}
            onClick={() => handFilterChange('Romantic')}
          >
            Romantic
          </button>
          <button
            className={activeButton === 'Fictional' ? 'active' : ''}
            onClick={() => handFilterChange('Fictional')}
          >
            Fictional
          </button>
        </div>

        {/*...............Filter Books Content ............... */}
        <div className="gallery">
          {filterItems.map(({ name, writer, price, image }, index) => {
            return (
              <div className="galery-item" key={index}>
                <div className="popularbook-image">
                  <img src={image} alt="" />
                </div>
                <div className="popularbook-info">
                  <h4>{name}</h4>
                  <div>
                    <small>{writer}</small>
                  </div>
                  <h5>
                    <span>{price}</span>
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PopularBooks;
