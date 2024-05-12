import axios from "axios";
import { Quote } from "./types";

export const getQuote = async () => {
  const { data } = await axios.get<Quote>("https://api.quotable.io/random");
  return data;
};
