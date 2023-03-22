import axios from "axios";
import config from "./config";

export const getBuckets = async (withCards) => {
  console.log(withCards);
  try {
    const route =
      config.baseURL + "buckets".concat(withCards ? "?_embed=cards" : "");
    const response = await axios.get(route);
    return response;
  } catch (err) {
    console.log(err, "testing err");
  }
};

export const createBucket = async (data) => {
  try {
    console.log(data);
    const route = config.baseURL + "buckets";
    // const res = await axios.get(route);
    // console.log(res);
    const response = await axios.post(route, data);
    return response;
  } catch (err) {
    console.log(err, "create erro");
  }
};
export const delBucket = async (withCards) => {
  console.log(withCards);
  try {
    const route =
      config.baseURL + "buckets".concat(withCards ? "?_embed=cards" : "");
    const response = await axios.get(route);
    return response;
  } catch (err) {
    console.log(err, "testing err");
  }
};