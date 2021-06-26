<template>
    <q-btn v-if="isLoggedIn" color="teal" :to="{ name: 'memberProfile' }">
      <q-icon left name="account_circle" />
      <div>Account</div>
    </q-btn>
</template>

<script>
export default {
  props: { isLoggedIn: Boolean }
}
</script>

<style></style>
