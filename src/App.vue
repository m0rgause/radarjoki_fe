<script setup lang="ts">
import { Toaster } from "vue-sonner";
import "vue-sonner/style.css";
import { RouterView } from "vue-router";
</script>

<template>
  <Toaster position="top-center" rich-colors />
  <RouterView />
</template>
