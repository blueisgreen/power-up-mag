<template>
  <q-page class="q-pa-md">
    <h4>Your Profile</h4>
    <div class="row">
      <member-profile-form />
      <div class="col-md-6">
        <ul>
          <li>UUID</li>
          <li>Real Name</li>
          <li>Screen Name</li>
          <li>Avatar</li>
          <li>Self Introduction</li>
          <li>Email</li>
          <li>Email Is Verified</li>
          <li>Google ID</li>
          <li>LinkedIn ID</li>
          <li>Twitter ID</li>
          <li>Joined On</li>
          <li>Roles</li>
          <li>Badges</li>
          <li>History</li>
        </ul>
      </div>
    </div>
  </q-page>
</template>

<script>
import MemberProfileForm from 'components/MemberProfileForm.vue'

export default {
  components: { MemberProfileForm },
}
</script>
