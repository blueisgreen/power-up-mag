<template>
  <div class="col-md-6">
    <q-form class="q-gutter-md" @submit="onSubmit" @reset="onReset">
      <q-input
        v-model="screenName"
        outlined
        label="Screen name *"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        v-model="email"
        filled
        label="Your email address *"
        lazy-rules
        :rules="[
          val =>
            (val !== null && val !== '') || 'Please type your email address',
        ]"
      />

      <q-input
        v-model="fullName"
        filled
        label="Your name"
      />

      <q-toggle v-model="acceptTerms" label="I accept the license and terms" />
      <a href="https://blue-is-green-1.herokuapp.com/Terms-of-Use/" target="_blank">See Terms of Use.</a>

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  name: 'MemberProfileForm',
  data() {
    return {
      fullName: 'Dave Mount',
      screenName: 'Zanzibar',
      email: 'zanzibar@happyspiritpubs.com',
      acceptTerms: false,
    }
  },
  methods: {
    onSubmit() {
      if (this.acceptTerms !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first',
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted',
        })
      }
    },

    onReset() {
      this.fullName = null
      this.screenName = null
      this.email = null
      this.acceptTerms = false
    },
  },
}
</script>
