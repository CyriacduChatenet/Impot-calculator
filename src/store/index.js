import { createStore } from "vuex";

export default createStore({
  state: {
    RATES_2022: [
      {
        rate: 0,
        min: 0,
        max: 10225,
      },
      {
        rate: 0.11,
        min: 10226,
        max: 26070,
      },
      {
        rate: 0.3,
        min: 26071,
        max: 74545,
      },
      {
        rate: 0.41,
        min: 74546,
        max: 160336,
      },
      {
        rate: 0.45,
        min: 160337,
        max: Infinity,
      },
    ],
    celibataire: "",
    couple: "",
    childrenNumber: "",
    revenus: "",
    fiscalePartNumber: 0,
    impositionTranche: 0,
    impotBeforePercentage: "",
    impotAmount: 0,
  },
  mutations: {
    updateChildrenNumber: (state, payload) => {
      state.childrenNumber = payload;
    },
    updateRevenus: (state, payload) => {
      state.revenus = payload;
    },
    updateCelibataireState: (state, payload) => {
      state.celibataire = payload;
    },
    updateCoupleState: (state, payload) => {
      state.couple = payload;
    },

    fiscalePart: (state) => {
      if(state.celibataire === "on"){
        state.fiscalePartNumber = 1
      }
      if(state.couple === "on"){
        state.fiscalePartNumber = 2
      }
    },

    calculator: (fiscalePart) => {
      fiscalePart()
    },
  },
  actions: {},
  modules: {},
});
