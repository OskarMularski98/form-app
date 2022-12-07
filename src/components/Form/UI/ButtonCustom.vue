<template>
  <div class="d-grid gap-2 col-5 mx-auto mt-2">
    <button
      :class="customClass"
      class="mt-4 rounded-pill"
      type="submit"
      @click="$emit('click')"
    >
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  props: ["customClass", "text"],
};
</script>

<style scoped>
.btn.btn-warning {
  transition: all 0.2s ease-in;
  padding: 0.5rem 0rem;
  font-weight: bold;
}
.btn.btn-warning:hover {
  background-color: black;
  border: 1px solid #ffc107;
  color: #ffc107;
}
.btn.btn-success {
  transition: all 0.2s ease-in;
  padding: 0.5rem 0rem;
  font-weight: bold;
  color: whitesmoke;
}
.btn.btn-success:hover {
  background-color: whitesmoke;
  border: 1px solid #198754;
  color: #198754;
}
.btn.btn-danger {
  transition: all 0.2s ease-in;
  padding: 0.5rem 0rem;
  font-weight: bold;
  color: whitesmoke;
}
.btn.btn-danger:hover {
  background-color: whitesmoke;
  border: 1px solid #dc3545;
  color: #dc3545;
}
</style>
