<template>
  <v-app>
    <Header v-show="showMenu" />
    <Sidebar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import Header from '@/views/common/Header.vue'
import Sidebar from '@/views/common/Sidebar.vue'

export default {
  name: 'App',
  components: {
    Header, Sidebar
  },
  data () {
    return {
      //
    }
  },
  computed: {
    showMenu () {
      return this.$route.name !== 'login'
    }
  }
}
</script>
