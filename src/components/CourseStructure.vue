<template>
  <h1>Lessons</h1>
  <div class="q-pa-md" style="max-width: 300px">
    <div class="q-gutter-md">
      <q-select
        v-model="activeLesson"
        outlined
        :options="lessonList"
        option-value="id"
        option-label="title"
        map-options
        label="Lessons"
      />
    </div>
  </div>
  <div>Active Lesson: ({{ activeLesson.id }}) {{ activeLesson.title }}</div>
  <div v-for="unit in course" :key="unit.unit">
    <div class="unit-header">Unit: {{ unit.unit }}</div>
    <ul>
      <li v-for="lesson in unit.lessons" :key="lesson.title">
        {{ lesson.title }}
      </li>
    </ul>
  </div>
</template>

// TODO move state into store or use new approach
<script>
import { ref } from 'vue'
export default {
  setup() {
    return {
      }
  },
  data() {
    return {
      activeLesson: {
        id: 1,
        title: 'hello world'
      },
      course: [
        {
          unit: 'Fission',
          lessons: [
            { id: 1, title: 'Why Atoms Split' },
            { id: 2, title: 'Fission Math' },
            { id: 3, title: 'Chain Reactions' },
            { id: 4, title: 'Controlling Neutrons' },
            { id: 5, title: 'Properties of Isotopes' },
          ],
        },
        {
          unit: 'Radiation',
          lessons: [
            { id: 6, title: 'Radiation is Everywhere' },
            { id: 7, title: 'The Right Dose for the Job' },
            { id: 8, title: 'Effects on Materials' },
          ],
        },
        {
          unit: 'Controlled Nuclear Reactions',
          lessons: [
            { id: 9, title: 'Building Bombs' },
            { id: 10, title: 'Generating Power' },
            { id: 11, title: 'Medical Treatment' },
            { id: 12, title: 'Scientific and Medical Breakthroughs' },
          ],
        },
        {
          unit: 'Generation IV Nuclear Power',
          lessons: [
            { id: 13, title: 'Stable, Safe, Clean Power Production' },
            { id: 14, title: 'Types of Gen IV Nuclear Reactors' },
            { id: 15, title: 'They Can Almost Fit in Your Pocket (SMRs)' },
            { id: 16, title: 'Safety Factors' },
            { id: 17, title: 'What About Accidents?' },
          ],
        },
        {
          unit: 'Famous Nuclear Accidents',
          lessons: [
            { id: 18, title: '9 Mile Island' },
            { id: 19, title: 'Chernobyl' },
            { id: 20, title: 'Fukushima' },
          ],
        },
      ],
    }
  },
  computed: {
    lessonList() {
      let all = []
      this.course.forEach((unit) => all.push(...unit.lessons))
      return all

      // return this.course.forEach((unit) => {
      //   all.concat(unit.lessons)
      // })
    },
  },
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: xx-large;
  font-weight: bold;
  margin: 0;
}
.unit-header {
  font-size: large;
  font-weight: bold;
  color: yellow;
  background-color: slategray;
  padding-left: 1em;
}
</style>
