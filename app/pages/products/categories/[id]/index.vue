<script setup lang="ts">
import DtHeader from './DtHeader.vue';
import DtTable from './DtTable.vue';
import FormModal from './FormModal.vue';

const router = useRouter();

provide(useModalKey, useModal());
provide(DtUtils.key, new DtUtils(useProducts()));
</script>

<template>
  <div>
    <UButton
      label="上一頁"
      variant="link"
      icon="fluent:arrow-reply-24-filled"
      @click="router.go(-1)"
    />

    <UCard>
      <template #header>
        <DtHeader />
      </template>

      <DtTable />

      <FormModal />
    </UCard>
  </div>
</template>
