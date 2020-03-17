import { ActionContext, ActionTree, MutationTree, Module } from "vuex";

import { RootState } from "../store";
import { todoModel } from "../domain/Todo";

export type HeaderState = {
  count: number;
};

const state: HeaderState = {
  count: 0
};

const actions: ActionTree<HeaderState, RootState> = {
  initialize({ commit }: ActionContext<HeaderState, RootState>) {
    todoModel.on((todos: string[]) => {
      commit("setCount", todos.length);
    });
  }
};

const mutations: MutationTree<HeaderState> = {
  setCount(state, count: number) {
    state.count = count;
  }
};

export const header: Module<HeaderState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations
};
