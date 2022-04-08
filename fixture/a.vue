<script setup>
import A from './a.vue'
console.log('A ==> ', A)
</script>

<template>
  <div>
    <slot name="header" />
    <slot name="footer" />
  </div>
</template>

<style>
.css {
  font-size: 12px;
}
</style>
