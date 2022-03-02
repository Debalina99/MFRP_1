import axios from 'axios';

class UsersOperationsService{
    url = 'http://localhost:8082/Users';

    getUsers() {
        return axios.get(this.url);
    }
    addUser(User) {
        console.log("Create Record", User);
        return axios.post(this.url, User)
    }
    updateUser(User) {
        let url = `${this.url}/${User.id}`
        return axios.put(url, User)
    }
    deleteUser(id) {
        let url = `${this.url}/${id}`
        return axios.delete(url);
    }
}

export default new UsersOperationsService();