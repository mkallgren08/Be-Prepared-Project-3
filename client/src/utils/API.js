import axios from "axios";

export default {
    //Get user with the given id
    getUser: function(id) {
        return axios.get("/api/users/" + id);
    },

    //Save user to the database
    saveUser: function(userData) {
        return axios.post("/api/users", userData);
    }
};