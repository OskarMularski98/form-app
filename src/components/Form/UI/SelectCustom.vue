<template>
  <div>
    <label :for="id" class="form-check-label">
      {{ title }}
    </label>
    <select
      class="form-select"
      :value="value"
      :class="{ invalid: isValid === false }"
      @input="$emit('input', $event.target.value)"
      :name="name"
      :id="id"
    >
      <option disabled :value="null">{{ text }}</option>
      <option :value="0.19">19%</option>
      <option :value="0.21">21%</option>
      <option :value="0.23">23%</option>
      <option :value="0.25">25%</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ["value", "id", "name", "text", "title", "isValid"],
};
</script>

<style scoped>
.form-select.invalid {
  border-color: red;
}
</style>
