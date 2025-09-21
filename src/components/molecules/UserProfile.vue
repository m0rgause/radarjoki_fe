<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useThemeStore } from "@/stores/theme";

import { Sun, Moon } from "lucide-vue-next";
import { useAuthStore } from "@/stores/auth";

const themeStore = useThemeStore();
const authStore = useAuthStore();

const toggleTheme = () => {
  themeStore.toggleTheme();
};
</script>

<template>
  <template v-if="authStore.isAuthenticated">
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="ghost" class="relative h-8 w-8 rounded-full">
          <Avatar class="h-8 w-8">
            <AvatarImage src="/assets/avatar/19024849.svg" alt="@user" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-56" align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </template>
  <template v-else>
    <Button variant="ghost" class="h-8 w-8 rounded-full" as="a" href="/login">
      Login
    </Button>
  </template>
  <!-- theme changer tailwind -->
  <Button
    variant="ghost"
    class="relative h-8 w-8 rounded-full"
    @click="toggleTheme"
  >
    <span v-if="themeStore.theme === 'light'">
      <Moon
        class="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2"
      />
    </span>
    <span v-else>
      <Sun
        class="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2"
      />
    </span>
  </Button>
</template>
