<template>
  <q-layout view="LHh lpr lff">
    <q-header elevated class="bg-light-blue-12 text-black">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          <q-avatar square color="gray">
            <img src="~assets/logo-clear.svg" />
          </q-avatar>
          Power Up &mdash; explore the wonders of nuclear power
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-1">
      <q-list>
        <q-item-label header class="text-grey-8"> Features </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar square color="gray">
            <img src="~assets/logo-dark.svg" />
          </q-avatar>
          Copyright &copy; 2021 Happy Spirit Publishing
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Home',
    caption: 'Home Page',
    icon: 'home',
    link: '/',
  },
  {
    title: 'Articles',
    caption: 'Publish Articles',
    icon: 'article',
    link: '/articles',
  },
  {
    title: 'Simulations',
    caption: 'Play with nuclear simulations',
    icon: 'power',
    link: '/sims',
  },
  {
    title: 'Course Catalog',
    caption: 'Discover lessons about nuclear power',
    icon: 'collections',
    link: '/explore',
  },
  {
    title: 'Profile',
    caption: 'Your member profile (member)',
    icon: 'person',
    link: '/profile',
  },
  {
    title: 'Course Composer',
    caption: 'Organize and promote content (editor)',
    icon: 'sort',
    link: '/composer',
  },
  {
    title: 'Drafting Table',
    caption: 'Create and edit content (editor)',
    icon: 'create',
    link: '/draft',
  },
  {
    title: 'Site Administration',
    caption: 'Manage members and control access (admin)',
    icon: 'manage_accounts',
    link: '/admin',
  },
]

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    EssentialLink,
  },
  setup() {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen: leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    }
  },
})
</script>
