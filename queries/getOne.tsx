import { useQuery } from "react-query";
import { fetcher } from "../utils/httpClient";
import { GET_STRIP } from "./constants";

const useGetOne = (next: string) => {
  return useQuery(GET_STRIP, async () => {
    // Implement env variables for environtment handling instead of values like window.location
    return await fetcher(
      `${window.location}/api/strip${next ? `?specificId=${next}` : ""}`
    );
  });
};

export { useGetOne };
