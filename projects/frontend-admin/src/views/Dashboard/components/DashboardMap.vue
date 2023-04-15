<script setup lang="ts">
import AMapLoader from '@amap/amap-jsapi-loader'
import { ArrowDown } from '@element-plus/icons-vue'
import { onMounted, ref, shallowRef, watch } from 'vue'
import { useAppStore } from '@/stores'

window._AMapSecurityConfig = {
  securityJsCode: '415e917da833efcf2d5b69f4d821784b',
}
const appStore = useAppStore()
const map = shallowRef()
const capitals = ref([
  {
    name: '北京市',
    center: [116.407394, 39.904211],
    data: 130,
  },
  {
    name: '重庆市',
    center: [106.551643, 29.562849],
    data: 50,
  },
  {
    name: '广东省',
    center: [113.26641, 23.132324],
    data: 80,
  },
])
onMounted(async () => {
  AMapLoader.load({
    key: '4eed3d61125c8b9c168fc22414aaef7e',
    version: '2.0',
  }).then((AMap) => {
    map.value = new AMap.Map('map', {
      center: [104, 32],
      mapStyle: `amap://styles/${
        appStore.settings.dark ? 'grey' : 'whitesmoke'
      }`,
      zoom: 3,
      showLabel: false,
    })
    for (let i = 0; i < capitals.value.length; i += 1) {
      const { center, data, name } = capitals.value[i]
      const circleMarker = new AMap.CircleMarker({
        center,
        radius: data / 10,
        strokeColor: '#004E86',
        strokeWeight: 2,
        strokeOpacity: 0.4,
        fillColor: '#004E86',
        fillOpacity: 0.6,
        zIndex: 10,
        bubble: true,
        cursor: 'pointer',
        clickable: true,
      })
      circleMarker.setMap(map.value)
      circleMarker.on('mouseover', () => {
        console.log(name)
      })
    }
  })
})

watch(
  () => appStore.settings.dark,
  () => {
    map.value.setMapStyle(
      `amap://styles/${appStore.settings.dark ? 'grey' : 'whitesmoke'}`
    )
  }
)
</script>

<template>
  <el-card shadow="never" class="dashboard-map">
    <template #header>
      <div class="card-header">
        <span>Sales by Locations</span>
        <el-dropdown>
          <div class="el-dropdown-link">
            <span>City List</span>
            <el-icon>
              <ArrowDown />
            </el-icon>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item v-for="ca in capitals" :key="ca.name">
                {{ ca.name }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </template>
    <div id="map" />
  </el-card>
</template>

<style lang="scss" scoped>
.dashboard-map {
  border: none;
  height: 500px;
  box-sizing: border-box;
  .card-header {
    display: flex;
    justify-content: space-between;
    .el-dropdown {
      &-link {
        outline: none !important;
        display: flex;
        align-items: center;
        cursor: pointer;
        .el-icon {
          margin-left: 5px;
        }
      }
    }
  }
}
#map {
  height: 400px;
}
:deep() {
  .amap-logo {
    display: none;
    opacity: 0 !important;
  }
  .amap-copyright {
    opacity: 0;
  }
}
</style>
