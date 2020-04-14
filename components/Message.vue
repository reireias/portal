<template>
  <v-card class="message">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          {{ message.text }}
        </v-col>
        <v-col cols="12" sm="3">
          {{ message.client }}
        </v-col>
        <v-col cols="12" sm="3">
          {{ createdAt }}
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import dateformat from 'dateformat'

export default {
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
  computed: {
    createdAt() {
      return dateformat(this.message.createdAt.toDate(), 'yyyy/mm/dd HH:MM:ss')
    },
  },
}
</script>

<style>
.message {
  width: 100%;
}
</style>
