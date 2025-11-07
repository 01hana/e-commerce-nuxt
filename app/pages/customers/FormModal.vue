<script setup lang="ts">
import type { RadioGroupItem } from '@nuxt/ui';
import { customersFields as updateFields } from '../../../constants/form/update-fields';

const { updateDtRowData, params } = inject(DtUtils.key) as InstanceType<typeof DtUtils>;
const { id, show, isAdd, isEdit, setModal } = inject(useModalKey) as ModalProps;

const { get, create, set, getTable } = useCustomers();
const { handleSubmit, resetForm, setFieldValue } = useForm({
  validationSchema: {
    name: 'required',
    gender: 'required',
    email: 'required',
    mobile: 'required',
    address: 'required',
  },
});
const { formUpdate } = useAppForm(updateFields, setFieldValue);

const radioItems = ref<RadioGroupItem[]>([
  {
    label: '男',
    id: 'male',
  },
  {
    label: '女',
    id: 'female',
  },
  {
    label: '不透露',
    id: 'unknown',
  },
]);

watch([show, id], async ([isShow, id]) => {
  if (isShow && !id) {
  }

  if (!isShow || !id) return;

  const data = await get(id);
  formUpdate(data);
});

function onAfterLeave() {
  resetForm();
}

const onSubmit = handleSubmit(async values => {
  console.log(values);

  return;

  if (isAdd.value) {
    await create(values).then(() => getTable(params.value));

    setModal(false);
  }

  if (isEdit.value) {
    const res = await set(id.value as string, values);

    updateDtRowData(res);
    setModal(false);
  }
}) as (e?: Event) => Promise<void>;
</script>

<template>
  <Modal size="w-lg" @after:leave="onAfterLeave" form-id="create-edit-form">
    <template #content>
      <UForm id="create-edit-form" :state="{}" @submit="onSubmit">
        <div class="flex flex-col gap-3">
          <FormField name="name" label="姓名" isRequired />
          <FormField
            name="gender"
            label="性別"
            fieldType="radio"
            :items="radioItems"
            :orientation="'horizontal'"
            isRequired
          />
          <FormField name="mobil" label="行動電話" isRequired />
          <FormField name="email" label="Email" isRequired />
          <FormField name="address" label="地址" isRequired />
          <DatePicker name="birthday" label="生日" />
        </div>
      </UForm>
    </template>
  </Modal>
</template>
