import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state() {
    return {
      user: null,
    };
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    setUser({ commit }, payload) {
      commit("SET_USER", payload);
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  plugins: [
    createPersistedState({
        key: "vuex",
        paths: ["user"],
        storage: window.sessionStorage,
    }),
  ],
});

export default store;
