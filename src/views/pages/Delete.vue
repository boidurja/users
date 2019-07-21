<template>
    <v-container>
        <div class="mt-3">
            <v-text-field v-model="idToDelete" type="number" hide-details outline label="Enter Id to delete"></v-text-field>
            <v-btn @click="userIdtoDelete()" color="error">Delete</v-btn>
        </div>
    </v-container>
</template>


<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
    data () {
        return {
            idToDelete: ''
        }
    },
    methods: {
        userIdtoDelete () {
            Vue.axios.delete('http://localhost:3000/users/' + this.idToDelete )
            
            /** axios.delete('http://localhost:3000/users/', {params: {id:  this.idToDelete} })
            .then((response) => {
                console.log(response)
            }, (error) => {
                
            })**/

            //alert('Id to delete = ' + this.idToDelete)
            //Vue.axios.delete('http://localhost:3000/users', {params: {id:  this.idToDelete} })
        }
    }
}
</script>
