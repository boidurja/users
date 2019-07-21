<template>
  <v-layout
    wrap>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      width="180px"
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <v-icon large>
              account_circle
            </v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/get">
                <v-btn small color="info" class="drawer-button-style">Search User</v-btn>
              </router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/post">
                <v-btn small color="success" class="drawer-button-style">Add New User</v-btn>
              </router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
        
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/edit">
                <v-btn small color="warning" class="drawer-button-style">Edit User Details</v-btn>
              </router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
      
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/delete">
                <v-btn small color="error" class="drawer-button-style">Delete User</v-btn>
              </router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
import { EventBus } from '../../main.js';

  export default {
    data () {
      return {
        drawer: false
      }
    },
    mounted() {
      EventBus.$on('showHide', data => {
        this.drawer = data
      })
    }
  }
</script>

<style>
.v-list__tile__title {
  height: 37px;
}

.drawer-button-style {
  width: 135px;
}
</style>
