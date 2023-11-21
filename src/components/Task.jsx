import React from 'react';
import { AssignedToContainer } from './AssignedToContainer';

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
      <div className='row-span-5 pt-1 m-auto'><AssignedToContainer /></div>
      <div className='col-span-2 pt-3 font-bold'>{name}</div>
      <div className='col-span-2 pt-1 text-[#AB92BF]' style={textStyle}>{projectName}</div>
      <div className='col-span-2 pt-[0.5rem] rounded-md w-24 text-center font-bold' style={priorityBackground}>{priority.tag}</div>
      <div className='col-span-1 pt-2 mt-1'>Progreso: <span className='text-[#E6AF2E]'>50%</span></div>
      <div className='col-span-1 pt-2 mt-1'></div>
      <div className='col-span-1 pt-2 mt-1'></div>
      <div className='col-span-1 pt-2 pb-1 justify-self-end mr-4 cursor-pointer hover:border-primary border-dark border-b'>VER DETALLE</div>
    </div>
  );
};