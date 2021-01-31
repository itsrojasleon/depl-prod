import axios from 'axios';

const URL = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export class Api {
  static async getPosts({ page = 1 }: { page: number }) {
    const { data } = await URL.get(`/posts?_page=${page}`);

    return data;
  }

  static async getSinglePost({ id }: { id: number }) {
    const { data } = await URL.get(`/posts/${id}`);

    return data;
  }

  static async getPostComments({ id }: { id: number }) {
    const { data } = await URL.get(`/posts/${id}/comments`);

    return data;
  }
}
