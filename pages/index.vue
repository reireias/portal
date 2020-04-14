<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <message-list></message-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MessageList from '@/components/MessageList'

export default {
  components: {
    MessageList,
  },
}
</script>
