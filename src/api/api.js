import axios from "axios";
(function () {
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  }
})();
export default axios.create({
  // baseURL:'https://cocreatelabb.herokuapp.com/'
  // baseURL:'http://127.0.0.1:8000/'
  baseURL: "http://3.218.252.166:8000/"

});
