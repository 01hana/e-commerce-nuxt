<script setup lang="ts">
const { params, filters } = inject(DtUtils.key) as InstanceType<typeof DtUtils>;

// onMounted(() => {
//   const { getTable } = useCustomers();

//   getTable(params.value);
// });
</script>

<template>
  <TableData :sort="['updated_at', 'desc']">
    <vxe-column min-width="120" field="name" title="姓名">
      <template #default="{ row }"> </template>
    </vxe-column>

    <vxe-column min-width="200" field="mobile" title="手機號碼" />

    <vxe-column min-width="200" field="email" title="Email" />

    <vxe-column min-width="200" field="address" title="地址" />

    <vxe-column min-width="150" field="birthday" title="生日" />

    <vxe-column min-width="150" field="updated_at" title="最後更新時間" />
  </TableData>
</template>
