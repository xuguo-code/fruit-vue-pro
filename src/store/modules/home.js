let state = {
  homeData: 'test dynamic register home module'
}

let mutations = {
  setHomeData(state, data) {
    return (state.homeData = data)
  }
}

let getters = {
  homeData: state => state?.homeData
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
