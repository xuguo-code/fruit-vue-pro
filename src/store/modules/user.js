let state = {
  hasRole: []
}

let mutations = {
  setHasRole(state) {
    return (state.hasRole = ['admin'])
  }
}

let getters = {
  hasRole: state => state?.hasRole
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
