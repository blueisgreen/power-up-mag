<template>
  <q-video :ratio="16 / 9" :src="video.url" />
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
