// NoTasksAlert.jsx
import React from 'react';
import InfoIcon from '@mui/icons-material/Info';

const TaskAlert = ({ title, type }) => {
  let containerStyle, iconStyle, messageStyle;

  // Determinar estilos según el tipo
  if (type === 'vertical') {
    containerStyle = 'text-secondary mt-5 bg-dark py-1 w-[95%] rounded-sm flex items-center';
    iconStyle = 'm-5';
    messageStyle = '';
  } else if (type === 'horizontal') {
    containerStyle = 'text-secondary text-center mt-5 bg-dark py-2 w-[98%] rounded-sm';
    iconStyle = '';
    messageStyle = '';
  } else {
    containerStyle = 'text-secondary text-center mt-5 bg-primary2 py-2 w-[95%] rounded-sm';
    iconStyle = '';
    messageStyle = '';
  }

  const noTasksMessage = title === 'Lista de Pendientes'
    ? 'No se encontraron tareas PENDIENTES para el/los proyectos seleccionados'
    : title === 'Para Hacer'
    ? 'No se encontraron tareas PARA HACER disponibles para el/los proyectos seleccionados'
    : title === 'En proceso'
    ? 'No se encontraron tareas EN PROCESO disponibles para el/los proyectos seleccionados'
    : title === 'Terminado'
    ? 'No se encontraron tareas TERMINADAS para el/los proyectos seleccionados'
    : 'Selecciona un proyecto para comenzar a visualizar sus tareas';

  return (
    <div className={containerStyle}>
      <InfoIcon className={iconStyle} /> <span className={messageStyle}>{noTasksMessage}</span>
    </div>
  );
};

export default TaskAlert;
