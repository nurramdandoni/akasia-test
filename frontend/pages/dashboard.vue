<template>
  <div>
    <h1>Welcome to Dashboard Nuxt 3</h1>
    <!-- <NuxtLink to="/">Login Page</NuxtLink> -->
    <a @click="logout" style="cursor: pointer">Logout</a>
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
function getItem(item) {
  if (process.client) {
    return localStorage.getItem(item);
  } else {
    return undefined;
  }
}

function setItem(item, value) {
  if (process.client) {
    localStorage.setItem(item, value);

    return true;
  } else {
    return false;
  }
}
const statusLogin = getItem("isLoggedIn");
console.log("ini status login ", statusLogin);
if (statusLogin !== "true") {
  router.push("/");
}
// definePageMeta({
//   middleware: "auth",
// });

function logout() {
  const setter = setItem("isLoggedIn", "false");
  if (setter) {
    router.push("/");
  }
}
</script>
