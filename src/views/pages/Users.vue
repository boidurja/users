<template>
    <v-container>
        
        <v-toolbar dense>
            <!--v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>Title</v-toolbar-title>
            <v-spacer></v-spacer-->
            <v-toolbar-items class="toolbar-items">
                
                <v-btn 
                    depressed 
                    small 
                    class="get mr-1" 
                    @click="getMethod(); post = false; update = false; deleteUser = false" 
                    color="info"
                >
                    Get
                </v-btn>
                
                <v-btn 
                    depressed 
                    small 
                    class="post mr-1" 
                    @click="post = true; get = false; update = false; deleteUser = false" 
                    color="success"
                >
                    Post
                </v-btn>
        
                <v-btn depressed small class="edit mr-1" @click="edit()" color="warning">
                    Edit
                </v-btn>
        
                <v-btn depressed small class="delete" @click="deleteRecord()" color="error">
                    Delete
                </v-btn>
               
            </v-toolbar-items>
        </v-toolbar>

        <div v-show="get" class="mt-2">
            <v-text-field 
                    v-model="searchText" 
                    class="mb-2" 
                    label="Search Name" 
                    type="text" 
                    outline 
                    hide-details
            >
            </v-text-field>
            <v-btn @click="searchName()">
                Search
            </v-btn>

            <div v-for="user in newUsers" :key="user.id" v-show="getSecond" class="mt-3">
                
                <v-card>
                     
                    <table class="table table-bordered table-hover table-striped">
                        <tr>
                            <td><strong>Id:</strong></td>
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

        <div v-show="post" class="mt-3">
            <form>
                <v-text-field v-model="id" required type="number" hide-details outline label="Id" @blur="checkId()"></v-text-field> <br/>
                <v-text-field v-model="firstname" type="text" hide-details label="First Name" outline></v-text-field> <br/>
                <v-text-field v-model="middlename" type="text" hide-details label="Middle Name" outline></v-text-field> <br/>
                <v-text-field v-model="lastname" type="text" hide-details label="Last Name" outline></v-text-field> <br />
                <v-text-field v-model="sex" type="text" hide-details label="Sex" outline></v-text-field> <br />
                <v-text-field v-model="dateofbirth" type="date" hide-details label="Date of Birth" outline></v-text-field> <br />
                <v-text-field v-model="grade" type="number" hide-details label="Grade" outline></v-text-field> <br />
                <v-text-field v-model="division" type="text" hide-details label="Division" outline></v-text-field> <br />
                <v-text-field v-model="bloodgroup" type="text" hide-details label="Blood Group" outline></v-text-field> <br />
                <v-text-field v-model="profilephoto" type="text" hide-details label="Profile Photo" outline></v-text-field> <br />
                <v-text-field v-model="addressline1" type="text" hide-details label="Address Line 1" outline></v-text-field> <br />
                <v-text-field v-model="addressline2" type="text" hide-details label="Address Line 2" outline></v-text-field> <br />
                <v-text-field v-model="city" type="text" hide-details label="City" outline></v-text-field> <br />
                <v-text-field v-model="state" type="text" hide-details label="State" outline></v-text-field> <br />
                <v-text-field v-model="pincode" type="number" hide-details label="Pincode" outline></v-text-field> <br />
                <v-text-field v-model="telephone" type="tel" hide-details label="Telephone" outline></v-text-field> <br />
                <v-text-field v-model="mobile" type="tel" hide-details label="Mobile" outline></v-text-field> <br />
                <v-text-field v-model="schoolId" type="number" hide-details label="School Id" outline></v-text-field> <br />
                <v-text-field v-model="scholarshipname" type="text" hide-details label="Scholarship Name" outline></v-text-field> <br />
                <v-btn @click="postMethod" type="submit" color="success">Add New User</v-btn>
                <v-btn type="reset" color="error">Reset</v-btn>
            </form>
        </div>

        <div v-show="update" class="mt-3">
            <v-text-field v-model="idToEdit" type="number" hide-details outline label="Enter Id to edit"></v-text-field>
            <v-btn @click="userIdtoEdit()" color="warning">Submit</v-btn>

            <div v-show="updateSecond">
                <form>
                    <v-text-field v-model="idPut" required type="number" hide-details outline label="Id"></v-text-field> <br/>
                    <v-text-field v-model="firstnamePut" type="text" hide-details label="First Name" outline></v-text-field> <br/>
                    <v-text-field v-model="middlenamePut" type="text" hide-details label="Middle Name" outline></v-text-field> <br/>
                    <v-text-field v-model="lastnamePut" type="text" hide-details label="Last Name" outline></v-text-field> <br />
                    <v-text-field v-model="sexPut" type="text" hide-details label="Sex" outline></v-text-field> <br />
                    <v-text-field v-model="dateofbirthPut" type="date" hide-details label="Date of Birth" outline></v-text-field> <br />
                    <v-text-field v-model="gradePut" type="number" hide-details label="Grade" outline></v-text-field> <br />
                    <v-text-field v-model="divisionPut" type="text" hide-details label="Division" outline></v-text-field> <br />
                    <v-text-field v-model="bloodgroupPut" type="text" hide-details label="Blood Group" outline></v-text-field> <br />
                    <v-text-field v-model="profilephotoPut" type="text" hide-details label="Profile Photo" outline></v-text-field> <br />
                    <v-text-field v-model="addressline1Put" type="text" hide-details label="Address Line 1" outline></v-text-field> <br />
                    <v-text-field v-model="addressline2Put" type="text" hide-details label="Address Line 2" outline></v-text-field> <br />
                    <v-text-field v-model="cityPut" type="text" hide-details label="City" outline></v-text-field> <br />
                    <v-text-field v-model="statePut" type="text" hide-details label="State" outline></v-text-field> <br />
                    <v-text-field v-model="pincodePut" type="number" hide-details label="Pincode" outline></v-text-field> <br />
                    <v-text-field v-model="telephonePut" type="tel" hide-details label="Telephone" outline></v-text-field> <br />
                    <v-text-field v-model="mobilePut" type="tel" hide-details label="Mobile" outline></v-text-field> <br />
                    <v-text-field v-model="schoolIdPut" type="number" hide-details label="School Id" outline></v-text-field> <br />
                    <v-text-field v-model="scholarshipnamePut" type="text" hide-details label="Scholarship Name" outline></v-text-field> <br />
                    <v-btn @click="edit()" color="warning">Edit data</v-btn>
                </form>
            </div>
        </div>

        

        <div v-show="deleteUser" class="mt-3">
            <v-text-field v-model="idToDelete" type="number" hide-details outline label="Enter Id to delete"></v-text-field>
            <v-btn @click="userIdtoDelete" color="error">Submit</v-btn>
        </div>
    </v-container>
