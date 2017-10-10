import axios from "axios";

export default {
    //Get user with given id
  getUser: function(token, id) {
      return axios.get("/api/users/" + id, {
          headers: {
              Authorization: "Bearer " + token
          }
      });
  },
  //Save user to the database
  saveUser: function(token, id) {
      return azios.get("api/users/" + id, {
          headers: {
              Authorization: "Bearer " + token
          }
      });
  },

    //Get drone with given id
    getDrone: function(id) {
        return axios.get("/api/drones/" + id);
    },

    saveDrone: function(droneData) {
        return axios.post("/api/drones", droneData);
    },

    getHurricane: function(id) {
        return axios.get("/api/hurricanes/" + id);
    },

    saveHurricane: function(hurricaneData) {
        return axios.post("/api/hurricanes", hurricaneData);
    },
};