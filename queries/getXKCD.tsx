import { useRouter } from "next/dist/client/router";
import { useMutation, useQuery } from "react-query";
import { getRandomNumber } from "../utils/getRandomNumber";
import { fetcher } from "../utils/httpClient";
import { GET_XKCD } from "./constants";

const useXKCD = () => {
  const router = useRouter();
  return useMutation(
    GET_XKCD,
    async (param?: string) => {
      // Implement env variables for environtment handling instead of values like window.location
      return await fetcher(
        `${window.location}/api/strip${param ? `?specificId=${param}` : ""}`
      );
    },
    {
      retry: false,
    }
  );
};

export { useXKCD };
