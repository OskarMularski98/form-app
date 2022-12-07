<template>
  <div class="form-check">
    <input
      class="form-check-input"
      @change="$emit('change', $event.target.value)"
      :name="name"
      :class="{ invalid: isValid === false }"
      :value="value"
      type="radio"
      :id="id"
    />
    <label class="form-check-label" :for="id"> {{ text }} </label>
  </div>
</template>

<script>
export default {
  model: {
    event: "change",
  },
  props: ["text", "name", "id", "value", "isValid"],
  data() {
    return {
      validConfirmation: {
        isValid: true,
        text: "",
      },
    };
  },
};
</script>

<style scoped>
.form-check-input.invalid {
  border-color: red;
}
</style>
