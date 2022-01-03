import axios from "../axios";
let url = "https://kumarswami-articles-backend.herokuapp.com";

// This service calls newsapi

// export const getArticlesList = (searchValue, date) => {
//   return axios.get(
//     `https://newsapi.org/v2/everything?q=${searchValue}&from=${date}&sortBy=publishedAt&apiKey=880b677eef3e45029b2893df000373db`,
//     null
//   );
// };

// This service calls backend api
export const getArticlesList = (searchValue, date) => {
  return axios.post(`${url}/articles/getArticleList`, {
    search: searchValue,
    date: date
  });
};
