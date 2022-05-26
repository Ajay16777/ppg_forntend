import axios from "axios";
export const BASEURL = {
  ENDPOINT_URL: "http://192.168.1.109:5200/",
};
const AuthToken = sessionStorage.getItem("Authtoken");
const finalToken = JSON.parse(AuthToken);
export default axios.create({
  baseURL: `${BASEURL.ENDPOINT_URL}api`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    Authorization: `Bearer ${finalToken ? finalToken.token : ""}`,
  },
});
// console.log(localStorage.getItem("token"));
