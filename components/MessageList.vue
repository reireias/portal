<template>
  <v-container>
    <v-scroll-x-transition group>
      <v-row
        v-for="message in messages"
        :key="message.id"
        class="message-row"
        justify="center"
      >
        <message :message="message"></message>
      </v-row>
    </v-scroll-x-transition>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Message from '@/components/Message'

export default {
  components: {
    Message,
  },
  computed: {
    ...mapGetters(['messages']),
  },
  created() {
    this.bindMessages()
  },
  methods: {
    ...mapActions(['bindMessages']),
  },
}
</script>

<style>
.message-row {
  margin: 10px;
}
</style>
