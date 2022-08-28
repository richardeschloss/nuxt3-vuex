export const state = () => ({
  someVal: 2344321
})

export const mutations = {
  SET_SOMEVAL(state, val) {
    state.someVal = val
    console.log('Hooray, you committed someVal in Nuxt3!')
  }
}