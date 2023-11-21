import React from 'react';
import { Task } from './Task';
import InfoIcon from '@mui/icons-material/Info';
import TaskAlert from './TaskAlert';

export const TaskContainer = ({ title, position, projects }) => {
  let filteredTasks = [];

  filteredTasks = projects
    .filter(project => project.tasks)
    .map(project => project.tasks
    .filter(task => task.status === title))
    .flat();

  const getProjectColor = (task, projects) => {
    const project = projects.find(project => project.tasks && project.tasks.includes(task));
    return project ? project.color : '';
  };

  const getProjectName = (task, projects) => {
    const project = projects.find(project => project.tasks && project.tasks.includes(task));
    return project ? project.name : '';
  };

  console.log(projects)

  if (position === 'vertical') {
    return (
      <div className='rounded-md bg-primary2 w-[30%] h-3/5 mt-5 bg-dark shadow-xl pb-4'>
        <div>
          <h2 className='bg-light2 rounded-t-sm bg-primary h-12 text-center pt-[0.8rem] font-bold'>{title}</h2>
        </div>
        <div className='overflow-y-auto h-[95.6%] pb-4'>
          <div className='flex flex-col items-center'>
          {(filteredTasks.length > 0 || projects.length == 0) ? null : (
            <TaskAlert title={title} type={'vertical'} />
          )}
            {filteredTasks.map(task => (
              <Task key={task.task} {...task} projectColor={getProjectColor(task, projects)} projectName={getProjectName(task, projects)} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (position === 'horizontal') {
    return (
      <div className='bg-primary2 rounded-md w-[95%] h-2/5 mt-10 shadow xl bg-light2 pb-4'>
        <div>
          <h2 className='h-12 bg-primary rounded-t-sm border-secondary text-left pl-4 pt-3 font-bold'>{title}</h2>
        </div>
        <div className='overflow-y-auto h-[93.4%] pb-4'>
          <div className='flex justify-center'>
            {(filteredTasks.length > 0 || projects.length == 0) ? null : (
              <TaskAlert title={title} type={'horizontal'} />
            )}
          </div>
          <div className='grid grid-cols-9 place-items-center'>
            {filteredTasks.map(task => (
              <Task key={task.task} {...task} projectColor={getProjectColor(task, projects)} projectName={getProjectName(task, projects)}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
};
