import axios from "axios";

const fetchArticlesWithQuery = (searchQuery, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=18623547-5f493ca6e7211638496d8c77e&q=${searchQuery}&image_type=photo&page=${page}`
    )
    .then((response) => response.data.hits);
};

export default {
  fetchArticlesWithQuery,
};
