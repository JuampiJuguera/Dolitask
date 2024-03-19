const taskContainersInfo = [
    {
        title: 'Para Hacer',
        position: 'vertical'
    },
    {
        title: 'En proceso',
        position: 'vertical'
    },
    {
        title: 'Terminado',
        position: 'vertical'
    },
    {
        title: 'Lista de Pendientes',
        position: 'horizontal'
    }
]

const tasks1 = [
    {
        task: 'TASK-0001',
        ticket: 'TS2305-0049',
        name: 'FIX CSV NO EXPORTA',
        priority: {tag:'URGENTE', color: '#F71735'},
        startDate: '11/07/2023',
        status: 'Para Hacer'
    },
    {
        task: 'TASK-0002',
        ticket: 'TS2305-0050',
        name: 'FIX MAIL ROTO',
        priority: {tag:'BAJA', color: '#62A87C'},
        startDate: '11/08/2023',
        status: 'En proceso'
    },
    {
        task: 'TASK-0003',
        ticket: 'TS2305-0049',
        name: 'FIX REQUEST LENTA',
        priority: {tag:'MEDIA', color: '#E6AF2E'},
        startDate: '13/07/2023',
        status: 'En proceso'
    },
    {
        task: 'TASK-0004',
        ticket: 'TS2305-0049',
        name: 'FIX COMPULSAS NO CARGAN', 
        priority: {tag:'ALTA', color: '#D36135'},
        startDate: '15/07/2023',
        status: 'Terminado'
    },
    {
        task: 'TASK-0005',
        ticket: 'TS2305-0049',
        name: 'IMPLEMENTAR MOBILE',
        priority: {tag:'ALTA', color: '#D36135'},
        startDate: '19/07/2023',
        status: 'Terminado'
    },
    {
        task: 'TASK-0006',
        ticket: 'TS2305-0049',
        name: 'IMPLEMENTAR RECUPERAR PW',
        priority: {tag:'BAJA', color: '#62A87C'},
        startDate: '20/07/2023',
        status: 'Terminado'
    },
]

const tasks2 = [
    {
        task: 'TASK-0007',
        ticket: 'TS2305-0049',
        name: 'FIX OCEBA FACTURACION',
        priority: {tag:'BAJA', color: '#62A87C'},
        startDate: '11/07/2023',
        status: 'Para Hacer'
    },
    {
        task: 'TASK-0008',
        ticket: 'TS2305-0050',
        name: 'FIX VALIDACIONES ROTAS',
        priority: {tag:'BAJA', color: '#62A87C'},
        startDate: '11/08/2023',
        status: 'Terminado'
    },
    {
        task: 'TASK-0009',
        ticket: 'TS2305-0049',
        name: 'IMPLEMENTAR VALIDACION',
        priority: {tag:'MEDIA', color: '#E6AF2E'},
        startDate: '13/07/2023',
        status: 'En proceso'
    },
    {
        task: 'TASK-0010',
        ticket: 'TS2305-0049',
        name: 'IMPLEMENTAR VALIDACION',
        priority: {tag:'MEDIA', color: '#E6AF2E'},
        startDate: '13/07/2023',
        status: 'Lista de Pendientes'
    },
    {
        task: 'TASK-0011',
        ticket: 'TS2305-0049',
        name: 'IMPLEMENTAR VALIDACION',
        priority: {tag:'MEDIA', color: '#E6AF2E'},
        startDate: '13/07/2023',
        status: 'Lista de Pendientes'
    },
    {
        task: 'TASK-0012',
        ticket: 'TS2305-0049',
        name: 'IMPLEMENTAR VALIDACION',
        priority: {tag:'MEDIA', color: '#E6AF2E'},
        startDate: '13/07/2023',
        status: 'Lista de Pendientes'
    },
    {
        task: 'TASK-0013',
        ticket: 'TS2305-0049',
        name: 'IMPLEMENTAR VALIDACION',
        priority: {tag:'MEDIA', color: '#E6AF2E'},
        startDate: '13/07/2023',
        status: 'Lista de Pendientes'
    },
    {
        task: 'TASK-0014',
        ticket: 'TS2305-0049',
        name: 'IMPLEMENTAR VALIDACION',
        priority: {tag:'MEDIA', color: '#E6AF2E'},
        startDate: '13/07/2023',
        status: 'Lista de Pendientes'
    },
    {
        task: 'TASK-0015',
        ticket: 'TS2305-0049',
        name: 'IMPLEMENTAR VALIDACION',
        priority: {tag:'MEDIA', color: '#E6AF2E'},
        startDate: '13/07/2023',
        status: 'Lista de Pendientes'
    },
    {
        task: 'TASK-0016',
        ticket: 'TS2305-0049',
        name: 'IMPLEMENTAR VALIDACION',
        priority: {tag:'MEDIA', color: '#E6AF2E'},
        startDate: '13/07/2023',
        status: 'Lista de Pendientes'
    },
    {
        task: 'TASK-0018',
        ticket: 'TS2305-0049',
        name: 'IMPLEMENTAR VALIDACION',
        priority: {tag:'MEDIA', color: '#E6AF2E'},
        startDate: '13/07/2023',
        status: 'Lista de Pendientes'
    },
]


const projects = 
[
    {'name': 'SF_DEMO_PORTAL', color:'#379392'},
    {'name': '37_Albanesi Portal', color:'#50C9CE', tasks: tasks1},
    {'name': 'Lea Risk Workflow', color:'#419D78'},
    {'name': '31-602-OCEBA', color:'#AB92BF', tasks: tasks2},
]

const names = 
[
    {'name': 'Juan Pablo Juguera', color:'#1f2937'},
    {'name': 'Carlos Valicenti', color:'#1f2937'},
    {'name': 'Mariano Mandado', color:'#1f2937'},
    {'name': 'Federico Merino', color:'#1f2937'},
    {'name': 'Marcelo Contreras', color:'#1f2937'},
]

export {projects, names, taskContainersInfo}