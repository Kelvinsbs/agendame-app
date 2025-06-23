<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { useForm, useField } from 'vee-validate';


const schema = {
  email (value) {
      if (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(value)) {
        return true;
      }
      return 'This field must be a valid email';
    },
  password (value) {
    if (value) {
      return true;
    }
    return 'Password is required';
  }
};

const { handleSubmit, errors, isSubmitting} = useForm( {
  validationSchema: schema
});

const submit = handleSubmit(async (values) => {
  await login(values);
});

const {value: email} = useField('email');
const {value: password} = useField('password');

axios.defaults.withCredentials = true; // Enable cookies for cross-origin requests
axios.defaults.withXSRFToken = true; // Enable CSRF protection

const feedbackMessage = ref('');

function login(values) {
  feedbackMessage.value = '';
  axios.get('http://localhost:8000/sanctum/csrf-cookie')
    .then(() => {
      axios.post('http://localhost:8000/api/login', {
        email: values.email,
        password: values.password
      }).catch(() => {
        feedbackMessage.value = 'Seu e-mail ou senha estão inválidos.';
      })
    })
}
</script>

<template>
  <v-alert v-if="feedbackMessage" color="error" class="mb-2">{{ feedbackMessage }}</v-alert>
  <v-form @submit.prevent="submit">
    <v-row class="d-flex mb-3">
      <v-col cols="12">
        <v-label class="font-weight-bold mb-1">E-mail</v-label>
        <v-text-field v-model="email" :error-messages="errors.email" variant="outlined"
          color="primary"></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-label class="font-weight-bold mb-1">Senha</v-label>
        <v-text-field v-model="password" :error-messages="errors.password" variant="outlined" type="password"
          color="primary"></v-text-field>
      </v-col>
      <v-col cols="12" class="pt-0">
        <div class="d-flex flex-wrap align-center ml-n2">
          <div class="ml-sm-auto">
            <RouterLink to="/" class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium">Esqueceu
              sua senha?</RouterLink>
          </div>
        </div>
      </v-col>
      <v-col cols="12" class="pt-0">
        <v-btn type="submit" :loading="isSubmitting" color="primary" size="large" block flat>Entrar</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
