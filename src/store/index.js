import { createStore } from 'vuex'

export default createStore({
  state: {
    games: [
      {
        id: 1,
        name: "majesty 2",
        price: 4,
        genre: "strategy",
        levelsCount: 14
      },
      {
        id: 2,
        name: "call of duty",
        price: 21,
        genre: "shooter",
        levelsCount: 20
      },
      {
        id: 3,
        name: "gta 5",
        price: 30,
        genre: "shooter",
        levelsCount: 31
      },
      {
        id: 4,
        name: "star craft 2",
        price: 25,
        genre: "strategy",
        levelsCount: 25
      },
    ]
  },
  getters: {
    games: state => state.games
  },
  mutations: {
    setGames: (state, item) => state.games.push(item)
  },
  actions: {
    newGame({ commit }, game) {
      game.id = Date.now()
      commit("setGames", game)
    }
  },
  modules: {
  }
})
