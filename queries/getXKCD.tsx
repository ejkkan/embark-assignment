import { useRouter } from "next/dist/client/router";
import { useMutation, useQuery } from "react-query";
import { getRandomNumber } from "../utils/getRandomNumber";
import { fetcher } from "../utils/httpClient";
import { GET_XKCD } from "./constants";

const useXKCD = () => {
  const router = useRouter();
  console.log("router", router.basePath);
  return useMutation(
    GET_XKCD,
    async (param?: string) => {
      return await fetcher(
        `${window.location}/api/strip${param ? `?specificId=${param}` : ""}`
      );
    },
    {
      onSuccess: () => {
        console.log("DATA SUCCESSFULLY FETCHED");
      },
      onError: (e: any) => {
        console.log("DATA ERROR", e);
      },
      retry: false,
    }
  );
};

export { useXKCD };
