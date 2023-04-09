<script setup lang="ts">
import { onMounted, ref } from 'vue'
import echarts, { type ECOption } from '@/echarts'

const props = defineProps<{
  title: string
  data: string
  trend: string
  charts: number[]
}>()

const lineChart = ref<HTMLElement>()
onMounted(() => {
  const chart = echarts.init(lineChart.value!)
  const option: ECOption = {
    xAxis: {
      type: 'category',
      show: false,
    },
    yAxis: {
      type: 'value',
      show: false,
    },
    grid: {
      top: 10,
      bottom: 0,
      left: 0,
      right: 0,
    },
    tooltip: {
      trigger: 'axis',
      formatter: '{b}',
      padding: 2,
    },
    series: [
      {
        data: props.charts,
        type: 'line',
        smooth: true,
        symbol: 'none',
        lineStyle: {
          color: '#5470C6',
          width: 2,
        },
      },
    ],
  }
  chart.setOption(option)
})
</script>

<template>
  <el-card shadow="never" class="dashboard-card">
    <el-row>
      <el-col :span="12">
        <p class="text-title">
          {{ title }}
        </p>
        <h4 class="text-data">
          {{ data }}
        </h4>
      </el-col>
      <el-col :span="12">
        <div ref="lineChart" style="height: 100%" />
      </el-col>
    </el-row>
    <div class="text-desc">
      <el-tag :type="trend.startsWith('+') ? 'success' : 'danger'" size="small">
        {{ trend }}
      </el-tag>
      <span>Since last week</span>
    </div>
  </el-card>
</template>

<style lang="scss" scoped>
.dashboard-card {
  height: 132px;
  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  p {
    margin: 0;
  }
  .el-col {
    margin-bottom: 12px;
  }
  .text-title {
    color: var(--dull);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 12px;
    font-size: 14px;
  }
  .text-data {
    color: var(--clear);
    font-size: 20px;
  }
  .text-desc {
    .el-tag {
      border: none;
      margin-right: 5px;
    }
    color: var(--dull);
    font-size: 12px;
  }
}
</style>
