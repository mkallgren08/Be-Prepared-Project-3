import axios from "axios";

export default {
  //Get user with given id - auth required
  getUser: function(token, id) {
    return axios.get("/api/users/" + id, {
        headers: {
          Authorization: "Bearer " + token
        }
    });
  },
  //Save user to the database - auth required
  saveUser: function(token, id) {
    return axios.get("api/users/" + id, {
        headers: {
          Authorization: "Bearer " + token
        }
    });
  },

  // Save Emergency Form Data
  saveForm: function(token, id){
    return axios.post("/api/users/" + id + "/emergencyform", {
      headers: {
        Authorization: "Bearer " + token
      }
  });
  },

  //Get drone with given id
  getDrones: function(id) {
    return axios.get("/api/drones/" + id);
  },

  saveDrone: function(droneData) {
    return axios.post("/api/drones", droneData);
  },


  // Get and Save Posts related to Hurricanes
  getHurricanes: function(id) {
    return axios.get("/api/hurricanes/" + id);
  },

  saveHurricane: function(hurricaneData) {
    return axios.post("/api/hurricanes", hurricaneData);
  },

  getBlizzard: function(id) {
    return axios.get("/api/blizzards/" + id);
  },

  saveBlizzard: function(blizzardData) {
    return axios.post("/api/Blizzards", blizzardData);
  },
  
  getTornado: function(id) {
    return axios.get("/api/tornado/" + id);
  },

  saveTornado: function(tornadoData) {
    return axios.post("/api/tornado", tornadoData);
  },

  getTsunami: function(id) {
    return axios.get("/api/tsunami/" + id);
  },

  saveTsunami: function(tsunamiData) {
    return axios.post("/api/tsunami", tsunamiData);
  },

  getVolcano: function(id) {
    return axios.get("/api/volcano/" + id);
  },

  saveVolcano: function(volcanoData) {
    return axios.post("/api/volcano", volcanoData);
  },

  getWildfire: function(id) {
    return axios.get("/api/wildfire/" + id);
  },

  saveWildfire: function(wildfireData) {
    return axios.post("/api/wildfire", wildfireData);
  },

};