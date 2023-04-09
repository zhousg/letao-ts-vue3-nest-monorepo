<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { useAppStore } from './stores'

const appStore = useAppStore()
</script>

<template>
  <el-config-provider :locale="appStore.lang === 'zh' ? zhCn : en">
    <router-view />
  </el-config-provider>
</template>

<style lang="scss" scoped></style>
