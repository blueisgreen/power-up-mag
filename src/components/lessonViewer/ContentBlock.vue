<template>
  <div>
    <rich-content-block
      v-if="content.type === 'text'"
      :content="content.content"
    />
    <video-block v-if="content.type === 'video'" :video="content.video" />
    <image-block v-if="content.type === 'image'" :image="content.image" />
  </div>
</template>

<script>
import RichContentBlock from './RichContentBlock.vue'
import VideoBlock from './VideoBlock.vue'
import ImageBlock from './ImageBlock.vue'

export default {
  components: { RichContentBlock, VideoBlock, ImageBlock },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
