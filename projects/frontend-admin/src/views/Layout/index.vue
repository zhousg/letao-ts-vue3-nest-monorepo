<script setup lang="ts">
import { SwitchButton } from '@element-plus/icons-vue'
import LayoutMenu from './components/LayoutMenu.vue'
import LayoutHeader from './components/LayoutHeader.vue'
</script>

<template>
  <el-container class="layout">
    <el-aside>
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
      <LayoutHeader />
      <el-main> <router-view /></el-main>
      <el-footer>
        <div class="copyright">
          Copyright © 2023-present Shugang·Zhou - {{ $t('sys.copyright') }}
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
    background-color: var(--el-fill-color-blank);
    height: 100%;
    display: flex;
    flex-direction: column;
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
