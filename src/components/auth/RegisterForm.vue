<script setup>
import { useField, useForm } from 'vee-validate';
import { object, string } from 'yup';

const schema = object({
  'first_name': string().required().label('Nome'),
  'email': string().required().email().label('E-mail'),
  'password': string().required().label('Senha'),
})
const {handleSubmit, errors} = useForm({
  validationSchema: schema,
  initialValues: {
    first_name: 'Jon',
    email: 'jon@now.com',
    password: 'Password1'
  }
})

const submit = handleSubmit(async (values) => {
  console.log(values)
})

const {value: first_name} = useField('first_name');
const {value: email} = useField('email');
const {value: password} = useField('password');

</script>

<template>
  <v-form @submit.prevent="submit">
    <v-row class="d-flex mb-3">
        <v-col cols="12">
            <v-label class="font-weight-bold mb-1">Nome</v-label>
            <v-text-field variant="outlined" color="primary" v-model="first_name" :error-messages="errors.first_name"></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-label class="font-weight-bold mb-1">E-mail</v-label>
            <v-text-field variant="outlined" type="email" color="primary" v-model="email" :error-messages="errors.email"></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-label class="font-weight-bold mb-1">Senha</v-label>
            <v-text-field variant="outlined" type="password"  color="primary" v-model="password" :error-messages="errors.password"></v-text-field>
        </v-col>
        <v-col cols="12" >
            <v-btn type="submit" color="primary" size="large" block flat>Cadastrar</v-btn>
        </v-col>
    </v-row>
  </v-form>
</template>
