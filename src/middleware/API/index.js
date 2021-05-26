const axios = require('axios')

export default {
    get: options => {
        return axios.get(`http://localhost:4000/${options.entity}`)
            .then( response => {
                console.log(response)
                return response.data.result
            })
            .catch(error => {
                console.error(error);
            })
    },
    post: options => {
            return axios.post(`http://localhost:4000/${options.entity}`, {employees: options.employees})
                .then((response) => {
                    return response.data.result
                })
        },
    remove: options => {
        return axios.delete(`http://localhost:4000/${options.entity}/${options.employeeId}`)
            .then((response) => {
                return response.data
            })
    },
    update: options => {
        return axios.put(`http://localhost:4000/${options.entity}/${options.employeeId}`, {employee:options.employee})
            .then((response) => {
                return response.data
            })
    },
    selectById: options => {
        return axios.get(`http://localhost:4000/${options.entity}/${options.employeeId}`)
            .then((response) => {
                return response.data
            })
    },
}
