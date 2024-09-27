<template>
  <div class="btn">
    <div class="login">
      <input v-model="userId" type="text" @input="emitValues" />
    </div>
    <div class="login">
      <input v-model="password" type="password" @input="emitValues" />
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps, defineEmits } from "vue";

const emit = defineEmits();

const userId = ref("");
const password = ref("");

function emitValues() {
  emit("update:userId", userId.value);
  emit("update:password", password.value);
}
</script>
<style>
.login {
  margin: 20px;
}
.btn {
  text-align: center;
}
</style>
