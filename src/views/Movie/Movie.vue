<template>
  <div class="movie-box">{{ movieId }}</div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: 'Detail',
  setup() {
    const route = useRoute()
    const movieId = computed(() => {
      console.log(route.params)
      return route.params.id
    })

    return {
      movieId
    }
  }
})
</script>

<style lang="scss" scoped>
.movie-box {
}
</style>
