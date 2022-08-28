// NOTE: functions don't seem to be serialized 
// when we set the runtime config

// Also: we might want changes to the store to trigger
// HMR... 
export const state = () => ({
  someVal: 2344321
})

export const mutations = {
  inc(state) {
    state.someVal++
  }
}