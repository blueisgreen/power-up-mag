<template>
  <q-card flat bordered>
    <q-card-section v-html="content" />
  </q-card>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
