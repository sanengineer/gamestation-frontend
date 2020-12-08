import axios from "axios";

export default axios.create({
  baseURL: "https://kerbagungame.herokuapp.com/api/v1/",
  headers: {
    "Content-type": "application/json",
  },
});