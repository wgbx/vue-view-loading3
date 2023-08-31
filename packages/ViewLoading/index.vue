<script lang="ts" setup>
import { onMounted, ref, useSlots } from 'vue'
import Svg from './components/Svg.vue'

defineOptions({ name: 'ViewLoading' })

const props = defineProps({
  fetch: {
    type: Function,
    required: true
  },
  height: {
    type: String,
    default: '90vh'
  }
})

const slots = useSlots()
const status = ref('loading')

onMounted(() => {
  getFetch()
})

async function getFetch() {
  const { fetch } = props
  if (typeof fetch === 'function') {
    try {
      await fetch()
      status.value = 'success'
    } catch {
      status.value = 'fail'
    }
  } else {
    console.error('传入的fetch字段不是函数')
  }
}

function handleReload() {
  status.value = 'loading'
  getFetch()
}
</script>

<template>
  <div class="view-warp">
    <template v-if="status === 'loading'">
      <slot v-if="slots.loading" name="loading" />
      <div v-else class="view-loading" :style="{ height }">
        <Svg />
        <div class="view-loading-text">加载中...</div>
      </div>
    </template>
    <slot v-if="status === 'success'" />
    <template v-if="status === 'fail'">
      <slot v-if="slots.fail" name="fail" />
      <div v-else class="view-fail-text" @click="handleReload">加载失败，点击重试</div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.view-warp {
  height: 100%;
  .view-loading {
    max-width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    overflow: hidden;
    color: #999;
    svg {
      width: 28px;
    }
    .view-loading-text {
      margin: 10px 0 0;
    }
  }

  .view-fail-text {
    color: #999;
    text-align: center;
    margin: 30px 0 0;
  }
}
</style>
