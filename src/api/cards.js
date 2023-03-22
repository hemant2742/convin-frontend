import axios from "axios";
import config from "./config";

export const getCards = async (withBucket) => {
  const route =
    config.baseURL + "cards".concat(withBucket ? "?_expand=bucket" : "");
  const response = await axios.get(route);
  return response;
};

export const createCard = async (data) => {
  const response = await axios.post(config.baseURL + "cards", data);
  return response;
};

export const editCard = async (id, data) => {
  const response = await axios.put(config.baseURL + `cards/${id}`, data);
  return response;
};

export const deleteCard = async (id) => {
  const response = await axios.delete(config.baseURL + `cards/${id}`);
  return response;
};
