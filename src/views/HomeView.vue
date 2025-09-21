<template>
  <div
    class="w-max min-h-[calc(100vh-4rem)] mx-auto flex flex-col justify-center items-center"
  >
    <h1 class="text-4xl font-bold mb-2">Welcome to RadarJoki</h1>
    <p class="text-lg text-gray-600 mb-6 text-center px-4">
      Your ultimate tool for managing and optimizing your radar systems with
      ease and efficiency.
    </p>
    <router-link to="/login">
      <button
        class="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
      >
        Get Started
      </button>
    </router-link>
  </div>
</template>
<script setup lang="ts"></script>
