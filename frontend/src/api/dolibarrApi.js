import axios from 'axios'

export const dolibarrApi = axios.create({
    baseURL: '' // url constante de dolibar
})

/*
    export const getTasks = (page = 0) => {
        return async(dispatch, getState) => {
            dispatch(startLoadingTasks())
        }
        const response = await dolibarrApi.get(`/task?limit=10&offset=${page*10}`)

        dispatch( setTasks({tasks: data.results, page: page + 1}))
    }

*/