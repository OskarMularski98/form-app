<template>
  <div>
    <label
      :for="id"
      :class="{ invalid: isValid === false }"
      class="form-check-label"
    >
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
  // props: {
  //   value: {
  //     type: Number,
  //     required: true,
  //     default: null,
  //   },
  //   id: {
  //     type: String,
  //     required: true,
  //     default: "",
  //   },
  //   name: {
  //     type: String,
  //     required: true,
  //     default: "",
  //   },
  //   text: {
  //     type: String,
  //     required: true,
  //     default: "",
  //   },
  //   title: {
  //     type: String,
  //     required: true,
  //     default: "",
  //   },
  //   isValid: {
  //     type: Boolean,
  //     required: false,
  //     default: true,
  //   },
  // },
};
</script>

<style scoped>
.form-select.invalid {
  border-color: red;
}
.form-check-label.invalid {
  color: red;
}
</style>
