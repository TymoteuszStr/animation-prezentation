import { createStore } from "vuex";

export default createStore({
  state: {
    players:[]
  },
  mutations: {
    addNewPlayer(state, player) {
      state.players.push(player)
    },
  },
  actions: {},
  modules: {},
});
