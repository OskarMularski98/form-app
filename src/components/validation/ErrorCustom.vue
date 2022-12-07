<template>
  <div class="mb-2">
    <label
      class="form-control-label"
      :class="{ invalid: isValid === false }"
      v-if="isValid === false"
    >
      {{ text }}
    </label>
  </div>
</template>

<script>
export default {
  props: ["text", "isValid"],
};
</script>

<style scoped>
.form-control-label.invalid {
  font-size: 13px;
  color: red;
}
</style>
