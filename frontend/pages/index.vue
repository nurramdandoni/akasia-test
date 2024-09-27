<template>
  <div>
    <h1 style="text-align: center">Login Us</h1>
    <LoginForm v-model:userId="userId" v-model:password="password"
      ><Button
        icon="mdi-logout"
        bgColor="Darkblue"
        fontColor="white"
        ButtonName="Login"
        block
        @click="submit"
      ></Button
    ></LoginForm>

    <br />
    <br />
    <!-- <NuxtLink to="/dashboard">Back to Home</NuxtLink> -->
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, defineEmits } from "vue";
import Button from "../components/Button.vue";
import LoginForm from "../components/Card.vue";

const userId = ref("");
const password = ref("");

function submit() {
  console.log("ini userId", userId.value);
  console.log("ini password", password.value);
}
</script>
