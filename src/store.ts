import Vuex, { StoreOptions } from "vuex";

import { TodoState, todo } from "./store/Todo";
import { HeaderState, header } from "./store/Header";

export type RootState = {
  todo: TodoState;
  header: HeaderState;
};

const store: StoreOptions<RootState> = {
  modules: {
    todo,
    header
  }
};

export default new Vuex.Store<RootState>(store);
