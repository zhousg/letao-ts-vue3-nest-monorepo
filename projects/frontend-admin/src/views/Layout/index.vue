<script setup lang="ts">
import { SwitchButton } from '@element-plus/icons-vue'
import { useToggle, useWindowSize } from '@vueuse/core'
import { computed } from 'vue'
import LayoutMenu from './components/LayoutMenu.vue'
import LayoutHeader from './components/LayoutHeader.vue'

const { width } = useWindowSize()
const [show, toggle] = useToggle()
const isMobile = computed(() => width.value < 768)
const isShowMenu = computed(() => isMobile.value && show.value)
</script>

<template>
  <el-container class="layout">
    <Transition name="el-fade-in">
      <div v-if="isShowMenu" class="layer" @click="toggle()" />
    </Transition>
    <el-aside class="layout-aside" :class="{ mobile: isMobile, show: isShowMenu }">
      <div class="logo">
        <LeIcon name="logo" />
      </div>
      <LayoutMenu class="menu" />
      <a href="javascript:;" class="logout">
        <el-icon><SwitchButton /></el-icon>
        <span>{{ $t("sys.logout") }}</span>
      </a>
    </el-aside>
    <el-container class="layout-container">
      <LayoutHeader :is-mobile="isMobile" @expand="toggle" />
      <el-main> <router-view /></el-main>
      <el-footer>
        <div v-if="!isMobile" class="copyright">
          Copyright © 2023-present Shugang·Zhou - {{ $t('sys.copyright') }}
        </div>
      </el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.layout {
  height: 100%;
  &-aside {
    width: 200px;
    user-select: none;
    background-color: var(--el-fill-color-blank);
    height: 100%;
    display: flex;
    flex-direction: column;
    &.mobile {
      position: fixed;
      left: 0;
      top: 0;
      transform: translateX(-100%);
      transition: all .5s;
      z-index: 9999;
      &.show {
        transform: none;
      }
    }
  }
  .layer {
    background: #000;
    opacity: .4;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 9998;
  }
  .logo {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    .le-icon {
      font-size: 100px;
      height: 60px;
      color: var(--primary-dull);
    }
  }
  .menu {
    flex: 1;
    overflow-y: auto;
  }
  .logout {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--dull);
    text-decoration: none;
    .el-icon {
      padding-right: 5px;
      margin-top: 2px;
      font-size: 18px;
    }
  }
  &-container {
    .copyright {
      text-align: center;
      line-height: 60px;
      color: #999;
      font-size: 14px;
    }
  }
}
</style>
