import { FetchImagesResponse, UnsplashApiResponse } from "./components/types";

import axios, { AxiosResponse } from "axios";

const accessKey = "zA8sS8NHFRpZ4PJV-iDUaaKNY7jlkFLMCzVZtn9p2eE";
axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

const fetchImages = async (query: string, page: number = 1): Promise<FetchImagesResponse> => {
  const axiosOptions = {
    params: {
      query: query,
      page: page,
      per_page: 12,
      orientation: "landscape",
      safesearch: true,
      client_id: accessKey,
    },
  };

  const response: AxiosResponse<UnsplashApiResponse> = await axios.get("", axiosOptions);
  return {
    images: response.data.results,
    totalPages: response.data.total_pages,
  };
};

export default fetchImages;
