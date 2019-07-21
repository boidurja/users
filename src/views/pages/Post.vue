<template>
    <v-container>
        <h3>Add New User</h3>
        <div class="mt-3">
            <form>
                <v-text-field 
                    v-model="id" 
                    type="number" 
                    hide-details 
                    outline 
                    label="Id" 
                    @blur="checkId()"
                    @input="disableButton = false"
                >
                </v-text-field> <br/>
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
                <v-btn 
                    @click="postMethod()" 
                    type="submit" 
                    color="success"
                    :disabled="disableButton"    
                >
                    Add New User
                </v-btn>
                <v-btn type="reset" color="error">Reset</v-btn>
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
            checkUserId: [],
            disableButton: true
        }
    },
    methods: {
        checkId () {
            if (this.id == '') {
                //alert('User Id is required')
                this.disableButton = true
                //return false
            }
            axios.get('http://localhost:3000/users', {
                params: {
                    id: this.id
                    }
                })
                    .then(response => { 
                        this.checkUserId = response.data
                        
                        if (this.checkUserId != '') {
                            alert('This User Id is already taken.')
                            this.disableButton = true
                        } else {
                            this.disableButton = false
                        }
                        
                    })
                    .catch(function (error) {
                        console.log(error);
                        
                });
        },
        postMethod () {
            if (this.id == '') {
                alert('User Id is required')
                //this.disableButton = true
                return false
            }
            
            Vue.axios.post('http://localhost:3000/users', {
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
        }
    }
}
</script>
