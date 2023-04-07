<script setup lang="ts"></script>

<template>
  <div class="dashboard-page" style="height: 1000px">
    <el-row :gutter="20">
      <el-col :span="6" :xs="24" :sm="12" :lg="6">
        <div class="sales">
          <h3 class="sales-title">
            Sales Volume
          </h3>
          <div class="sales-body">
            <span>&yen;</span>
            <span>394,188.00</span>
          </div>
        </div>
      </el-col>
      <el-col :span="6" :xs="24" :sm="12" :lg="6" />
      <el-col :span="6" :xs="24" :sm="12" :lg="6" />
      <el-col :span="6" :xs="24" :sm="12" :lg="6" />
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.sales {
  border-radius: 8px;
  background-image: linear-gradient(to right, var(--primary-clear), var(--primary-dull));
  color: var(--primary-visible);
  padding: 30px;
  &-title {
    font-weight: 700;
    font-size: 14px;
    margin-bottom: 15px;
  }
  &-body {
    span:last-child {
      font-size: 2.4rem;
      line-height: 1;
      font-weight: 100;
    }
  }
}
</style>
