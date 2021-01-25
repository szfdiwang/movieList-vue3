<template>
  <div class="movie-box">
    <div class="movie-preview-box">
      <div ref="playerRef" class="pleyer"></div>
    </div>
    <!-- need api to query the movie detail -->
    {{ movieId }}
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import DPlayer from 'dplayer'
// import { useRequest } from '@/utils/request'
export default defineComponent({
  name: 'Detail',
  setup() {
    const route = useRoute()
    const playerRef = ref<HTMLElement | null>(null)
    const movieId = computed(() => {
      return route.params.id
    })
    onMounted(() => {
      new DPlayer({
        container: playerRef.value,
        video: {
          url: '/video/demo.mp4'
        },
        theme: '#FFB6C1'
      })
    })
    const reqUrl = computed(() => `/api/movie/${route.params.id}`)

    // const { data, loading, fetch } = useRequest<MovieData>(reqUrl, {
    //   initialData,
    //   onSuccess(result) {
    //     if (!playerRef.value) return
    //     const { movie } = result.data
    //     new DPlayer({
    //       container: playerRef.value,
    //       video: {
    //         url: movie.video,
    //         pic: movie.cover
    //       }
    //     })
    //   }
    // })

    /* watch 用法 在ref 和 reactive时不一样 reactive数据要先用fn => */
    const fetch = () => {
      console.log('fetching')
    }
    watch(
      // movieId,
      () => route.params.id,
      () => {
        fetch()
      }
    )

    return {
      movieId,
      playerRef,
      reqUrl
    }
  }
})
</script>

<style lang="scss" scoped>
.movie-box {
}
</style>
