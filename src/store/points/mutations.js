const mutations = {
  addPoint: (state) => {
    state.points += 1;
  },
  removePoint: (state) => {
    state.points -= 1;
  },
};

export default mutations;
