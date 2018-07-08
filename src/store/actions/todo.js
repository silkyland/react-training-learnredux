import axios from "axios";
import config from "../../config";

export const SET_TODO = "SET_TODO";
export const SET_TODOS = "SET_TODOS";

export const getTodo = () => async dispatch => {
  let todos = await axios.get(config.server.api + "/todos");
  dispatch(setTodos(todos.data));
};

export const addTodo = message => async dispatch => {
  let todos = await axios.post(config.server.api + "/todos", {
    name: message
  });
  dispatch(setTodo(todos.data));
};

const setTodo = data => ({
  type: SET_TODO,
  payload: data
});

const setTodos = data => ({
  type: SET_TODOS,
  payload: data
});
