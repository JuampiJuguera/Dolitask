import React from 'react';

export const Task = ({ task, ticket, name, priority, startDate, projectColor, projectName }) => {
  const textStyle = {
    color: projectColor || '#AB92BF',
  };
  const priorityBackground = {
    backgroundColor: priority.color || '#AB92BF',
  };

  return (
    <div className='w-11/12 bg-dark col-span-3 mt-5 rounded-md grid grid-cols-3 grid-rows-5 pt-1'>
      <div className='border-b border-primary2 col-span-2 rounded-t-xl text-left pl-4 font-bold pt-1' style={textStyle}>{task} - {ticket}</div>
      <div className='border-b border-primary2 rounded-t-xl text-left pt-1 mr-4 justify-self-end' style={textStyle}>{startDate}</div>
      <div className='row-span-4 pt-1 m-auto'>FOTO/FOTOS</div>
      <div className='col-span-2 pt-2' style={textStyle}>{name}</div>
      <div className='col-span-2 pt-1 text-[#AB92BF] font-bold' style={textStyle}>{projectName}</div>
      <div className='col-span-2 pt-[0.3rem] rounded-md w-24 text-center font-bold' style={priorityBackground}>{priority.tag}</div>
      <div className='col-span-1 pt-1 mt-1'>03:00</div>
      <div className='col-span-1 pt-1 pb-1 justify-self-end mr-4 cursor-pointer hover:border-primary border-dark border-b'>VER DETALLE</div>
    </div>
  );
};