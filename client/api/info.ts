import { useQuery } from "react-query";
import api from "./api";

export const fetchHanRiverInfo = async (search: string | undefined) => {
  if (search === "" || search === undefined) {
    return null
  } else {
    const { data } = await api.get(`/han-river/${search}`)
    return data
  }
}

export const useHanRiverInfo =  (search : string | undefined) => {
  return useQuery(['useHanRiverInfo', search],() => fetchHanRiverInfo(search))
}