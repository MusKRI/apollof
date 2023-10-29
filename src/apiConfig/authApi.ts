import axios from "axios";
// import { clientApi } from "./axiosInstance";

export async function login(data: {
  username: string;
  password: string;
}): Promise<{
  succ: number;
  errors: string;
  msg: string;
  data: {
    user_details: {
      id: number;
      name: string;
      first_name: string;
      last_name: string;
      username: string;
      email: string;
    };
    token: {
      access_token: string;
      token_type: string;
    };
  };
}> {
  const response = await axios.post(
    "https://webwila.com/giftopedia/public/api/v1/login",
    data,
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      withCredentials: false,
    }
  );

  return response.data;
}
