<template>
  <div class="q-pa-md">
    <q-card flat bordered>
      <q-card-section>
        <strong>ID:</strong> {{ lessonId }} <br/>
        <strong>Title:</strong> {{ lessonTitle }} <br/>
        <strong>Created On:</strong> {{ createdOn }} <br/>
      </q-card-section>
      <content-block
        v-for="block in getBlocks"
        :key="block.id"
        :content="block"
      />
    </q-card>
    <!-- <content-block :content="videoBlock" /> -->
    <!-- <content-block :content="imageBlock" /> -->
  </div>
</template>

<script>
import ContentBlock from './lessonViewer/ContentBlock.vue'
export default {
  components: { ContentBlock },
  data() {
    const $store = useStore()
    return {
      editor: 'Let me tell you about <b>nuclear</b> power plants.',
      contentBlocks: ['blargy123', 'blargy124', 'blargy125'],
      blocks: [
        {
          id: 'blargy123',
          type: 'text',
          content: 'Part 1 is first.',
        },
        {
          id: 'blargy124',
          type: 'text',
          content: 'Then part 2.',
        },
        {
          id: 'blargy125',
          type: 'text',
          content: 'Finally part 3. The End',
        },
      ],
      lessonId: 'waaah',
      lessonTitle: 'waaah',
      createdOn: new Date(),
      activeSegment: 'aaab',
      videoBlock: {
        id: 'blabba',
        type: 'video',
        video: {
          url: 'https://www.youtube.com/embed/wyrdhWc_gsY?controls=0',
          title: 'Advanced Nuclear Energy',
        },
      },
      imageBlock: {
        id: 'imgblah',
        type: 'image',
        image: {
          url: 'https://cdn.quasar.dev/img/parallax2.jpg',
          alt: 'Nuclear Power Plant',
        },
      },
    }
  },
  computed: {
    getBlocks() {
      return this.contentBlocks.map((blockId) =>
        this.blocks.find((block) => block.id === blockId)
      )
    },
  },
}
</script>

<style lang="scss" scoped></style>
