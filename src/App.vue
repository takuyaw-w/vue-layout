<script setup lang="ts">
import { provide, shallowRef } from 'vue'
import { router } from './router'
import layouts from './layouts'

const layout = shallowRef('div');

router.afterEach((to) => {
  layout.value = layouts[to.meta.layout] || 'div'
})

provide('app:layout', layout)
</script>

<template>
  <header class="bg-black text-white has-background-light">
    <h1>header</h1>
    <ul class="flex gap-3 py-2">
      <li>
        <RouterLink to="/">home</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">about</RouterLink>
      </li>
    </ul>
  </header>

  <main>
    <component :is="layout || div">
      <RouterView />
    </component>
  </main>
</template>

<style scoped></style>
