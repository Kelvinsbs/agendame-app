<script setup lang="ts">
import Logo from '@/layouts/full/logo/Logo.vue';
import RegisterForm from '@/components/auth/RegisterForm.vue';
</script>
<template>
    <div class="authentication">
        <v-container fluid class="pa-3">
            <v-row class="h-100vh d-flex justify-center align-center">
                <v-col cols="12" lg="4" xl="3" class="d-flex align-center">
                    <v-card rounded="md" elevation="10" class="px-sm-1 px-0 withbg mx-auto" max-width="500">
                        <v-card-item class="pa-sm-8">
                            <div class="d-flex justify-center py-4">
                                <Logo />
                            </div>
                            <RegisterForm />
                            <h6 class="text-h6 text-muted font-weight-medium d-flex justify-center align-center mt-3">
                                Já tem uma conta?
                                <RouterLink :to="{ name: 'login'}"
                                    class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium pl-2">
                                    Login</RouterLink>
                            </h6>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
