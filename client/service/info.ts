import { useQuery } from "react-query";
import {Fetcher} from "./api";

export const fetchHanRiverInfo = async (search: string | undefined ) => {
  const url = `/han-river/${search}`;
  const method = "get";
  if (search === undefined) {
    return null
  } else {
    return Fetcher<any>({ url, method })
  }
}

export const useHanRiverInfo =  (search : string | undefined) => {
  return useQuery(['useHanRiverInfo', search],() => fetchHanRiverInfo(search))
}