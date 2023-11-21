import React, { useState } from 'react'
import { TaskContainer } from '../components/TaskContainer'
import ResponsiveAppBar from '../components/Appbar'
import MultipleSelectCheckmarks from '../components/MultipleSelectCheckmarks'
import { projects, names, taskContainersInfo} from '../helpers/projectsJson'
import BasicSelect from '../components/BasicSelect'
import InfoIcon from '@mui/icons-material/Info';
import TaskAlert from '../components/TaskAlert'

export const Dashboard = () => {
  const [selectedProjects, setSelectedProjects] = useState([])

  const handleProjectChange = (selectedProjects) => {
    setSelectedProjects(selectedProjects)
  }

  return (
    <div className='bg-dark h-full'>
            <ResponsiveAppBar />
            <div className='flex justify-start ml-7'>
                <MultipleSelectCheckmarks title={'PROYECTO'} names={projects} onChange={handleProjectChange}/>
                <MultipleSelectCheckmarks title={'PARTICIPANTE'} names={names}/>
                <BasicSelect title={'ORDENAR POR'}></BasicSelect>
            </div>
            {selectedProjects.length > 0 ? null : (
            <div className='flex justify-center'>
              <TaskAlert type={'general'} />
            </div>
            )}
            <div className='flex flex-wrap justify-evenly font-mono h-82 text-primaryText pb-16'>
                {taskContainersInfo.map((taskContainerInfo) => (
                <TaskContainer key={taskContainerInfo.title} title={taskContainerInfo.title} position={taskContainerInfo.position} projects={selectedProjects}/>
                ))}
            </div>
        <div className='text-center pt-8 pb-4 text-primary'>© Copyright 2023 by Artfos</div>
    </div>

  )
}