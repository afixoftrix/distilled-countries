import axios from "axios";

// axios config for countries api (extensible)
const countriesAPI = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

export default {
  getAll: async () => countriesAPI.get("/all"),
  getByName: async (name) => countriesAPI.get(`/name/${name}?fullText=true`),
  getByCCA: async (cca) => countriesAPI.get(`/alpha/${cca}`),
};