<template>
  <q-card
    class="my-card text-white"
    style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
  >
    <q-card-section>
      <div class="text-h6">{{ article.headline }}</div>
      <div class="text-subtitle2">by {{ article.byline }}</div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <span v-html="article.content" />
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  max-height: 250px;
  overflow-y: scroll;
}
</style>
