import { query } from "../services/user";

const user = {
  namespaced: true,
  state: {
    loading: false,
    data: []
  },
  actions: {
    async fetch({ commit }, payload) {
      commit("changeLoading", true);
      const response = await query(payload);
      commit("saveData", response.list || []);
      commit("changeLoading", false);
    }
  },
  mutations: {
    changeLoading(state, payload) {
      state.loading = payload;
    },
    saveData(state, payload) {
      state.data = [...payload];
    }
  }
};

export default user;
