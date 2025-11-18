<script setup lang="ts">
const { params, filters } = inject(DtUtils.key) as InstanceType<typeof DtUtils>;

const { t } = useI18n();
const { t: tv } = usePageI18n();

// onMounted(async () => {
//   const { getTable } = useCustomers();

//   getTable(params.value);
// });
</script>

<template>
  <TableData :sort="['updated_at', 'desc']">
    <vxe-column min-width="120" field="name" :title="tv('name')">
      <template #default="{ row }">
        <div>{{ row.name }}</div>
      </template>
    </vxe-column>

    <vxe-column min-width="200" field="mobile" :title="tv('mobile')" />

    <vxe-column min-width="200" field="email" title="Email" />

    <vxe-column min-width="200" field="address" :title="tv('address')" />

    <vxe-column min-width="150" field="birthday" :title="tv('birthday')" />

    <vxe-column min-width="150" field="history" :title="tv('history')" align="center">
      <template #default="{ row }">
        <UButton label="查看" />
      </template>
    </vxe-column>

    <vxe-column min-width="150" field="created_at" :title="t('form.createdAt')" sortable />

    <vxe-column min-width="150" field="updated_at" :title="t('form.updatedAt')" sortable />
  </TableData>
</template>
