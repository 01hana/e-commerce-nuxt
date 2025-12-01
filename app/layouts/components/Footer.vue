<script setup lang="ts">
import { en, zh_tw } from '@nuxt/ui/locale';

const { t, locale, setLocale } = useI18n();

const year = computed(() => new Date().getFullYear());
</script>

<template>
  <UFooter class="mt-auto w-full">
    <p>{{ t('copyright', { year }) }}</p>

    <USeparator orientation="vertical" class="h-[30px] px-3" />

    <ULocaleSelect
      :model-value="locale"
      :locales="[en, zh_tw]"
      @update:model-value="setLocale($event as 'en' | 'zh-TW')"
    />
  </UFooter>
</template>
