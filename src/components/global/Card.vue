<template>
  <div class="card-container">
    <div class="list-title">
      <span>{{ movieList.title }}({{ movieList.list.length }})</span>
      <span>></span>
    </div>
    <div class="wrap-box">
      <div class="card-box pointer" @click="linkToMovie(item)" v-for="item in movieList.list" :key="item.id">
        <div class="image">
          <img :src="`${imgPreFix}https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2627027305.jpg`" alt="" />
        </div>
        <div class="name">
          <p>
            {{ item.name }}
          </p>
        </div>
        <em class="score">{{ item.score }}</em>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { useRouter } from 'vue-router'
import { defineComponent } from 'vue'
interface Movie {
  id: string
  name: string
  score: string
}
export default defineComponent({
  name: 'Card',
  props: {
    movieList: {
      type: Object,
      default: () => ({})
    }
  },

  setup(props, context) {
    console.log(props.movieList, context)
    const imgPreFix = 'https://images.weserv.nl/?url='
    const router = useRouter()
    const linkToMovie = (item: Movie) => {
      router.push({ path: `/Movie/${item.id}` })
    }
    return { linkToMovie, imgPreFix }
  }
})
</script>
<style lang="scss" scoped>
.card-container {
  .list-title {
    display: flex;
    justify-content: space-between;
  }
  .wrap-box {
    padding-top: 10px;
    display: grid;
    // grid-template-columns: 100px 100px 100px 100px;
    grid-template-columns: repeat(auto-fill, 24%);
    grid-column-gap: 1%;
    grid-template-rows: auto;
    overflow: hidden;
    .card-box {
      position: relative;
      .image {
        height: 80%;
        // display: flex;
        // align-items: center;
        // justify-content: center;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .name {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 20%;
        & > p {
          text-align: center;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 14px;
        }
      }
      .score {
        position: absolute;
        right: 10%;
        bottom: 20%;
        color: #ffb400;
        font-weight: bold;
        font-style: italic;
      }
    }
  }
}
</style>
