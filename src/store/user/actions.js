const actions = {
  setUsername: ({ commit }, username) => {
    commit("setUsername", username);
  },
  setAge: ({ commit }, age) => {
    commit("setAge", age);
  },
};

export default actions;
