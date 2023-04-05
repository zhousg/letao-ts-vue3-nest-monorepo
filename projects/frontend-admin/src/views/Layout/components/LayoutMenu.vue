<script setup lang="ts">
import { Grid, HelpFilled, Setting, Shop, UserFilled } from '@element-plus/icons-vue'
</script>

<template>
  <el-menu
    default-active="/dashboard"
    router
    :default-openeds="['/product']"
  >
    <el-menu-item index="/dashboard">
      <el-icon><HelpFilled /></el-icon>
      <span>Dashboard</span>
    </el-menu-item>
    <el-sub-menu index="/product">
      <template #title>
        <el-icon><Shop /></el-icon>
        <span>Product</span>
      </template>
      <el-menu-item index="/category">
        Category
      </el-menu-item>
      <el-menu-item index="/picture">
        Picture
      </el-menu-item>
      <el-menu-item index="/goods">
        Goods
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/employee">
      <el-icon><Grid /></el-icon>
      <span>Employee</span>
    </el-menu-item>
    <el-menu-item index="/user">
      <el-icon><UserFilled /></el-icon>
      <span>User</span>
    </el-menu-item>
    <el-menu-item index="/settings">
      <el-icon><Setting /></el-icon>
      <span>Settings</span>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
</style>
