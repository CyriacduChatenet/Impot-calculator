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
    celibatairePart: 1,
    couple: "",
    couplePart: 2,
    childrenNumber: "",
    childrenPart: 0,
    familyPart: 0,

    revenus:"",
    revenusTransform:0,
    revenusNetimposable:0,
    revenuRemoveTranche:0,
    tauxMarginalImpot: 0,
    impotTotal: 0,
    impotTotalRounded: 0,
    familyImpotTranche: 0,

    activeState: "on",
    unactiveState:"",
    noChildren:0
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
      if(state.celibataire === state.activeState && state.childrenNumber == state.noChildren){
        return state.familyPart = state.celibatairePart
      }
      if(state.celibataire === state.activeState && state.childrenNumber != state.noChildren){
        state.childrenPart = state.childrenNumber /2
        return state.familyPart = state.celibatairePart + state.childrenPart
      }
      if(state.couple === state.activeState && state.childrenNumber == state.noChildren){
        return state.familyPart = state.couplePart
      }
      if(state.couple === state.activeState && state.childrenNumber != state.noChildren){
        state.childrenPart = state.childrenNumber /2
        return state.familyPart = state.couplePart + state.childrenPart
      }
    },

    impotCalc: (state) => {
      state.revenusTransform = parseInt(state.revenus)
      state.revenusNetimposable = state.revenusTransform / state.familyPart

      if(state.revenusNetimposable >= state.RATES_2022[0].min && state.revenusNetimposable <= state.RATES_2022[0].max){
        state.revenuRemoveTranche = state.revenusNetimposable - state.RATES_2022[0].min
        state.tauxMarginalImpot = state.revenuRemoveTranche * state.RATES_2022[0].rate
        state.impotTotal = state.tauxMarginalImpot * state.familyPart
        state.familyImpotTranche = `de ${state.RATES_2022[0].min} à ${state.RATES_2022[0].max}`
        return state.impotTotalRounded = Math.round(state.impotTotal)
      }
      if(state.revenusNetimposable >= state.RATES_2022[1].min && state.revenusNetimposable <= state.RATES_2022[1].max){
        state.revenuRemoveTranche = state.revenusNetimposable - state.RATES_2022[1].min
        state.tauxMarginalImpot = state.revenuRemoveTranche * state.RATES_2022[1].rate
        state.impotTotal = state.tauxMarginalImpot * state.familyPart
        state.familyImpotTranche = `de ${state.RATES_2022[1].min} à ${state.RATES_2022[1].max}`
        return state.impotTotalRounded = Math.round(state.impotTotal)
      }
      if(state.revenusNetimposable >= state.RATES_2022[2].min && state.revenusNetimposable <= state.RATES_2022[2].max){
        state.revenuRemoveTranche = state.revenusNetimposable - state.RATES_2022[2].min
        state.tauxMarginalImpot = state.revenuRemoveTranche * state.RATES_2022[2].rate
        state.impotTotal = state.tauxMarginalImpot * state.familyPart
        state.familyImpotTranche = `de ${state.RATES_2022[2].min} à ${state.RATES_2022[2].max}`
        return state.impotTotalRounded = Math.round(state.impotTotal)
      }
      if(state.revenusNetimposable >= state.RATES_2022[3].min && state.revenusNetimposable <= state.RATES_2022[3].max){
        state.revenuRemoveTranche = state.revenusNetimposable - state.RATES_2022[3].min
        state.tauxMarginalImpot = state.revenuRemoveTranche * state.RATES_2022[3].rate
        state.impotTotal = state.tauxMarginalImpot * state.familyPart
        state.familyImpotTranche = `de ${state.RATES_2022[3].min} à ${state.RATES_2022[3].max}`
        return state.impotTotalRounded = Math.round(state.impotTotal)
      }
      if(state.revenusNetimposable >= state.RATES_2022[4].min && state.revenusNetimposable <= state.RATES_2022[4].max){
        state.revenuRemoveTranche = state.revenusNetimposable - state.RATES_2022[4].min
        state.tauxMarginalImpot = state.revenuRemoveTranche * state.RATES_2022[4].rate
        state.impotTotal = state.tauxMarginalImpot * state.familyPart
        state.familyImpotTranche = `de ${state.RATES_2022[4].min} à ${state.RATES_2022[4].max}`
        return state.impotTotalRounded = Math.round(state.impotTotal)
      }
    },

    ResetInfos : (state) => {
      state.celibataire= ""
      state.celibatairePart = 1
      state.couple = ""
      state.couplePart = 2
      state.childrenNumber = ""
      state.childrenPart = 0
      state.familyPart = 0
  
      state.revenus = ""
      state.revenusTransform = 0
      state.revenusNetimposable = 0
      state.revenuRemoveTranche = 0
      state.tauxMarginalImpot = 0
      state.impotTotal = 0
      state.impotTotalRounded = 0
      state.familyImpotTranche = 0
  
      state.activeState = "on"
      state.unactiveState = ""
      state.noChildren = 0
    }
  },
  actions: {},
  modules: {},
});
