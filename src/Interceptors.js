import axios from "axios";

const apiinterceptor = axios.create({
  baseURL: "https://task-nhar.onrender.com/",
});

apiinterceptor.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("userData"));

    if (token) {
      config.headers["Authorization"] = "Bearer " + token.accessToken;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

apiinterceptor.interceptors.response.use(
  (response) => {
    console.log(response.data);
    if (!response.data.success) {
      alert(response.data.message);
    }
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    console.log(error);
    return Promise.reject(error);
  }
);
export default apiinterceptor;
