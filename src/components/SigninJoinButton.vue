<template>
  <q-btn
    color="primary"
    :icon="isLoggedIn ? 'clear' : 'login'"
    :label="isLoggedIn ? 'Sign Out' : 'Sign In / Join'"
    @click="handleClick"
  />
</template>

<script>
export default {
  props: {
    isLoggedIn: Boolean,
    handleClick: {
      type: Function,
      default: () => {},
    },
  },
  data: () => {
    return {
      labelText: isLoggedIn ? 'Sign In / Join' : 'Sign Out',
    }
  },
}
</script>

<style></style>
