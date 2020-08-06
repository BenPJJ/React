export default {
  namespace: 'compute',

  state: {
    count: 0
  },

  reducers: {
    result(state) {
      return { ...state };
    },
    add(state) {
      state.count += 1;
      console.log(state)
      return { ...state };
    },
    reduce(state) {
      state.count -= 1;
      console.log(state)
      return { ...state };
    }
  }
}