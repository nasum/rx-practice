import { ActionContext, ActionTree, MutationTree, Module } from "vuex";

import { RootState } from "../store";
import { todoModel } from "../domain/Todo";

export type TodoState = {
  todos: string[];
};

const state: TodoState = {
  todos: []
};

const actions: ActionTree<TodoState, RootState> = {
  initialize({ commit }: ActionContext<TodoState, RootState>) {
    todoModel.on((todos: string[]) => {
      commit("setTodos", todos);
    });
  },
  addTodo(_, todo: string) {
    todoModel.addToDo(todo);
  }
};

const mutations: MutationTree<TodoState> = {
  setTodos(state, todos: string[]) {
    state.todos = todos;
  }
};

export const todo: Module<TodoState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations
};
