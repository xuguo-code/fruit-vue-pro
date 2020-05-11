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
  // namespace: true,
  state,
  mutations,
  getters
}
