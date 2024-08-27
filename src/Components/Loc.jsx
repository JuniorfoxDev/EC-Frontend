import React, { useEffect, useState } from 'react';

const Loc = () => {
  const [currentDiv, setCurrentDiv] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    // Adjust itemsPerPage based on screen size
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 640) { // Mobile devices (sm and below)
        setItemsPerPage(1);
      } else {
        setItemsPerPage(4);
      }
    };

    // Initial check
    updateItemsPerPage();

    // Add event listener for window resize
    window.addEventListener('resize', updateItemsPerPage);

    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  const handleNext = () => {
    setCurrentDiv((prev) => (prev < 4 ? prev + 1 : 1));
  };

  const handlePrev = () => {
    setCurrentDiv((prev) => (prev > 1 ? prev - 1 : 4));
  };

  return (
    <div className='h-[400px] flex items-center justify-center gap-5'>
      {itemsPerPage === 1 ? (
        <div className='relative'>
          <div className={`bg-no-repeat bg-cover w-[250px] h-[350px] ${currentDiv === 1 ? 'bg-loca-1' : ''}`} style={{ display: currentDiv === 1 ? 'block' : 'none' }}></div>
          <div className={`bg-no-repeat bg-cover w-[250px] h-[350px] ${currentDiv === 2 ? 'bg-loca-2' : ''}`} style={{ display: currentDiv === 2 ? 'block' : 'none' }}></div>
          <div className={`bg-no-repeat bg-cover w-[250px] h-[350px] ${currentDiv === 3 ? 'bg-loca-3' : ''}`} style={{ display: currentDiv === 3 ? 'block' : 'none' }}></div>
          <div className={`bg-no-repeat bg-cover w-[250px] h-[350px] ${currentDiv === 4 ? 'bg-loca-4' : ''}`} style={{ display: currentDiv === 4 ? 'block' : 'none' }}></div>

          <div className='flex justify-between mt-4'>
            <button className='px-4 py-2 bg-black text-white rounded-full' onClick={handlePrev}></button>
            <button className='px-4 py-2 bg-black text-white rounded-full' onClick={handleNext}></button>
          </div>
        </div>
      ) : (
        <>
          <div className='bg-no-repeat bg-cover bg-loca-1 w-[250px] h-[350px]'></div>
          <div className='bg-no-repeat bg-cover bg-loca-2 w-[250px] h-[350px]'></div>
          <div className='bg-no-repeat bg-cover bg-loca-3 w-[250px] h-[350px]'></div>
          <div className='bg-no-repeat bg-cover bg-loca-4 w-[250px] h-[350px]'></div>
        </>
      )}
    </div>
  );
};

export default Loc;
