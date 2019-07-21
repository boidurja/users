<template>
    <v-container>
        <h3>Search User</h3>
        <div class="mt-2">
            <v-text-field 
                    v-model="searchText" 
                    class="mb-2" 
                    label="Search Name" 
                    type="text" 
                    outline 
                    hide-details
            >
            </v-text-field>
            <v-btn @click="searchName()" color="info">
                Search
            </v-btn>

            <div v-for="user in newUsers" :key="user.id" v-show="getSection" class="mt-3">
                
                <v-card>
                     
                    <table class="table table-bordered table-hover table-striped">
                        <tr>
                            <th>Id:</th>
                            <td>{{ user.id }} </td>
                        </tr>
                        <tr>
                            <td><strong>First Name:</strong></td>
                            <td>{{ user.firstname }}</td>
                        </tr>
                        <tr>
                            <td><strong>Middle Name:</strong></td>
                            <td>{{ user.middlename }}</td>
                        </tr>
                        <tr>
                            <td><strong>Last Name:</strong></td>
                            <td>{{ user.lastname }}</td>
                        </tr>
                        <tr>
                            <td><strong>Sex:</strong></td>
                            <td>{{ user.sex }} </td>
                        </tr>
                        <tr>
                            <td><strong>Date of Birth:</strong></td>
                            <td>{{ user.dateofbirth }} </td>
                        </tr>
                        <tr>
                            <td><strong>Grade:</strong></td>
                            <td>{{ user.grade }}</td>
                        </tr>
                        <tr>
                            <td><strong>Division:</strong></td>
                            <td>{{ user.division }}</td>
                        </tr>
                        <tr>
                            <td><strong>Blood Group:</strong></td>
                            <td>{{ user.bloodgroup }}</td>
                        </tr>
                        <tr>
                            <td><strong>Profile Photo:</strong></td>
                            <td>{{ user.profilephoto }}</td>
                        </tr>
                        <tr>
                            <td><strong>Address Line 1:</strong></td>
                            <td>{{ user.addressline1 }}</td>
                        </tr>
                        <tr>
                            <td><strong>Address Line 2:</strong></td>
                            <td>{{ user.addressline2 }}</td>
                        </tr>
                        <tr>
                            <td><strong>City:</strong></td>
                            <td>{{ user.city }} </td>
                        </tr>
                        <tr>
                            <td><strong>State:</strong></td>
                            <td>{{ user.state }}</td>
                        </tr>
                        <tr>
                            <td> <strong>Pincode:</strong> </td>
                            <td>{{ user.pincode }}</td>
                        </tr>
                        <tr>
                            <td><strong>Telephone:</strong></td>
                            <td>{{ user.telephone }}</td>
                        </tr>
                        <tr>
                            <td><strong>Mobile:</strong> </td>
                            <td>{{ user.mobile }}</td>
                        </tr>
                        <tr>
                            <td><strong>School Id:</strong> </td>
                            <td>{{ user.schoolId }}</td>
                        </tr>
                        <tr>
                            <td><strong>Scholarship Name:</strong></td>
                            <td>{{ user.scholarshipname }}</td>
                        </tr>
                    </table>
                </v-card>
            </div>
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
            getSection: false,
            searchText: '',
            newUsers: []
        }
    },
    methods: {
        searchName () {
            this.getSection = true
            axios.get('http://localhost:3000/users', {
                params: {
                    firstname: this.searchText
                }
            })
                .then(response => { 
                    this.newUsers = response.data 

                    if (this.newUsers.length == 0) {
                        alert('User name not found')
                        this.searchText = ''
                    }
                })
                .catch(function (error) {
                    console.log(error);
            });
        }
    }
}
</script>
