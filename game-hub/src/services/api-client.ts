import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0ee2dff2eb7d4b598ad2a9775aa8a4e7",
  },
});
