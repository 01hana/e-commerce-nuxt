<script setup lang="ts">
import type { VxeTablePropTypes } from 'vxe-table';

const {
  params,
  filters,
  actionBatch,
  manualHasEditStatus,
  manualEditRow,
  manualSaveRow,
  manualCancelRow,
} = inject(DtUtils.key) as InstanceType<typeof DtUtils>;

const editConfig = ref<VxeTablePropTypes.EditConfig<any>>({
  trigger: 'manual',
  mode: 'row',
});

onMounted(() => {
  const { getTable } = useCategories();

  getTable(params.value);
});
</script>

<template>
  <TableData :sort="['updated_at', 'desc']" :editConfig>
    <template #actions="{ row, setDeleteConfirm }">
      <UButton
        v-if="manualHasEditStatus(row)"
        icon="fluent:save-edit-24-regular"
        variant="ghost"
        @click="manualSaveRow(row)"
      />

      <UButton
        v-else
        icon="fluent:edit-line-horizontal-3-24-regular"
        variant="ghost"
        @click="manualEditRow(row)"
      />

      <UButton
        v-if="manualHasEditStatus(row)"
        icon="fluent:pen-dismiss-24-regular"
        variant="ghost"
        class="text-red-400"
        @click="manualCancelRow(row)"
      />

      <UButton
        v-else
        icon="fluent:delete-24-regular"
        variant="ghost"
        class="text-red-400"
        @click="setDeleteConfirm(row.id, row.name)"
      />
    </template>

    <vxe-column min-width="120" field="name" title="商品類別" :edit-render="{ name: 'VxeInput' }" />

    <vxe-column min-width="120" field="list" title="商品清單" align="center">
      <template #default="{ row }">
        <UButton
          :to="`/products/categories/${row.id}`"
          label="商品清單"
          icon="fluent:text-bullet-list-ltr-24-regular"
        />
      </template>
    </vxe-column>

    <vxe-column
      min-width="120"
      field="sort"
      title="排序"
      sortable
      :edit-render="{ name: 'VxeNumberInput', props: { type: 'integer' } }"
      align="center"
    />

    <vxe-column min-width="120" field="status" title="狀態" align="center" :filters>
      <template #default="{ row }">
        <FormField
          v-model="row.status"
          name="status"
          fieldType="switch"
          class="flex justify-center"
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
