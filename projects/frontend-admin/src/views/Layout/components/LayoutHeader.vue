<script setup lang="ts">
import {
  Bell,
  Expand,
  FullScreen,
  Search,
  Setting,
} from '@element-plus/icons-vue'
import { useFullscreen } from '@vueuse/core'
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import LayoutDrawer from './LayoutDrawer.vue'
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
  if (!isSupported.value) return ElMessage('浏览器不支持全屏')
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
</script>

<template>
  <el-header class="layout-header">
    <div class="layout-header-left">
      <el-icon v-if="isMobile" @click="emit('expand')">
        <Expand />
      </el-icon>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }"> LeTao </el-breadcrumb-item>
        <el-breadcrumb-item>
          {{ $t('menu.dashboard') }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-row>
      <template v-if="!isMobile">
        <el-link :icon="Search" :underline="false" />
        <el-link :icon="Bell" :underline="false" />
        <el-link
          :icon="FullScreen"
          :underline="false"
          @click="onToggleScreen"
        />
        <el-dropdown
          trigger="click"
          placement="bottom-end"
          @command="onToggleLang"
        >
          <el-link :underline="false">
            <LeIcon name="i18n" />
          </el-link>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                command="en"
                :class="{ active: locale === 'en' }"
              >
                English
              </el-dropdown-item>
              <el-dropdown-item
                command="zh"
                :class="{ active: locale === 'zh' }"
              >
                中文简体
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
      <div class="user">
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <span class="user-name">admin</span>
      </div>
      <el-link :underline="false" :icon="Setting" @click="openDrawer" />
    </el-row>
  </el-header>
  <LayoutDrawer v-model="isShowDrawer" />
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
    .el-link {
      font-size: 18px;
      color: var(--clear);
      margin-left: 16px;
    }
    .user {
      display: flex;
      align-items: center;
      height: 100%;
      .el-avatar {
        margin-left: 16px;
      }
      &-name {
        font-size: 12px;
        padding-top: 4px;
        padding-left: 4px;
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
