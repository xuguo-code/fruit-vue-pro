let state = {
  homeData: []
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
