<template>
  <div>
    <label class="form-label"> {{ text }} </label>
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
      :disabled="isDisabled"
      class="form-control"
      type="text"
    />
  </div>
</template>

<script>
export default {
  props: ["text", "value", "isDisabled"],
  // props: {
  //   text: {
  //     type: String,
  //     default: "",
  //     required: true,
  //   },
  //   value: {
  //     type: Number,
  //     default: null,
  //     required: true,
  //   },
  //   isDisabled: {
  //     type: Boolean,
  //     default: true,
  //     required: false,
  //   },
  // },
};
</script>

<style></style>
