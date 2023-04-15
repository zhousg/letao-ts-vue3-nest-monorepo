<script setup lang="ts">
import { onMounted } from 'vue'
import DashboardBar from './components/DashboardBar.vue'
import DashboardCard from './components/DashboardCard.vue'
import DashboardMap from './components/DashboardMap.vue'
import { getDashboardEntryData } from '@/service/statistics'

onMounted(async () => {
  const res = await getDashboardEntryData()
  console.log(res)
})
</script>

<template>
  <div class="dashboard-page">
    <el-row :gutter="20" class="dashboard-entry">
      <el-col :xs="24" :sm="12" :lg="6">
        <div class="sales">
          <h3 class="sales-title">Sales Volume</h3>
          <div class="sales-body">
            <span>&yen;</span>
            <span>394,188.12</span>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :lg="6">
        <DashboardCard
          title="Number of Trades"
          data="6459"
          trend="-32 Trades"
          :charts="[1, 4, 8, 6, 8, 2, 8, 4]"
        />
      </el-col>
      <el-col :xs="24" :sm="12" :lg="6">
        <DashboardCard
          title="Invested Amount"
          data="¥3.42M"
          trend="+¥12k"
          :charts="[1, 14, 8, 6, 8, 2, 8, 4]"
        />
      </el-col>
      <el-col :xs="24" :sm="12" :lg="6">
        <DashboardCard
          title="Profit Ration"
          data="12.57%"
          trend="+2.57%"
          :charts="[1, 4, 8, 6, 8, 14, 8, 4]"
        />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :sm="16">
        <DashboardBar />
      </el-col>
      <el-col :sm="8">
        <DashboardMap />
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.dashboard {
  &-page {
    .el-col {
      margin-bottom: 20px;
    }
  }
  &-entry {
    .sales {
      border-radius: 8px;
      background-image: linear-gradient(
        to right,
        var(--primary-clear),
        var(--primary-dull)
      );
      color: var(--primary-visible);
      padding: 30px;
      height: 132px;
      box-sizing: border-box;
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
  }
}
</style>
