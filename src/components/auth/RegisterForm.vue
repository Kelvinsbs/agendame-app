<script setup>
import { ref } from 'vue';
import axios from 'axios';

function register() {
  const data = {
    first_name: 'test',
    email: 'test2@test.com',
    password: '12345678A'
  }
  axios.post('api/register', data)
}
const checkbox = ref(true);
</script>

<template>
    <v-row class="d-flex mb-3">
        <v-col cols="12">
            <v-label class="font-weight-bold mb-1">Name</v-label>
            <v-text-field variant="outlined" hide-details color="primary"></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-label class="font-weight-bold mb-1">Email Address</v-label>
            <v-text-field variant="outlined" type="email" hide-details color="primary"></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-label class="font-weight-bold mb-1">Password</v-label>
            <v-text-field variant="outlined" type="password"  hide-details color="primary"></v-text-field>
        </v-col>
        <v-col cols="12" >
            <v-btn color="primary" size="large" block flat @click="register">Sign up</v-btn>
        </v-col>
    </v-row>
</template>
