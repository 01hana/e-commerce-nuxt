<script setup lang="ts">
import { usersFields as updateFields } from '../../../../constants/form/update-fields';

const { updateDtRowData, params } = inject(DtUtils.key) as InstanceType<typeof DtUtils>;
const { id, show, isAdd, isEdit, setModal, setLoading } = inject(useModalKey) as ModalProps;

const { t } = useI18n();
const { get, create, set, getTable, getGroups } = useUsers();
const { handleSubmit, resetForm, setFieldValue } = useForm({
  validationSchema: {
    account: 'required',
    name: 'required',
    groups: 'required',
    email: 'required|email',
  },
  // initialValues: {
  //   status: true,
  // },
});
const { formUpdate } = useAppForm(updateFields, setFieldValue);
const [isOpen, setOpen] = useAppState(false);

const groupOptions = ref<{ id: string; label: string }[]>([]);
const email = ref('');

watch([show, id], async ([isShow, id]) => {
  if (isShow && !id) {
    groupOptions.value = await getGroups();
  }

  if (!isShow || !id) return;

  const [data, groups] = await Promise.all([get(id), getGroups()]);

  groupOptions.value = groups;

  formUpdate(data);
});

function onAfterLeave() {
  resetForm();
}

const onSubmit = handleSubmit(async values => {
  setLoading(true);

  if (isAdd.value) {
    email.value = values.email;

    await create(values).then(() => getTable(params.value));

    setModal(false);
    setOpen(true);
  }

  if (isEdit.value) {
    const res = await set(id.value as string, values);

    updateDtRowData(res);
    setModal(false);
  }

  setLoading(false);
}) as (e?: Event) => Promise<void>;
</script>

<template>
  <Modal size="w-lg" @after:leave="onAfterLeave" form-id="create-edit-form">
    <template #content>
      <UForm id="create-edit-form" :state="{}" @submit="onSubmit">
        <div class="flex flex-col gap-3">
          <FormField name="account" label="帳號" :disabled="isEdit" isRequired />
          <FormField name="name" label="使用者名稱" isRequired />
          <FormField
            name="groups"
            label="帳戶群組"
            fieldType="select"
            :items="groupOptions"
            :multiple="true"
            isRequired
          />
          <FormField name="email" label="Email" isRequired />
          <FormField name="status" label="狀態" fieldType="switch" />
        </div>
      </UForm>
    </template>
  </Modal>

  <AlertModal
    v-model:open="isOpen"
    :title="t('confirm.createAccountAlert')"
    type="success"
    icon="fluent:checkmark-circle-24-filled"
    @callAction="setOpen(false)"
  >
    <template #content>
      <i18n-t keypath="confirm.createAccountAlertText1" tag="div" scope="global">
        <UBadge color="success" class="rounded-full bg-teal-400 mx-2" :label="email" />
      </i18n-t>
      <span>{{ $t('confirm.createAccountAlertText2') }}</span>
    </template>
  </AlertModal>
</template>
