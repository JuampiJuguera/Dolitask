import React from 'react';
import photo from '../assets/example.png';
import photo2 from '../assets/example2.png';
import photo3 from '../assets/example3.png';
import photo4 from '../assets/example4.png';

export const AssignedToContainer = () => {
  return (
    <div className='grid grid-cols-4 grid-rows-2 gap-4 pb-1'>
      <div className='col-span-2 mr-3 row-span-2'>
        <img src={photo} title='Juan Pablo Juguera' className='w-10 h-10 rounded-full' alt='example' />
      </div>
      <div className='col-span-2 row-span-2'>
        <img src={photo2} title='Carlos Valicenti' className='w-10 h-10 rounded-full' alt='example' />
      </div>
      <div className='col-span-2 row-span-2'>
        <img src={photo3} title='Federico Merino' className='w-10 h-10 rounded-full' alt='example' />
      </div>
      <div className='col-span-2 row-span-2'>
        <img src={photo4} title='Mariano Mandado' className='w-10 h-10 rounded-full' alt='example' />
      </div>
    </div>
  );
};
