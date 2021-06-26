<template>
  <q-img
    :src="image.url"
    :alt="image.alt"
    width="300px"
    crossorigin="anonymous"
  />
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
