import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
});
/**
 * console.log all requests and responses
 */
api.interceptors.request.use((request) => {
  console.log("Starting Request", request);
  return request;
});

api.interceptors.response.use((response) => {
  console.log("Response:", response);
  return response;
});

/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired
 logout the user if the token has expired
**/

// api.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (err.response.data.msg === "Token is not valid") {
//       store.dispatch({ type: LOGOUT });
//     }
//     return Promise.reject(err);
//   }
// );

export default api;
