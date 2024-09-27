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
import { ref, defineProps, defineEmits, onMounted } from "vue";
import { useRouter } from "vue-router";
import Button from "../components/Button.vue";
import LoginForm from "../components/Card.vue";

const router = useRouter();

const userId = ref("");
const password = ref("");
onMounted(() => {
  if (process.client) {
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    if (storedLoginStatus === "true") {
      router.push("/dashboard"); // Arahkan ke halaman dashboard jika sudah login
    }
  }
});
async function submit() {
  console.log("ini userId", userId.value);
  console.log("ini password", password.value);
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
if (statusLogin == "true") {
  router.push("/dashboard");
}
  const url = "http://localhost:8081/login";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Menambahkan header Content-Type
      },
      body: JSON.stringify({
        userId: userId.value,
        password: password.value,
      }),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    if (json.status == "success") {
      console.log("login Berhasil");
      setItem("isLoggedIn", "true");
      // console.log(isLoggedIn.value);
      router.push("/dashboard");
    } else {
      console.log("login gagal");
    }
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
</script>
