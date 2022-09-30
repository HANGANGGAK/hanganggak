import {useQuery} from "react-query";
import api from "./api";

export const fetchHanRiverInfo = async (search: string | undefined) => {
    if (search === undefined) {
        return null
    } else {
        const {data} = await api.get(`http://43.200.191.202:2209/han-river/${search}`)
        return data
    }
}

export const useHanRiverInfo = (search: string | undefined) => {
    return useQuery(['useHanRiverInfo', search], () => fetchHanRiverInfo(search))
}