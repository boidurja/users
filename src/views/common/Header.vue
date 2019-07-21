<template>
  <nav>
    <v-toolbar flat app clipped-left>
      <v-spacer></v-spacer>
      <v-toolbar-title>IQube Logo</v-toolbar-title>
      <v-toolbar-side-icon @click="showHideDrawer()"></v-toolbar-side-icon>
    </v-toolbar>
  </nav>
</template>

<script>
import { EventBus } from '../../main.js';

export default {
  data () {
    return {
      drawer: true
    }
  },
  methods: {
    showHideDrawer () {
      //alert('clicked')
      //this.drawer = !this.drawer
      EventBus.$emit('showHide', this.drawer)
    }
  }
}
</script>
