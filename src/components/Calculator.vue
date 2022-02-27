<template>
  <div id="calculator-container" class="col-12">
    <div class="calculator-contribution col-12">
      <div class="personnal-infos">
        <h2 class="subtitle">Informations fiscales</h2>
        <div class="inputs-container col-12">
          <div class="input-container col-12">
            <h4 class="input-title">Votre status:</h4>
            <div class="checkboxs-container col-6">
              <div class="checkbox-container col-5">
                <input
                  type="checkbox"
                  :value="celibataire"
                  @input="updateCelibataireState"
                />
                <p class="checkbox-title">Célibataire</p>
              </div>
              <div class="checkbox-container col-5">
                <input
                  type="checkbox"
                  :value="couple"
                  @input="updateCoupleState"
                />
                <p class="checkbox-title">Couple</p>
              </div>
            </div>
          </div>
          <div class="input-container col-12">
            <h4 class="input-title">Nombre d'enfant(s):</h4>
            <input
              type="text"
              class="input-info col-6"
              :value="childrenNumber"
              @input="updateChildrenNumber"
            />
          </div>
          <div class="input-container col-12">
            <h4 class="input-title">Revenus net annuels:</h4>
            <input
              type="text"
              class="input-info col-6"
              :value="revenus"
              @input="updateRevenus"
            />
          </div>
        </div>
      </div>
      <div class="result-infos">
        <h2 class="subtitle">Montant de ma contribution</h2>
        <div class="inputs-container col-12">
          <div class="input-container col-12">
            <h4 class="input-title">Nombre de parts fiscales:</h4>
            <p class="input-result">{{ familyPart }} part(s)</p>
          </div>
          <div class="input-container col-12">
            <h4 class="input-title">Tranche d'imposition:</h4>
            <p class="input-result">{{ familyImpotTranche }} €</p>
          </div>
          <div class="input-container col-12">
            <h4 class="input-title">Montant de l'impot sur le revenu:</h4>
            <p class="input-result">{{ impotTotalRounded }} €</p>
          </div>
        </div>
      </div>
    </div>
    <button class="start-btn" @click="calculator">Lancer le simulateur</button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "Calculator",
  computed: {
    ...mapMutations(["fiscalePart", "impotCalc", 'ResetInfos']),
    ...mapState([
      "childrenNumber",
      "revenus",
      "familyPart",
      "familyImpotTranche",
      "impotTotalRounded",
    ]),
  },
  methods: {
    updateChildrenNumber(event) {
      this.$store.commit("updateChildrenNumber", event.target.value);
    },
    updateRevenus(event) {
      this.$store.commit("updateRevenus", event.target.value);
    },
    updateCelibataireState(event) {
      this.$store.commit("updateCelibataireState", event.target.value);
    },
    updateCoupleState(event) {
      this.$store.commit("updateCoupleState", event.target.value);
    },

    calculator() {
      this.fiscalePart, this.impotCalc;
      setTimeout(() => {
        this.ResetInfos
      },2000)
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/import.scss";

@media all and (max-width: 991.98px) {
  #calculator-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 2vh;
    height: 70vh;
    .calculator-contribution {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      height: 70vh;
      .personnal-infos {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 50%;
        width: 100%;
      }
      .result-infos {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 50%;
        width: 100%;
      }
      .subtitle {
        font-weight: $font-regular;
        font-size: 18px;
      }
    }
    .start-btn {
      padding: 0.5vh 2vw;
      border-radius: 20px;
      color: $color-primary;
      background-color: $color-fifthary;
      font-size: 18px;
      font-weight: $font-regular;
    }
    .inputs-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      height: 60vh;
      .input-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 15%;
        .input-title {
          font-weight: $font-regular;
          font-size: 16px;
        }
        .input-result {
          font-weight: $font-bold;
        }
        .input-info {
          padding: 0.5vh 2vw;
          border: 1px solid $color-seventhary;
          border-radius: 10px;
          outline: none;
        }
      }
    }
    .checkboxs-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 6vh;
    }
    .checkbox-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
    }
  }
      .checkbox-title {
      font-size: 16px;
    }
}

@media all and (min-width: 992px) {
  #calculator-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 70vh;
    .calculator-contribution {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 70vh;
      .personnal-infos {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 80%;
        width: 50%;
      }
      .result-infos {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 80%;
         width: 50%;
      }
      .subtitle {
        font-weight: $font-regular;
      }
    }
    .start-btn {
      padding: 0.5vh 2vw;
      border-radius: 20px;
      color: $color-primary;
      background-color: $color-fifthary;
      font-size: 18px;
      font-weight: $font-regular;
    }
    .inputs-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      height: 60vh;
      .input-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 15%;
        .input-title {
          font-weight: $font-regular;
          font-size: 18px;
        }
        .input-result {
          font-weight: $font-bold;
        }
        .input-info {
          padding: 0.5vh 2vw;
          border: 1px solid $color-seventhary;
          border-radius: 10px;
          outline: none;
        }
      }
    }
    .checkboxs-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 6vh;
    }
    .checkbox-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 100%;
    }
  }
}
</style>
