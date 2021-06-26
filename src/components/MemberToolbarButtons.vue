<template>
  <div class="q-pa-md q-gutter-sm">
    <account-access-button :is-logged-in="loggedIn" />
    <signin-join-button :is-logged-in="loggedIn" :handle-click="toggleLoggedIn" />
  </div>
</template>

<script>
import SigninJoinButton from 'components/SigninJoinButton.vue'
import AccountAccessButton from 'components/AccountAccessButton.vue'

export default {
  name: 'MemberToolbarButtons',
  components: { SigninJoinButton, AccountAccessButton },
  data() {
    return {
      loggedIn: false
    }
  },
  methods: {
    toggleLoggedIn: function() {
      this.loggedIn = !this.loggedIn
    }
  }
}
</script>

<style></style>
