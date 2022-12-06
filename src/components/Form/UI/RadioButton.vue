<template>
  <div class="form-check">
    <input
      class="form-check-input"
      @change="$emit('change', $event.target.value)"
      :name="name"
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
    prop: "modalValue",
    event: "change",
  },
  props: ["text", "name", "id", "value"],
  data() {
    return {
      validConfirmation: {
        isValid: true,
        text: "",
      },
    };
  },
  methods: {},
  computed: {
    isSelected() {
      return this.modalValue == this.value;
    },
  },
};
</script>

<style></style>
