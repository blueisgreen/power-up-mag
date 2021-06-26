<template>
  <div style="max-width: 500px">
    <q-form>
      <div>Lesson</div>
      <q-input v-model="lessonTitle" outlined label="Lesson Title" />
      <hr />
      <div>Lesson Segment</div>
      <q-input
        v-model="newSegment.heading"
        outlined
        label="New Segment Heading"
      />
      <q-btn
        style="background: goldenrod; color: white"
        icon-right="add"
        label="Add Segment"
      />
      <div>.</div>
      <q-select
        v-model="activeSegment"
        outlined
        :options="listSegmentOptions"
        label="Segments"
      />
      <hr />
      <div>Content for Active Segment</div>
      <q-select
        v-model="selectedContentType"
        outlined
        :options="contentTypes"
        label="Content Type"
      />
      <q-btn
        style="background: goldenrod; color: white"
        icon-right="add"
        label="Add Content"
      />
      <q-select
        v-model="selectedContentType"
        outlined
        :options="contentTypes"
        label="Content Type"
      >
        <template #before>
          <q-icon name="event" />
        </template>

        <template #append>
          <q-btn round dense flat icon="add" />
        </template>
      </q-select>
    </q-form>
  </div>
  <!-- html content part -->
  <div class="q-pa-md q-gutter-sm">
    <!-- text content part -->
    <standard-editor :doc-name="lessonTitle" />

    <!-- video content part -->
    <q-form>
      <q-input v-model="video.url" outlined label="Video URL" />
    </q-form>

    <!-- image content part -->
    <q-form>
      <q-input v-model="image.url" outlined label="Image URL" />
      <q-input v-model="image.alt" outlined label="Alt text" />
    </q-form>
  </div>
</template>

<script>
import { ref } from 'vue'
import StandardEditor from 'components/StandardEditor.vue'

export default {
  components: { StandardEditor },
  setup() {
    return {
      text: ref(''),
      ph: ref(''),
      dense: ref(false),
    }
  },
  data() {
    return {
      editor: 'Let me tell you about <b>nuclear</b> power plants.',
      newSegment: {
        heading: '',
        content: '',
      },
      activeSegment: '',
      video: {
        url: 'https://www.youtube.com/embed/wyrdhWc_gsY?controls=0',
        title: 'Advanced Nuclear Energy',
      },
      image: {
        url: 'https://cdn.quasar.dev/img/parallax2.jpg',
        alt: 'Nuclear Power Plant',
      },
      contentTypes: ['text', 'video', 'image'],
      selectedContentType: '',
    }
  },
  computed: {
    listSegmentOptions() {
      const lessonPtr = this.$store.state.draftLesson
      const segmentOptions = lessonPtr.segments.map((segment) => {
        return {
          label: lessonPtr.segmentsById[segment].heading,
          value: lessonPtr.segmentsById[segment].id,
        }
      })
      return segmentOptions
    },
    lessonTitle: {
      get() {
        return this.$store.state.draftLesson.title
      },
      set(value) {
        this.$store.commit('draftLesson/updateTitle', value)
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
