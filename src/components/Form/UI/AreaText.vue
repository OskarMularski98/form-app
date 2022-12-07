<template>
  <div>
    <label
      class="form-label"
      :for="text"
    >
      {{ text }}
    </label>
    <textarea
      :class="{ invalid: isValid === false }"
      :value="value"
      @input="$emit('input', $event.target.value)"
      class="form-control"
      @blur="$emit('blur', $event.target.value)"
    ></textarea>
    <div
      class="form-label text-length mb-0"
      :class="{ invalid: isValid === false }"
    >
      {{ textLength }}/{{ maxLength }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["isValid", "value", "textLength", "text"],
  data() {
    return {
      maxLength: 255,
      validDescription: {
        isValid: true,
        text: "",
      },
    };
  },
};
</script>

<style scoped>
.form-control.invalid {
  border-color: red;
}
.form-label.invalid.text-length {
  color: red;
}
</style>
