<script lang="ts" setup>
import NavigationLinks from "../molecules/NavigationLinks.vue";
import UserProfile from "../molecules/UserProfile.vue";
</script>

<template>
  <header
    class="w-full border-b bg-background/80 backdrop-blur sticky top-0 z-50 px-4 mx-auto"
  >
    <div class="h-16 flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2">
        <svg
          class="h-8 w-8 text-primary"
          fill="none"
          viewBox="0 0 32 32"
          stroke="currentColor"
        >
          <circle cx="16" cy="16" r="14" stroke-width="2" />
          <path d="M16 8v8l6 4" stroke-width="2" stroke-linecap="round" />
        </svg>
        <span class="text-lg font-bold text-foreground hidden sm:inline-block">
          Radar Joki
        </span>
      </a>

      <!-- Navigation Links -->
      <nav class="flex-1 flex justify-center">
        <NavigationLinks />
      </nav>

      <!-- User Profile & Actions -->
      <div class="flex items-center gap-4">
        <UserProfile />
      </div>
    </div>
  </header>
</template>
