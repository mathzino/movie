import axios, { AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org",
  headers: {
    accept: "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTQ3YTRlZmI0YTMwOTM5YjRjNmJjNjM0ZmFkYjk2NiIsInN1YiI6IjY0N2VhNDBhOTM4MjhlMDBiZjlmZDAxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wleskPU-_XFTSSnPwC4N-wfB_dmG4h9hDI30adb6PYM",
  },
});
