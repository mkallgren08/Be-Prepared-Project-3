import axios from "axios";

export default {
    //Get user with the given id
    getUser: function(id) {
        return axios.get("/api/users/" + id);
    },

    //Save user to the database
    saveUser: function(userData) {
        return axios.post("/api/users", userData);
    },

    //Get drone with given id
    getDrones: function(id) {
        return axios.get("/api/drones/" + id);
    },

    saveDrone: function(droneData) {
        return axios.post("/api/drones", droneData);
    },

    getHurricanes: function(id) {
        return axios.get("/api/hurricanes/" + id);
    },

    saveHurricane: function(hurricaneData) {
        return axios.post("/api/hurricanes", hurricaneData);
    },
};