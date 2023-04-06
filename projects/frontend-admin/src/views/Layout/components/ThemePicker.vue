<script setup lang="ts">
import { Check } from '@element-plus/icons-vue'

defineProps<{
  colors: string[]
  modelValue?: string
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', color: string): void
}>()
</script>

<template>
  <div class="theme-picker">
    <span
      v-for="item in colors"
      :key="item"
      class="theme-picker-item"
      :style="{ backgroundColor: item }"
      @click="emit('update:modelValue', modelValue === item ? '' : item)"
    >
      <el-icon v-if="modelValue === item"><Check /></el-icon>
    </span>
  </div>
</template>

<style lang="scss" scoped>
.theme-picker {
  display: flex;
  align-items: center;
  height: 30px;
  overflow: hidden;
  margin-top: 10px;
  &-item {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    color: #fff;
    text-align: center;
    box-sizing: border-box;
    border: 1px solid #e4e4e4;
  }
}
</style>
