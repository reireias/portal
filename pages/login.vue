<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-text-field v-model="email" label="Email"></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-text-field
          v-model="password"
          type="password"
          label="Password"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-btn @click="onClick">login</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import firebase from '@/plugins/firebase'

export default {
  data() {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    async onClick() {
      await firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
    }
  }
}
</script>
