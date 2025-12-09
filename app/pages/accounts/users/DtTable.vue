<script setup lang="ts">
const { params, filters } = inject(DtUtils.key) as InstanceType<typeof DtUtils>;

const { user } = useAuth();
const { getTable, getFilters, actions } = useUsers();

onMounted(() => {
  getTable(params.value);
  getFilters(['groups', 'status']);
});
</script>

<template>
  <TableData :sort="['updated_at', 'desc']">
    <vxe-column min-width="150" field="account" title="帳號" />

    <vxe-column min-width="200" field="name" title="使用者名稱" />

    <vxe-column min-width="250" field="groups" title="帳戶群組" :filters show-overflow>
      <template #default="{ row }">
        <UBadge
          v-for="item in row.groups"
          :key="item"
          :label="item"
          class="text-gray-00 bg-gray-300 mx-1"
          size="lg"
        />
      </template>
    </vxe-column>

    <vxe-column min-width="200" field="email" title="email" />

    <vxe-column min-width="120" field="status" title="狀態" align="center" :filters>
      <template #default="{ row }">
        <FormField
          v-model="row.status"
          name="status"
          fieldType="switch"
          class="flex justify-center"
          :disabled="user?.id === row.id"
          @change="actions({ ids: [row.id], status: row.status })"
        />
      </template>
    </vxe-column>

    <vxe-column
      min-width="150"
      field="updated_at"
      title="最後更新時間"
      sortable
      formatter="formatDate"
    />
  </TableData>
</template>
