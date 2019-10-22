import axios from "axios";

const instanse = axios.create({
  baseURL: "http://68.183.119.148/api/test"
});
export default instanse;
