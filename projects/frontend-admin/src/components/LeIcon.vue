<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <svg class="le-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<style lang="scss" scoped>
.le-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
