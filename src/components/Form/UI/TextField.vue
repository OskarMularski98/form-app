<template>
  <div>
    <label class="form-label">
      {{ text }}
    </label>
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      :disabled="isDisabled"
      :class="{ invalid: isValid === false }"
      class="form-control"
      type="text"
    />
  </div>
</template>

<script>
export default {
  props: ["text", "value", "isDisabled", "isValid"],
};
</script>

<style scoped>
.form-control.invalid {
  border-color: red;
}
</style>
