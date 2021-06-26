<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>
<style>
h1, h2, h3, h4, h5, h6 {
  font-size: xx-large;
  font-weight: bold;
  color:cornflowerblue;
  line-height: 3rem;
  margin-block-end: 0;
}
h2 {
  font-size: x-large;
}
h3, h4, h5, h6 {
  font-size: large;
}
</style>