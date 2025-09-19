// src/types/pinia.d.ts
import "pinia";
import type { Router } from "vue-router";

declare module "pinia" {
  export interface PiniaCustomProperties {
    router: Router;
  }
}
