<template>
  <v-btn
  class="button"
    :prepend-icon="icon"
    :style="{ color: fontColor, backgroundColor: bgColor }"
    >{{ ButtonName }}</v-btn
  >
  <!-- <v-btn :prepend-icon="icon">{{ ButtonName }}</v-btn> -->
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps<{
  ButtonName: string;
  icon?: string;
  fontColor?: string;
  bgColor?: string;
}>();
</script>
<style>
.button {
  border-radius: 8px;
  border: 1px solid transparent;
  /* padding: 0.6em 1.2em; */
  padding: 5px;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
</style>