</template>


<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const API_URL = 'http://localhost:3000/users';

export default {
    data () {
        return {
            users: [],
            firstnames: [],
            get: false,
            post: false,
            update: false,
            updateSecond: false,
            id: '',
            firstname: '',
            middlename: '',
            lastname: '',
            sex: '',
            dateofbirth: '',
            grade: '',
            division: '',
            bloodgroup: '',
            profilephoto: '',
            addressline1: '',
            addressline2: '',
            city: '',
            state: '',
            pincode: '',
            telephone: '',
            mobile: '',
            schoolId: '',
            scholarshipname: '',
            idToEdit: '',
            idPut: '',
            firstnamePut: '',
            middlenamePut: '',
            lastnamePut: '',
            sexPut: '',
            dateofbirthPut: '',
            gradePut: '',
            divisionPut: '',
            bloodgroupPut: '',
            profilephotoPut: '',
            addressline1Put: '',
            addressline2Put: '',
            cityPut: '',
            statePut: '',
            pincodePut: '',
            telephonePut: '',
            mobilePut: '',
            schoolIdPut: '',
            scholarshipnamePut: '',
            deleteUser: false,
            idToDelete: '',
            i: 0,
            searchText: '',
            positionOfSearchText: '',
            getSecond: false,
            newUsers: [],
            checkUserId: [],
            drawer: true,
            items: [
                { title: 'Home', icon: 'dashboard' },
                { title: 'About', icon: 'question_answer' }
            ],
            mini: true,
            right: null
        }
    },
    mounted () {
        
    },
    methods: {
        checkId () {
            axios.get('http://localhost:3000/users', {
                params: {
                    id: this.id
                    }
                })
                    .then(response => { 
                        this.checkUserId = response.data
                        
                        if (this.checkUserId != '') {
                            alert('This User Id is already taken.')
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                });
        },
        searchName () {
            this.getSecond = true
            this.newUsers.pop()
            Vue.axios.get('http://localhost:3000/users')
            .then(response => {
                this.users = response.data
                
                for (this.i=0; this.i<this.users.length; this.i++) {
                    if (this.firstnames[this.i] == this.searchText) {
                        this.positionOfSearchText = this.i
                        break
                    }
                }

                /*Vue.axios.get('http://localhost:3000/users/' + this.users[this.positionOfSearchText].id)
                    .then(response => {
                    
                    this.newUsers.push(response.data)
                    
                })
                    .catch(e => {
                })*/

                axios.get('http://localhost:3000/users', {
                    params: {
                        firstname: this.searchText
                    }
                })
                    .then(response => this.newUsers = response.data)
                    .catch(function (error) {
                        console.log(error);
                });
                
            })
            .catch(e => {
            })
        },
        getMethod () {
            this.get = true
            Vue.axios.get('http://localhost:3000/users')
            .then(response => {
                this.users = response.data
             
                for (this.i=0; this.i<this.users.length; this.i++) {
                    this.firstnames[this.i] = this.users[this.i].firstname
                }
            })
            .catch(e => {
            })
        },
        postMethod () {    
              axios.post('http://localhost:3000/users', {
                    id: this.id,
                    firstname: this.firstname,
                    middlename: this.middlename,
                    lastname: this.lastname,
                    sex: this.sex,
                    dateofbirth: this.dateofbirth,
                    grade: this.grade,
                    division: this.division,
                    bloodgroup: this.bloodgroup,
                    profilephoto: this.profilephoto,
                    addressline1: this.addressline1,
                    addressline2: this.addressline2,
                    city: this.city,
                    state: this.state,
                    pincode: this.pincode,
                    telephone: this.telephone,
                    mobile: this.mobile,
                    schoolId: this.schoolId,
                    scholarshipname: this.scholarshipname
                }).then((response) => {})
                .catch((e) => {
                    console.error(e)
                })
        },
        userIdtoEdit () {
            this.updateSecond = true
            Vue.axios.get('http://localhost:3000/users/' + this.idToEdit)
            .then(response => {
                this.users = response.data
                
                this.idPut = this.users.id
                this.firstnamePut = this.users.firstname
                this.middlenamePut = this.users.middlename
                this.lastnamePut = this.users.lastname
                this.sexPut = this.users.sex
                this.dateofbirthPut = this.users.dateofbirth
                this.gradePut = this.users.grade
                this.divisionPut = this.users.division
                this.bloodgroupPut = this.users.bloodgroup
                this.profilephotoPut = this.users.profilephoto
                this.addressline1Put = this.users.addressline1
                this.addressline2Put = this.users.addressline2
                this.cityPut =  this.users.city
                this.statePut = this.users.state
                this.pincodePut = this.users.pincode
                this.telephonePut = this.users.telephone
                this.mobilePut = this.users.mobile
                this.schoolIdPut = this.users.schoolId
                this.scholarshipnamePut = this.users.scholarshipname
            })
            .catch(e => {
            })
        },
        edit () {
            this.get = false
            this.post = false
            this.update = true
            this.deleteUser = false
            this.updateSecond = false

            Vue.axios.put('http://localhost:3000/users/' + this.idToEdit, {
                    id: this.idPut,
                    firstname: this.firstnamePut,
                    middlename: this.middlenamePut,
                    lastname: this.lastnamePut,
                    sex: this.sexPut,
                    dateofbirth: this.dateofbirthPut,
                    grade: this.gradePut,
                    division: this.divisionPut,
                    bloodgroup: this.bloodgroupPut,
                    profilephoto: this.profilephotoPut,
                    addressline1: this.addressline1Put,
                    addressline2: this.addressline2Put,
                    city: this.cityPut,
                    state: this.statePut,
                    pincode: this.pincodePut,
                    telephone: this.telephonePut,
                    mobile: this.mobilePut,
                    schoolId: this.schoolIdPut,
                    scholarshipname: this.scholarshipnamePut

                }).then((response) => {
                    
                })
                .catch((e) => {
                    //console.error(e)
                })
        },
        deleteRecord () {
            this.deleteUser = true
            this.get = false
            this.post = false
            this.update = false
        },
        userIdtoDelete () {
            Vue.axios.delete('http://localhost:3000/users/' + this.idToDelete )
        }
    }
}
</script>


<!--style>

.toolbar-items {
    margin-left: -4.5%!important;
}


.get {
    margin-left: -5%!important;
    width: 33%;
}

.post {
    margin-left: 3%!important;
    width: 33%;
}

.edit {
    margin-left: 3%!important;
    width: 33%;
}

.delete {
    margin-left: 3%!important;
    width: 33%;
}

/*.get, .post, .edit {
    border-right: 20px solid white;
}
*/
.v-btn {
  min-width: 0;
}

</style-->

<style>

.get {

    width: 33%;
}

.post {
   
    width: 33%;
}

.edit {
   
    width: 33%;
}

.delete {
  
    width: 33%;
}

/*.get, .post, .edit {
    border-right: 20px solid white;
}
*/
.v-btn {
  min-width: 0;
}

</style>
