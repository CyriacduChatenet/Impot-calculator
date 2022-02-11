<template>
  <div id="calculator-container" class="col-12">
    <div class="calculator-contribution col-12">
      <div class="personnal-infos col-4">
        <h2 class="subtitle">Informations fiscales</h2>
        <div class="inputs-container col-12">
          <div class="input-container col-12">
            <h4 class="input-title">Votre status:</h4>
            <div class="checkboxs-container col-6">
              <div class="checkbox-container col-5">
                <input type="checkbox">
                <p class="checkbox-title">Célibataire</p>
              </div>
              <div class="checkbox-container col-5">
                <input type="checkbox">
                <p class="checkbox-title">Couple</p>
              </div>
            </div>
          </div>
          <div class="input-container col-12">
            <h4 class="input-title">Nombre d'enfant(s):</h4>
            <input type="text" class="input-info col-6">
          </div>
          <div class="input-container col-12">
            <h4 class="input-title">Revenus net annuel:</h4>
            <input type="text" class="input-info col-6">
          </div>
        </div>
      </div>
      <div class="graph-container col-2"></div>
      <div class="result-infos col-4">
        <h2 class="subtitle">Montant de ma contribution</h2>
        <div class="inputs-container col-12">
          <div class="input-container col-12">
            <h4 class="input-title">Nombre de parts fiscales:</h4>
            <p class="input-result"></p>
          </div>
          <div class="input-container col-12">
            <h4 class="input-title">Traches d'imposition:</h4>
            <p class="input-result"></p>
          </div>
          <div class="input-container col-12">
            <h4 class="input-title">Montant de l'împot sur le revenu:</h4>
            <p class="input-result">2826 €</p>
          </div>
        </div>
      </div>
    </div>
    <button class="start-btn">Lancer le simulateur</button>
  </div>
</template>

<script>
export default {
  name: "Calculator",
};
</script>

<style scoped lang="scss">
@import "../assets/styles/import.scss";

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
    }
    .result-infos {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      height: 80%;
    }
    .graph-container {
      height: 80%;
      background-color: blue;
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
  .checkboxs-container{
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
</style>
