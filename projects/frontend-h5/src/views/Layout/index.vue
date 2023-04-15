<script setup lang="ts"></script>

<template>
  <div class="layout-page">
    <router-view />
    <van-tabbar route>
      <van-tabbar-item to="/home">
        首页
        <template #icon="{ active }">
          <van-icon :name="`wap-home${active ? '' : '-o'}`" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/shop">
        商城
        <template #icon="{ active }">
          <van-icon :name="`shop${active ? '' : '-o'}`" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/member">
        会员中心
        <template #icon="{ active }">
          <div class="vip" :class="{ active }">
            <le-icon name="vip" />
          </div>
          <i class="keep" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/cart">
        购物车
        <template #icon="{ active }">
          <van-icon :name="`shopping-cart${active ? '' : '-o'}`" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/user">
        我的
        <template #icon="{ active }">
          <van-icon :name="`manager${active ? '' : '-o'}`" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped>
.layout-page {
  --van-tabbar-item-text-color: #848484;
  --van-tabbar-item-font-size: 11px;
  .vip {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(-50%, -100%);
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 9999;
    color: #fff;
    box-shadow: 0 0 10px var(--le-primary-light);
    background-color: var(--le-primary);
    transition: transform 0.5s;
    &.active {
      transform: translate(-50%, -100%) scale(1.1);
    }
  }
  .keep {
    width: 16px;
    height: 16px;
    display: inline-block;
  }
}
</style>
