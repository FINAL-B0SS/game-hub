import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d77400d8a397417b86c858f52d1c0fbf",
  },
});
