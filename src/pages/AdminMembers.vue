<template>
  <q-page class="flex flex-center">
    <div class="row">
      <h1>Administration</h1>
      <h2>Members</h2>
      <div class="q-pa-md" style="max-width: 350px">
        <q-list v-for="member in members" :key="member.id">
          <q-item v-ripple clickable>
            <q-item-section>
              {{ member.screenName }}
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'AdminMembers',
  data() {
    return {
      members: [
        {
          id: 1,
          screenName: 'Zanzibar',
          fullName: 'Zanzibar the Explainer',
          email: 'zanzibar@geniv-nuclear.com',
          joinedOn: '2020 Jun 26',
          roles: ['member', 'admin'],
        },
        {
          id: 2,
          screenName: 'Bubba',
          fullName: 'Bubba B. Gump',
          email: 'bubba@happyspiritgames.com',
          joinedOn: '2020 Dec 15',
          roles: ['member'],
        },
        {
          id: 3,
          screenName: 'Ventress',
          fullName: 'Ventress the Witch',
          email: 'ventress@nightwitches.org',
          joinedOn: '2020 Nov 3',
          roles: ['member', 'author'],
        },
      ],
    }
  },
}
</script>

<style></style>
