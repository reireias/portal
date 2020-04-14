<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon />
      <v-toolbar-title>Portal</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container v-if="!loading">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['loading']),
  },
}
</script>
