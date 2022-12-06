<template>
  <div id="app">
    <form-view></form-view>
  </div>
</template>

<script>
import FormView from "@/components/Form/FormView.vue";
export default {
  components: {
    FormView,
  },
  name: "App",
};
</script>

<style scoped>
#app {
  height: 100vh;
  width: 100%;
}
</style>
