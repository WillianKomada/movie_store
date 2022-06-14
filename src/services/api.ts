import axios from "axios";

export const key = "753a517f930fd94acb62c5b4acd42086";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
