<script setup lang="ts">
import { nextTick, onMounted, ref, shallowRef, watch } from 'vue'
import echarts from '@/echarts'
import { useAppStore } from '@/stores'
const barChart = ref<HTMLElement>()

const chart = shallowRef()
const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {
    left: '3%',
    right: '3%',
    bottom: '4%',
    top: '2%',
    containLabel: true,
  },
  yAxis: [
    {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#adb5bd',
        },
      },
      splitLine: {
        lineStyle: {
          color: '#f8f9fa',
        },
      },
    },
  ],
  xAxis: [
    {
      type: 'category',
      axisTick: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: '#f8f9fa',
        },
      },
      data: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
  ],
  series: [
    {
      name: 'Income',
      type: 'bar',
      stack: 'Total',
      barWidth: 6,
      emphasis: {
        focus: 'series',
      },
      data: [320, 302, 341, 374, 390, 450, 420, 323, 344, 400, 201],
    },
    {
      name: 'Expenses',
      type: 'bar',
      stack: 'Total',
      emphasis: {
        focus: 'series',
      },
      data: [-120, -132, -101, -134, -190, -230, -210, -100, -120, -170, -90],
    },
  ],
}

onMounted(() => {
  chart.value = echarts.init(barChart.value!)
  chart.value.setOption(option)
})

const appStore = useAppStore()
watch(
  () => appStore.settings.dark,
  async () => {
    option.yAxis[0].splitLine.lineStyle.color = appStore.settings.dark
      ? '#353c39'
      : '#f8f9fa'
    option.xAxis[0].axisLine.lineStyle.color = appStore.settings.dark
      ? '#353c39'
      : '#f8f9fa'
    await nextTick()
    chart.value.setOption(option)
  },
  { immediate: true }
)

const list = [
  { label: 'Coinmarketcap', trend: '+2.5%' },
  { label: 'Binance', trend: '+8.3%' },
  { label: 'Coinbase', trend: '-3.6%' },
  { label: 'Yobit', trend: '+2.5%' },
  { label: 'Bitfinex', trend: '-6.1%' },
]
</script>

<template>
  <el-card shadow="never" class="dashboard-bar">
    <template #header>
      <div class="card-header">
        <span>Market Overview</span>
        <div class="btn-group">
          <el-button> ALL </el-button>
          <el-button> 1M </el-button>
          <el-button> 6M </el-button>
          <el-button> 1Y </el-button>
        </div>
      </div>
    </template>
    <el-row>
      <el-col :xs="24" :sm="16">
        <div ref="barChart" style="height: 400px" />
      </el-col>
      <el-col :xs="24" :sm="8">
        <ul class="card-list">
          <li v-for="(item, i) in list" :key="i" class="card-item">
            <span class="index">{{ i }}</span>
            <span class="label">{{ item.label }}</span>
            <el-tag
              size="small"
              :type="item.trend.startsWith('+') ? 'success' : 'danger'"
            >
              {{ item.trend }}
            </el-tag>
          </li>
        </ul>
        <el-button type="primary" class="card-see">
          See All Balances →
        </el-button>
      </el-col>
    </el-row>
  </el-card>
</template>

<style lang="scss" scoped>
.dashboard-bar {
  width: 100%;
  height: 500px;
  box-sizing: border-box;
  border: none;
  :deep() {
    .el-card__header {
      border-bottom: none;
    }
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    .btn-group {
      .el-button {
        padding: 0 6px;
        font-size: 12px;
        color: var(--dull);
        margin-left: 6px;
      }
    }
  }
  .card-list {
    margin: 0;
    list-style: none;
    margin-top: 30px;
    li {
      display: flex;
      align-items: center;
      height: 50px;
      padding: 0;
      .index {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        background-color: var(--bg);
        text-align: center;
        line-height: 30px;
        margin-right: 10px;
      }
      .label {
        margin-right: 10px;
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .el-tag {
        border: none;
        margin-right: 5px;
      }
    }
  }
  .card-see {
    margin-left: 50px;
    margin-top: 50px;
  }
}
</style>
