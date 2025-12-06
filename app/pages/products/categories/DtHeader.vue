<script setup lang="ts">
const { manualAddRow } = inject(DtUtils.key) as InstanceType<typeof DtUtils>;

const { t } = useI18n();

const record = {
  name: '',
  sort: 0,
  status: true,
};
</script>

<template>
  <TableHeader :actions="{ create: false }">
    <template #create>
      <UButton
        icon="fluent:add-circle-24-filled"
        :label="t('actions.create')"
        variant="solid"
        @click="manualAddRow(record)"
      />
    </template>
  </TableHeader>
</template>
