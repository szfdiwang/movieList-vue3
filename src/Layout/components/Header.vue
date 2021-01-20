<template>
  <div class="header-box">
    <div class="logo-box">
      <i class="logo"></i>
    </div>
    <div class="tabs-box">
      <ul>
        <li
          @click="activeFn(tab)"
          :class="{ active: curTab === tab.id }"
          class="tab-box pointer"
          v-for="tab in tabs"
          :key="tab.id"
        >
          <p>{{ tab.name }}</p>
        </li>
      </ul>
    </div>
    <div class="user-box">
      <img src="../../assets/imgs/user.svg" alt="用户" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
interface Tab {
  id: string
  name: string
  route: string
}
export default defineComponent({
  setup() {
    const router = useRouter()
    const curTab = ref<string | number>('1')
    const activeFn = (tab: Tab) => {
      curTab.value = tab.id
      router.push({ name: tab.route })
    }

    const tabs: Tab[] = reactive([
      {
        id: '1',
        name: '首页',
        route: 'Home'
      },
      {
        id: '2',
        name: '分类',
        route: 'Class'
      },
      {
        id: '3',
        name: '榜单',
        route: 'Rank'
      },
      {
        id: '4',
        name: '搜索',
        route: 'Search'
      }
    ])

    return {
      tabs,
      curTab,
      activeFn
    }
  }
})
</script>
<style lang="scss" scoped>
.header-box {
  position: fixed;
  display: flex;
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: #606266;
  background: #1c2635;
  z-index: 10000;
  .logo-box {
    width: 25%;
    height: 100%;
    display: flex;
    align-items: center;
    .logo {
      display: block;
      width: 100%;
      height: 50%;
      background: url('../../assets/imgs/movie.svg');
      background-size: 100% 100%;
    }
  }
  .tabs-box {
    width: 60%;
    height: 60px;
    & > ul {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      li {
        flex: 1;
      }
    }
    .active {
      color: #ffffff;
    }
  }
  .user-box {
    width: 15%;
    display: grid;
    align-items: center;
    justify-items: center;
  }
}
</style>
