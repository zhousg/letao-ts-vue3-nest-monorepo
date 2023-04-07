<script setup lang="ts">
import { Bell, Expand, FullScreen, Moon, Search, Setting, Sunny } from '@element-plus/icons-vue'
import { useDark, useFullscreen } from '@vueuse/core'
import { ElMessage } from 'element-plus'
import { onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import ThemePicker from './ThemePicker.vue'
import { useAppStore } from '@/stores'

defineProps<{
  isMobile: boolean
}>()
const emit = defineEmits<{
  (e: 'expand'): void
}>()

const appStore = useAppStore()

// 全屏
const { isSupported, toggle } = useFullscreen()
function onToggleScreen() {
  if (!isSupported.value)
    return ElMessage('浏览器不支持全屏')
  toggle()
}

// 语言
const { locale } = useI18n()
function onToggleLang(lang: string) {
  locale.value = lang
  appStore.setLang(lang)
}

// 系统设置
const isShowDrawer = ref(false)
function openDrawer() {
  isShowDrawer.value = true
}

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
  <el-header class="layout-header">
    <div class="layout-header-left">
      <el-icon v-if="isMobile" @click="emit('expand')">
        <Expand />
      </el-icon>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          LeTao
        </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ $t("menu.dashboard") }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row>
      <template v-if="!isMobile">
        <el-button :icon="Search" circle />
        <el-button :icon="Bell" circle />
        <el-button :icon="FullScreen" circle @click="onToggleScreen" />
        <el-dropdown trigger="click" placement="bottom-end" @command="onToggleLang">
          <el-button circle>
            <LeIcon name="i18n" />
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="en" :class="{ active: locale === 'en' }">
                English
              </el-dropdown-item>
              <el-dropdown-item command="zh" :class="{ active: locale === 'zh' }">
                中文简体
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
      <el-button :icon="Setting" circle @click="openDrawer" />
    </el-row>
  </el-header>
  <el-drawer v-model="isShowDrawer" size="260" :title="$t('sys.settings')">
    <el-descriptions :column="1">
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

<style lang="scss" scoped>
.layout-header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  min-height: 60px;
  height: auto;
  &-left {
    display: flex;
    height: 100%;
    align-items: center;
    .el-icon {
      font-size: 18px;
      margin-right: 10px;
    }
  }
  .el-row {
    display: flex;
    align-items: center;
    .el-dropdown {
    margin-left: 12px;
    margin-right: 12px;
    .el-button {
      outline: none;
    }
  }
  }
}
:deep() {
  .el-dropdown-menu__item:not(.is-disabled).active {
    background-color: var(--el-dropdown-menuItem-hover-fill);
    color: var(--el-dropdown-menuItem-hover-color);
  }
}
</style>
