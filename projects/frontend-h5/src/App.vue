<script setup lang="ts">
import axios from 'axios'

axios.get('http://localhost:3000/hello').then((res) => {
  console.log(res)
})
</script>

<template>
  <div class="app">
    app
    <div class="box">
      box
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app {
  color: red;
  .box {
    color: green;
  }
}
</style>
