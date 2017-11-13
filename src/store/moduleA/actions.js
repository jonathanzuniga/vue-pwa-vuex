export default {
  increment({commit}) {
    setTimeout(() => {
      commit('increment')
    }, 500);
  }
}
