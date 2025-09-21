<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "../ui/navigation-menu";
</script>

<template>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Products</NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul class="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
            <li>
              <NavigationMenuLink
                class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                href="/products/radar"
              >
                <div class="text-sm font-medium leading-none">Radar</div>
                <p class="line-clamp-2 text-sm text-muted-foreground">
                  Advanced radar systems for superior detection and tracking
                  capabilities.
                </p>
              </NavigationMenuLink>
            </li>
            <li>
              <NavigationMenuLink
                class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                href="/products/analytics"
              >
                <div class="text-sm font-medium leading-none">Analytics</div>
                <p class="line-clamp-2 text-sm text-muted-foreground">
                  Comprehensive analytics tools to optimize radar performance
                  and insights.
                </p>
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
