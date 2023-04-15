<script setup lang="ts">
import {
  Grid,
  HelpFilled,
  Setting,
  Shop,
  UserFilled,
} from '@element-plus/icons-vue'
</script>

<template>
  <el-menu default-active="/dashboard" router :default-openeds="['/product']">
    <el-menu-item index="/dashboard">
      <el-icon><HelpFilled /></el-icon>
      <span>{{ $t('menu.dashboard') }}</span>
    </el-menu-item>
    <el-sub-menu index="/product">
      <template #title>
        <el-icon><Shop /></el-icon>
        <span>{{ $t('menu.product') }}</span>
      </template>
      <el-menu-item index="/category">
        {{ $t('menu.category') }}
      </el-menu-item>
      <el-menu-item index="/picture">
        {{ $t('menu.picture') }}
      </el-menu-item>
      <el-menu-item index="/goods">
        {{ $t('menu.goods') }}
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/employee">
      <el-icon><Grid /></el-icon>
      <span>{{ $t('menu.employee') }}</span>
    </el-menu-item>
    <el-menu-item index="/user">
      <el-icon><UserFilled /></el-icon>
      <span>{{ $t('menu.user') }}</span>
    </el-menu-item>
    <el-menu-item index="/settings">
      <el-icon><Setting /></el-icon>
      <span>{{ $t('menu.settings') }}</span>
    </el-menu-item>
  </el-menu>
</template>

<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
.el-sub-menu {
  .el-menu-item {
    text-indent: 16px;
  }
}
</style>
