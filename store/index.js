export const state = () => ({
  isLoggedIn: process.client ? localStorage.getItem("isLoggedIn") : false,
  tmpPhoneNumber: process.client ? localStorage.getItem("tmpPhoneNumber") : "",
});

export const getters = {};

export const mutations = {
  setIsLoggedIn(state, newValue) {
    state.isLoggedIn = newValue;
  },
  setTmpPhoneNumber(state, newValue) {
    state.tmpPhoneNumber = newValue;
  },
};

export const actions = {};
