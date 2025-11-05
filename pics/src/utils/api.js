import axios from "axios";
import { timeout } from "../utils/timeout.js";

const searchImages = async (term) => {
  try {
    if (!term || !term.trim()) return [];
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      headers: {
        Authorization: "Client-ID HFwt_P7MvtZAMo-KMIPhfuSkJ7ar2I2AnrkxeKnQhkI",
      },
      params: { query: term },
      timeout: 5000,
    });
    return response.data.results;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export default searchImages;
