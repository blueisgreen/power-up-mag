<template>
  <q-page class="q-pa-md">
    <h1>Course Composer</h1>
    <ul>
      <li v-for="course in courses" :key="course.id">{{ course.title }}</li>
    </ul>
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue'
import { api } from '../boot/axios'
import { useQuasar } from 'quasar'

export default {
  setup() {
    const $q = useQuasar()
    const courses = ref(null)
    function loadData() {
      api
        .get('/courses')
        .then((response) => {
          courses.value = response.data
        })
        .catch(() => {
          $q.notify({
            color: 'negative',
            position: 'top',
            messgae: 'Loading failed',
            icon: 'report_problem',
          })
        })
    }
    onMounted(() => loadData())

    return {
      courses
    }
  },
}
</script>

<style scoped></style>
