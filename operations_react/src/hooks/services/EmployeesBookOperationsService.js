import axios from 'axios';

class EmployeesOperationsService{
    // nodejs rest api app
    url = 'http://localhost:5005/employees';

    getEmployeesBook() {
        return axios.get(this.url);
    }
    addEmployeeBook(employee) {
        console.log("Create Record", employee);
        return axios.post(this.url, employee)
    }
    updateEmployeeBook(employee) {
        let url = `${this.url}/${employee.id}`
        return axios.put(url, employee)
    }
    deleteEmployeeBook(id) {
        let url = `${this.url}/${id}`
        return axios.delete(url);
    }



    addEmployeeBookissue(employee){
        console.log("Create Fine Record", employee);
        return axios.post(this.url, employee)
    }
    getEmployeesBookissue() {
        return axios.get(this.url);
    }
    updateEmployeeBookissue(employee) {
        let url = `${this.url}/${employee.id}`
        return axios.put(url, employee)
    }
    deleteEmployeeBookissue(id) {
        let url = `${this.url}/${id}`
        return axios.delete(url);
    }
}

export default new EmployeesOperationsService();