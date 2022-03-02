import axios from 'axios';

class LibrariansOperationsService{
    url = 'http://localhost:8082/Librarian';

    getLibrarians() {
        return axios.get(this.url);
    }
    addLibrarian(Librarian) {
        console.log("Create Record", Librarian);
        return axios.post(this.url, Librarian)
    }
    updateLibrarian(Librarian) {
        let url = `${this.url}/${Librarian.id}`
        return axios.put(url, Librarian)
    }
    deleteLibrarian(id) {
        let url = `${this.url}/${id}`
        return axios.delete(url);
    }
}

export default new LibrariansOperationsService();