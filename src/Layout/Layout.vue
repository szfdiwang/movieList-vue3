<template>
  <div class="Layout-box">
    <Header></Header>
    <router-view />
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
}
</style>
