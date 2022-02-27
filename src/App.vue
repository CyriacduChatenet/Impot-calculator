<template>
  <div id="homepage" class="col-12">
    <Navbar />
    <h2 class="subtitle">Calculer l’impôt sur les revenus 2021</h2>
    <Calculator />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Calculator from "./components/Calculator.vue";

export default {
  name: "App",
  components: { Navbar, Calculator },
};
</script>

<style lang="scss">
@import "./assets/styles/import.scss";

#homepage {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

@media all and (max-width: 767.98px) {
  .subtitle {
    margin: 5vh 0;
    font-size: 20px;
  }
}
@media all and (min-width: 768px) {
  .subtitle {
    margin: 5vh 0;
  }
}
</style>
