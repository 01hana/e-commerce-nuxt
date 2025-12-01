import type { MongoAbility } from '@casl/ability';

export const useCasl = () => {
  const route = useRoute();

  const { $ability } = useNuxtApp();

  const ability = $ability as MongoAbility;

  const routeName = computed(() => route.name as string);
  const hasAction = computed(() => can('update') || can('delete'));

  const can = (action: string, subject?: string) => {
    return ability.can(action, subject ?? routeName.value);
  };

  return {
    ability,
    hasAction,

    can,
  };
};
