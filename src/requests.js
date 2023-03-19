import $api from "./requester";

export const fetchTodoList = async (params) => {
  const { data } = await $api.get("/posts", { params });
  return data;
};

export const fetchTodoById = async (id) => {
  const { data } = await $api.get(`/posts/${id}`);
  return data;
};
