<template>
  <v-container>
    <v-row v-if="error" justify="center">
      <v-col cols="12" md="6">
        <v-alert type="error">認証に失敗しました。</v-alert>
      </v-col>
    </v-row>
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
      password: null,
      error: false
    }
  },
  methods: {
    async onClick() {
      try {
        this.error = false
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
        this.$router.push('/')
      } catch {
        this.error = true
      }
    }
  }
}
</script>
