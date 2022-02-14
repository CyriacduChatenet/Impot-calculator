<template>
  <nav id="navbar" class="col-12">
    <h1 class="title">
      Simulateur d’impot sur le revenu pour les particuliers
    </h1>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/import.scss";

@media all and (max-width:767.98px){
        #navbar {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 8vh;
        color: $color-primary;
        background-color: $color-sixthary;
        font-size: 30px;
        .title {
            text-align: center;
            font-size: 20px;
            font-weight: $font-regular;
        }
    }
}
@media all and (min-width: 768px) and (max-width:991.98px){
        #navbar {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 8vh;
        color: $color-primary;
        background-color: $color-sixthary;
        font-size: 30px;
        .title {
            font-size: 30px;
            font-weight: $font-regular;
        }
    }
}
@media all and (min-width: 992px) and (max-width:1199.98px){
        #navbar {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 8vh;
        color: $color-primary;
        background-color: $color-sixthary;
        font-size: 30px;
        .title {
            font-size: 35px;
            font-weight: $font-regular;
        }
    }
}

@media all and (min-width: 1200px) {
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
}
</style>
