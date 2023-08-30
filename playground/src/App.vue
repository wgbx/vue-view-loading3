<script setup lang="ts">
defineOptions({ name: 'playground' })

import ViewLoading from '../../dist/ViewLoading.es.min.js';

function getFetch() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 3000)
  })
}
</script>

<template>
  <ViewLoading :fetch="getFetch">
    <div>playground </div>
    <template>
      <div>

      </div>
    </template>
  </ViewLoading>
</template>
