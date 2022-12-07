<template>
  <div class="alert" :class="customClass" role="alert">
    <h4 class="alert-heading">{{ title }}</h4>
    <p>{{ text }}</p>
    <hr />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["title", "text", "customClass"],
};
</script>

<style></style>
