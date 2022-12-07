<template>
  <div id="app">
    <form-custom></form-custom>
  </div>
</template>

<script>
import FormCustom from "@/components/Form/FormCustom.vue";
export default {
  components: {
    FormCustom,
  },
  name: "App",
};
</script>

<style>
#app {
  height: 100vh;
  width: 100%;
}
@font-face {
  font-family: "Poppins Light";
  font-style: normal;
  font-weight: normal;
  src: url("./assets/fonts/Poppins-Light.ttf");
}
</style>
