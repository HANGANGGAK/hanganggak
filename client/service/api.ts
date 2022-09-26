import axios from "axios";

export interface FecherGetProps {
  url: string;
  method: string;
  params?: any;
}

export const Fetcher = function <Type>(props: FecherGetProps) {
  return axios({
    url: `${props.url}`,
    method: `${props.method}`,
    params: props.params
  }).then((res) => res.data as Type);
};

