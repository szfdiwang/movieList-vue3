<template>
  <div ref="wrapper" class="scroll-wrapper">
    <div>
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, onActivated, watch } from 'vue'
// 初始化BetterScroll
import BScroll from '@better-scroll/core'
import PullUp from '@better-scroll/pull-up'
import ObserveDOM from '@better-scroll/observe-dom'
BScroll.use(ObserveDOM).use(PullUp)
export default defineComponent({
  name: 'Scroll',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    pullUpLoad: {
      type: [Boolean, Object],
      default: false
    }
  },
  setup(props, { emit }) {
    const wrapper = ref<HTMLElement>()
    const scroll = ref<BScroll>()
    console.log(wrapper)
    console.log(scroll)
    /* 刷新滚动 */
    const refresh = () => {
      scroll.value && scroll.value.refresh()
    }
    /* 初始化滚动 */
    const initScroll = () => {
      if (!wrapper.value) {
        return
      }
      scroll.value = new BScroll(wrapper.value, {
        bounce: false,
        click: true,
        pullDownRefresh: {
          threshold: 30, // 下拉距离超过30px触发pullingDown事件
          stop: 20 // 回弹停留在距离顶部20px的位置
        },
        pullUpLoad: {
          threshold: -30 // 当上拉距离超过30px时触发 pullingUp 事件
        }, // props.pullUpLoad, // 上拉加载 内容由父组件传递
        observeDOM: true // 观察scrollHeight或scrollWidth
      })
      if (props.pullUpLoad) {
        scroll.value.on('pullingUp', () => {
          emit('pulling-up')
        })
      }
    }
    /* 强制刷新，停止滚动 */
    const forceUpdate = () => {
      setTimeout(() => {
        refresh()
      }, 30)

      if (props.pullUpLoad && scroll.value) {
        scroll.value.finishPullUp()
        refresh()
      }
    }
    /* 初始化 */
    onMounted(() => {
      initScroll()
    })
    /* keepAlive里内容变化时 */
    onActivated(() => {
      if (props.data.length) {
        refresh()
      }
    })
    /* 数据源改变，强制刷新 */
    watch(
      () => props.data,
      () => {
        // setTimeout(() => {
        forceUpdate()
        // }, 1000);
      }
    )
    return {
      wrapper
    }
  }
})
</script>
<style lang="scss" scoped>
.scroll-wrapper {
  height: 100%;
  overflow: hidden;
}
</style>
