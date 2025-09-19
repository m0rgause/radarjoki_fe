<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { toast } from "vue-sonner";
import * as z from "zod";

const authStore = useAuthStore();
const loading = ref(false);
const error = ref<string | null>(null);

const formSchema = toTypedSchema(
  z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    username: z.string().min(3, "Username must be at least 3 characters"),
  })
);
const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values) => {
  loading.value = true;
  try {
    await authStore.register(values.email, values.username, values.password);
    toast.success("Registration successful! Please log in.");
  } catch (err) {
    error.value = (err as Error).message;
    toast.error(error.value);
  } finally {
    loading.value = false;
  }
});
</script>
<template>
  <div
    class="max-w-md mx-auto flex flex-col justify-center min-h-[calc(100vh-4rem)] p-4"
  >
    <h2 class="text-2xl font-bold mb-6 text-center">Sign Up to RadarJoki</h2>
    <form @submit="onSubmit">
      <FormField name="username" v-slot="{ componentField }">
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input
              v-bind="componentField"
              type="text"
              placeholder="Enter your username"
            />
          </FormControl>
          <FormMessage class="text-left" />
        </FormItem>
      </FormField>
      <FormField name="email" v-slot="{ componentField }">
        <FormItem class="mt-4">
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input
              v-bind="componentField"
              type="email"
              placeholder="Enter your email"
            />
          </FormControl>
          <FormMessage class="text-left" />
        </FormItem>
      </FormField>
      <FormField name="password" v-slot="{ componentField }">
        <FormItem class="mt-4">
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input
              v-bind="componentField"
              type="password"
              placeholder="Enter your password"
            />
          </FormControl>
          <FormMessage class="text-left" />
        </FormItem>
      </FormField>
      <Button type="submit" class="w-full mt-6" :loading="loading"
        >Sign Up</Button
      >
    </form>
    <div class="text-sm text-center mt-4">
      Already have an account?
      <a href="/login" class="text-blue-600 hover:underline">Sign In</a>
    </div>
  </div>
</template>
