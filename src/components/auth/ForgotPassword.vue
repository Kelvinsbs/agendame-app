<template>
  <ForgotPasswordForm v-if="state === 'forgotPassword'" @after-request="state = 'resetPassword'" />
  <ResetPasswordForm v-if="state === 'resetPassword'" />
  <v-alert v-if="state === 'reset'" color="success" class="mb-2">Sucesso</v-alert>
</template>

<script setup>
import { ref } from 'vue';
import ForgotPasswordForm from './ForgotPasswordForm.vue';
import ResetPasswordForm from './ResetPasswordForm.vue';

const state = ref('forgotPassword')
</script>
