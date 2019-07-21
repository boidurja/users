<template>
    <v-container>
        <h3>Edit User Details</h3> 
        <div class="mt-3">
            <v-text-field 
                v-model="idToEdit" 
                type="number" 
                hide-details 
                outline 
                label="Enter Id to edit"
                @input="disableButton2 = false"
            >
            </v-text-field>
            <v-btn 
                @click="userIdtoEdit()" 
                color="warning"
                :disabled="disableButton2"
            >
                Submit
            </v-btn>

            <div v-show="updateSecond">
                <form>
                    <v-text-field 
                        v-model="idPut" 
                        type="number" 
                        hide-details 
                        outline 
                        label="Id"
                        readonly
                    >
                    </v-text-field> <br/>
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
                    <v-btn 
                        @click="edit()" 
                        color="warning"
                        type="submit"
                        :disabled="disableButton"
                    >
                        Edit data
                    </v-btn>
                </form>
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
            idToEdit: '',
            updateSecond: false,
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
            disableButton: false,
            users: [],
            disableButton2: true
        }
    },
    methods: {
        userIdtoEdit () {
            
            Vue.axios.get('http://localhost:3000/users/' + this.idToEdit)
            .then(response => {
                this.users = response.data
                /*if (this.idToEdit == '') {
                    this.updateSecond = false
                }*/
                //alert('length = ' + this.users)
                /*if (this.users.length == 0) {
                    
                    this.updateSecond = false
                    alert('Id does not exist')
                } else {
                    this.updateSecond = true
                }*/
                this.updateSecond = true

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
                alert('Id does not exist')
                this.updateSecond = false
            })
        },
        edit () {
            /*if (this.idPut == '') {
                alert('User Id is required')
                this.disableButton = true
            } else {
                this.disableButton = false
                this.updateSecond = false
            }*/
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
        }
    }
}
</script>
