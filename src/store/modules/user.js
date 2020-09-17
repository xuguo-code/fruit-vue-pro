let state = {
  roles: []
}

let mutations = {
  setRoles(state, roles) {
    return (state.roles = roles)
  }
}

let getters = {
  hasRole: state => state?.roles && state?.roles.length > 0,
  roles: state => state?.roles
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
