import axios from "axios";
import { AsyncStorage } from "react-native";

const instance = axios.create({
  baseURL: "http://685fc647a343.ngrok.io",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        console.log(token);
        console.log(config);
      config.headers.Authorization = `Bearer ${token}`;
    }
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);

export default instance;
