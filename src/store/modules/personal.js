let state = {
  personalData: 'test dynamic register home module'
}

let mutations = {
  setPersonalData(state, data) {
    return (state.personalData = data)
  }
}

let getters = {
  personalData: state => state?.personalData
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
