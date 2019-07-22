<template>
    <v-container>
        <div class="mt-3">
            <form>
            <v-text-field 
                v-model="idToDelete" 
                type="number" 
                hide-details 
                outline 
                label="Enter Id to delete"
            >
            </v-text-field>
            <v-btn @click="userIdtoDelete" color="error">Delete</v-btn>
            </form>
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
            users2: [],
            index: '',
            idToDelete: '',
            ids: [],
            i: ''
            
        }
    },
    methods: {
        userIdtoDelete () {

            /*if (this.idToDelete == '') {
                alert('Empty Field')
                return false
            }*/

             //Vue.axios.delete('http://localhost:3000/users/' + this.idToDelete)

            /*axios.get('http://localhost:3000/users')
                .then(response => { 
                    this.users2 = response.data

                    for (this.i = 0; this.i < this.users2.length; this.i++) {
                        this.ids[this.i] = this.users2[this.i].id
                        //alert(this.ids[this.i])
                    }
                    this.index = this.ids.indexOf(this.idToDelete)
                    //alert('Index = ' + this.index)
                })
                .catch(function (error) {
                    console.log(error);
            })*/

           

            /*axios.delete('http://localhost:3000/users/' + this.idToDelete)
            .then(response => {
                this.users2.splice(this.index, 1)
            })*/

            //alert('http://localhost:3000/users/' + this.idToDelete)
            
            //Vue.axios.delete('http://localhost:3000/users/' + id)

            //alert($event.target.value)


            /*Vue.axios.delete(`http://localhost:3000/users/${encodeURIComponent(this.idToDelete)}`)
            .then(res => { console.log(res) })
            .catch(err => { console.error(err) })*/
            

            /*axios.delete('http://localhost:3000/users', {params: {id:  this.idToDelete} })
            .then((response) => {
                console.log(response)
                //alert('response = ' + response)
            }, (error) => {
                console.log(error)
                //alert('error = ' + error)
            })*/

            //alert('Id to delete = ' + this.idToDelete)
            //Vue.axios.delete('http://localhost:3000/users', {params: {id:  this.idToDelete} })

        }
    }
}
</script>
