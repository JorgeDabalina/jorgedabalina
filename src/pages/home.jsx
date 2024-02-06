import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Home() {

  const [currentPicIndex, setCurrentPicIndex] = useState(0);
  const [matches, setMatches] = useState(window.matchMedia("(min-width: 768px)").matches);

  const images = [
    {
      src: '/images/entrelazada/entrelazada_1.jpg',
      alt: '',
      text: "Exploración Entrelazada (2021)",
      pathNav: '/projects/exploracionEntrelazada',
    },
    {
      src: '/images/delotrolado/delotrolado_featured.jpg',
      alt: '',
      text: "Del otro lado (2021)",
      pathNav: '/projects/delotrolado',
    },
  ];

  useEffect(() => {
    changeImageRandom();
    
    const handler = e => setMatches(e.matches);
    const matchMedia = window.matchMedia("(min-width: 768px)");

    matchMedia.addEventListener('change', handler);
    return () => matchMedia.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      changeImageNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentPicIndex]);

  function changeImageNext() {
    const nextPicIndex = (currentPicIndex + 1) % (images.length);
    setCurrentPicIndex(nextPicIndex);
  }

  function changeImageRandom() {
    const picRandom = Math.floor(Math.random() * (images.length));
    setCurrentPicIndex(picRandom);
  }

  return (
    <section className='container text-left px-0 overflow-hidden'>
      <div className={`home-content row ${matches ? 'row-cols-1' : 'row-cols-1 gy-4'}`}>
        <img className='proj-media-img w-100 img-fluid'
          src={images[currentPicIndex].src}
          alt={images[currentPicIndex].alt}
        />

        <div className='home-text w-100 pt-2'>
        <NavLink to={images[currentPicIndex].pathNav}>
          <p className='home-introduction text-end'>
            {images[currentPicIndex].text}
        
          </p>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Home;
