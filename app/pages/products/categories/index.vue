<script setup lang="ts">
import DtHeader from './DtHeader.vue';
import DtTable from './DtTable.vue';

provide(useModalKey, useModal());
provide(DtUtils.key, new DtUtils(useCategories()));
</script>

<template>
  <UCard>
    <template #header>
      <DtHeader />
    </template>

    <DtTable />
  </UCard>
</template>
