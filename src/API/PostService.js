import axios from "axios";

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: limit,
          _page: page
        }
      }
    );
    return response;
  }

  static async getPost(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return response;
  }

  static async getComments(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    return response;
  }

  static async getPhotos(id) {
    const response = await axios.get(
      `https://bing-image-search1.p.rapidapi.com/images/search`,
      {
        params: {
          q: "bmw",
          count: "100"
        },
        headers: {
          "x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
          "x-rapidapi-key": "62698d9252msh4796cb3bf9c090fp10c22fjsn5f8467acd459"
        }
      }
    );
    return response.data.value[id - 1];
  }
}
