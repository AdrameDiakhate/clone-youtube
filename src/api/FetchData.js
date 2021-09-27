import axios from "axios";
const KEY = "AIzaSyBLXz50QGXm8qys8bql7bmt0fndnaw_ChU";

const instance= axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
    part: "snippet",
    maxResults: 28,
    chart:"mostPopular",
    maxHeight:292,
    maxWidth:100
  },
  headers: {}
});

export default instance;