import { createStore } from "vuex";

import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state() {
    return {
      user: null,
      users: [],
      usersListener: null, // added a new state to store the listener
    };
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },
    SET_USERS(state, payload) {
      state.users = payload;
    },
    SET_USER_PHOTO_URL(state, payload) {
      state.user.photoURL = payload;
    },
    SET_USERS_LISTENER(state, payload) { // added a new mutation to set the listener
      state.usersListener = payload;
    },
    UPDATE_USER(state, payload) { // added a new mutation to update the lastLogin field of a user
      const index = state.users.findIndex((user) => user.id === payload.id);
      if (index !== -1) {
        state.users[index].lastLogin = payload.lastLogin;
      }
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
