import { createStore } from "vuex";

import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state() {
    return {
      user: null,
      users: [],
    };
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
    SET_USERS(state, payload) {
      state.users = payload;
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
    users(state) {
      return state.users;
    },
    isLoggedin(state) {
      return !!state.user;
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
