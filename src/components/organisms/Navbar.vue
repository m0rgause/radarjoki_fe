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
        <!-- Example: Add a theme toggle button from shadcn/vue -->
        <button
          class="shadcn-btn shadcn-btn-ghost rounded-full p-2"
          aria-label="Toggle theme"
        >
          <svg
            class="h-5 w-5 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M12 3v1m0 16v1m8.485-8.485h-1M4.515 12.515h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle cx="12" cy="12" r="5" stroke-width="2" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
