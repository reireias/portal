<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon />
      <v-toolbar-title>Portal</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
