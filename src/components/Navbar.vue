<template>
  <nav id="navbar" class="col-12">
      <h1 class="title">Simulateur d’impôt sur le revenu pour les particuliers</h1>
  </nav>
</template>

<script>
export default {
    name:"Navbar"
}
</script>

<style lang="scss" scoped>
    @import '../assets/styles/import.scss';

    #navbar {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 8vh;
        color: $color-primary;
        background-color: $color-sixthary;
        font-size: 30px;
        .title {
            font-weight: $font-regular;
        }
    }
</style>