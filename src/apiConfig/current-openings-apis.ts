import { clientApi } from "./axiosInstance";

// get all openings
export const getAllCurrentOpenings = async (): Promise<{
  data: {
    id: number;
    title: string;
    slug: string;
    desc: string;
    country_img: string;
    country_name: string;
    salary: string;
    job_type: string;
  }[];
}> => {
  const response = await clientApi.get("/current-openings", {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });

  return response.data;
};

export const getAllPages = async () => {
  const response = await clientApi.get("/getallpages", {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });

  return response.data;
};

// delete an opening
export const deleteAnOpening =
  (authToken: string) => async (data: { id: number }) => {
    const response = await clientApi.delete("/delete-openings", {
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json;charset=UTF-8",
      },
      data,
    });

    return response.data;
  };
