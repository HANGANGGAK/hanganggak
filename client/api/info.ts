import { useQuery } from "react-query";
import api from "./api";

export const useHanRiverInfo =  (search : string | undefined) => {
  return useQuery(['useHanRiverInfo', search], async () => {
    if (search === "" || search === undefined) {
      return null
    } else {
      const { data } = await api.get(`/han-river/${search}`)
      return data
    }
  })
}