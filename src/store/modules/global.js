let state = {
  routes: []
}

let mutations = {
  setRoutes(state, r) {
    return (state.routes = r)
  }
}

let getters = {
  routes: state => state.routes
}

export default {
  state,
  mutations,
  getters
}
