<script setup lang="ts">
import { Toaster } from "vue-sonner";
import "vue-sonner/style.css";
import { RouterView, useRoute } from "vue-router";
import Navbar from "./components/organisms/Navbar.vue";
import { computed } from "vue";

const route = useRoute();

const Authenticated = computed(
  () => !["/login", "/register"].includes(route.path)
);
</script>

<template>
  <Toaster position="top-center" rich-colors />
  <Navbar v-if="Authenticated" />
  <RouterView />
</template>
