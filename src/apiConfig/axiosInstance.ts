import axios from "axios";

export const clientApi = axios.create({
  baseURL: "https://webwila.com/giftopedia/public/api/v1",
  withCredentials: true,
});
