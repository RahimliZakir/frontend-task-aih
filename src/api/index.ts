import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const fetcher = (url: string) => {
  return axiosInstance.get(url).then((res) => res.data);
};

export default axiosInstance;
