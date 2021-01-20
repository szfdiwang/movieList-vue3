<template>
  <div class="Layout-box">
    <Header></Header>
    <div class="main-app">
      <Router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
export default defineComponent({
  components: {
    Header
  }
})
</script>
<style lang="scss">
.Layout-box {
  display: flex;
  height: 100%;
  .main-app {
    width: 100%;
    margin-top: 60px;
    min-height: calc(100vh - 60px);
  }
}
</style>
