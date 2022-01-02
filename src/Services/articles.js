import axios from "../axios";
let url = "http://localhost:8000";

// This service calls newsapi

export const getArticlesList = (searchValue, date) => {
  return axios.get(
    `https://newsapi.org/v2/everything?q=${searchValue}&from=${date}&sortBy=publishedAt&apiKey=56d5d35b8b0244f8a31599f7dde675f0`,
    null
  );
};

// This service calls backend api
// export const getArticlesList = (searchValue, date) => {
//   return axios.post(`${url}/articles/getArticleList`, {
//     search: searchValue,
//     date: date
//   });
// };
