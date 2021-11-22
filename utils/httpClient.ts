import axios from "axios";
import { Strip } from "../types";

export const fetcher = async (endpoint: string): Promise<any> => {
  try {
    const { data } = await axios.get(endpoint);
    return data as Strip;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log(error?.message);
    } else {
      console.log(error?.message);
    }
  }
};
