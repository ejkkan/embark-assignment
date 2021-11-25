import { useQuery } from "react-query";
import { fetcher } from "../utils/httpClient";
import { GET_STRIP } from "./constants";

const useGetRandom = () => {
  return useQuery(
    GET_STRIP,
    async () => await fetcher(`${window.location}/api/randomStrip`)
  );
};

export { useGetRandom };
