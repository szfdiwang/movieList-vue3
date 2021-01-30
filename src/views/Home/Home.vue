<template>
  <div class="home-box">
    <Scroll>
      <Card :movieList="movieList"></Card>
    </Scroll>
  </div>
</template>
<script lang="ts">
import Card from '@/components/global/Card.vue'
import { defineComponent, reactive, computed, onMounted } from 'vue'
import { Movie, MovieList } from '@/types/movie'
import api from '@/api'
export default defineComponent({
  components: { Card },
  name: 'Home',
  setup() {
    const score = computed((): string => {
      return Math.floor(Math.random() * 10) + '.' + Math.floor(Math.random() * 10)
    })

    const computedScore = (): string => {
      return Math.floor(Math.random() * 10) + '.' + Math.floor(Math.random() * 10)
    }
    const movieList: MovieList<Movie> = reactive({
      title: '正在热映',
      list: [
        { id: '001', name: '最终列车', score: computedScore() },
        { id: '002', name: '解放碑', score: computedScore() },
        { id: '003', name: '神秘河', score: computedScore() },
        {
          id: '004',
          name: '肖申克的救赎',
          score: computedScore()
        },
        { id: '005', name: '十宗罪', score: computedScore() },
        { id: '006', name: '爱乐之城', score: computedScore() },
        { id: '007', name: '霸王别姬', score: computedScore() },
        { id: '008', name: '神话', score: computedScore() },
        { id: '009', name: '天空之城', score: computedScore() },
        { id: '010', name: '上海堡垒', score: computedScore() },
        { id: '011', name: '三体', score: computedScore() },
        { id: '012', name: '神雕侠侣', score: computedScore() },
        { id: '013', name: '笑傲江湖', score: computedScore() },
        { id: '014', name: '楚留香', score: computedScore() },
        { id: '015', name: '陆小凤', score: computedScore() },
        { id: '016', name: '雪山飞狐', score: computedScore() },
        { id: '017', name: '梦断蓝桥', score: computedScore() },
        { id: '018', name: '伸冤人', score: computedScore() },
        { id: '019', name: '黄海', score: computedScore() }
      ]
    })

    onMounted(() => {
      console.log('1111')

      api.queryMovieByPage({ curPage: 1, pageSize: 10 }).then(res => {
        console.log(res)
        movieList.list = res.data
      })
    })

    return {
      movieList,
      score
    }
  }
})
</script>
<style lang="scss" scoped>
.home-box {
  padding: 15px;
}
</style>
