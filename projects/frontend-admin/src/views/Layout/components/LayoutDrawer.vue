<script setup lang="ts">
import { Moon, Sunny } from '@element-plus/icons-vue'
import { useDark } from '@vueuse/core'
import { onMounted, ref, watch } from 'vue'
import ThemePicker from './ThemePicker.vue'
import { useAppStore } from '@/stores'

const appStore = useAppStore()

// 模式
const isDarkMode = useDark()
watch(isDarkMode, () => {
  appStore.setSettingsProperty('dark', isDarkMode.value)
})
onMounted(() => {
  isDarkMode.value = appStore.settings.dark
})

// 主题色
const color = ref('')
watch(color, () => {
  appStore.setSettingsProperty('themeColor', color.value)
  if (color.value)
    document.documentElement.style.setProperty('--primary-dull', color.value)
  else document.documentElement.style.removeProperty('--primary-dull')
})
onMounted(() => {
  color.value = appStore.settings.themeColor
})

// 重置
function onReset() {
  isDarkMode.value = false
  color.value = ''
  appStore.resetSettings()
}
</script>

<template>
  <el-drawer size="260" :title="$t('sys.settings')">
    <el-descriptions :column="1" direction="vertical">
      <el-descriptions-item :label="$t('sys.dark')">
        <el-switch v-model="isDarkMode" :active-icon="Sunny" :inactive-icon="Moon" inline-prompt />
      </el-descriptions-item>
      <el-descriptions-item :label="$t('sys.themeColor')">
        <ThemePicker v-model="color" :colors="['#FF6600', '#26A69A', '#EE1D52', '#8B5FBF', '#1DB954', '#C7B299', '#61261B']" />
      </el-descriptions-item>
    </el-descriptions>
    <template #footer>
      <el-button type="primary" @click="onReset">
        {{ $t("sys.reset") }}
      </el-button>
    </template>
  </el-drawer>
</template>

<style lang="scss" scoped></style>
