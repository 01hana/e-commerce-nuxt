import { createMongoAbility, AbilityBuilder } from '@casl/ability';
import { abilitiesPlugin } from '@casl/vue';

export default defineNuxtPlugin(nuxtApp => {
  const ability = createMongoAbility([]);

  nuxtApp.vueApp.use(abilitiesPlugin, ability);

  const updateAbility = (permissions: Array<{ action: string; subject: any }>) => {
    const { can, rules } = new AbilityBuilder(createMongoAbility);

    permissions.forEach(item => can(item.action, item.subject));

    ability.update(rules);
  };

  const clearAbility = () => ability.update([]);

  nuxtApp.provide('ability', ability);
  nuxtApp.provide('updateAbility', updateAbility);
  nuxtApp.provide('clearAbility', clearAbility);
});
