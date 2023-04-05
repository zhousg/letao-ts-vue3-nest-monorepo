<script setup lang="ts">
import { FullScreen, Search, Setting, SwitchButton } from '@element-plus/icons-vue'
import LayoutMenu from './components/LayoutMenu.vue'
</script>

<template>
  <el-container class="layout">
    <el-aside>
      <div class="logo">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-LOGO" />
        </svg>
      </div>
      <LayoutMenu class="menu" />
      <a href="javascript:;" class="logout">
        <el-icon><SwitchButton /></el-icon>
        <span>Logout</span>
      </a>
    </el-aside>
    <el-container class="layout-container">
      <el-header>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">
            LeTao
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            Dashboard
          </el-breadcrumb-item>
        </el-breadcrumb>
        <el-row>
          <el-button :icon="Search" circle />
          <el-button :icon="FullScreen" circle />
          <el-button circle>
            <img src="@/icons/i18n.svg" alt="">
          </el-button>
          <el-button :icon="Setting" circle />
        </el-row>
      </el-header>
      <el-main> <router-view /></el-main>
      <el-footer>
        <div class="copyright">
          Copyright © 2023-present Shugang·Zhou 传智教育
        </div>
      </el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.layout {
  height: 100%;
  .el-aside {
    width: 200px;
    user-select: none;
    background-color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .logo {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 80px;
    .icon {
      width: 1em;
      height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
  }
  .menu {
    flex: 1;
  }
  .logout {
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
    text-decoration: none;
    .el-icon {
      padding-right: 5px;
      margin-top: 2px;
    }
  }
  .el-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
