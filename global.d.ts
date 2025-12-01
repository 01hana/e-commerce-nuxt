import type { MongoAbility } from '@casl/ability';

declare module '#app' {
  interface NuxtApp {
    $updateAbility: (permissions: Array<{ action: string; subject: any }>) => MongoAbility;
    $clearAbility: () => void;
  }
}
