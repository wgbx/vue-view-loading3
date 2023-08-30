<script setup lang="ts">
defineOptions({ name: 'playground' })

import ViewLoading from '../../dist/vue3-view-loading.js'

function getFetch() {
  return new Promise((_, reject) => {
    setTimeout(reject, 3000)
  })
}
</script>

<template>
  <ViewLoading :fetch="getFetch" height="10vh">
    <div>playground</div>
  </ViewLoading>
</template>
