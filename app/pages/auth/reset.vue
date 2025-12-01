<script setup lang="ts">
definePageMeta({
  layout: 'full',
  meta: {
    resource: 'auth',
  },
});

const { t } = useI18n();
const show = ref(false);

const { defineField, handleSubmit } = useForm({
  validationSchema: {
    password: 'required',
    confirm_password: 'required|confirmed:@password',
  },
});

const [password] = defineField('password');

const onSubmit = handleSubmit(values => {
  console.log(values);
});
</script>

<template>
  <UCard class="w-[400px] shadow-lg ring-0 pb-5">
    <template #header>
      <img src="@/assets/images/logo/logo.png" alt="logo" class="w-full h-[150px] object-contain" />
    </template>

    <UAlert :description="t('auth.resetPassword')" variant="soft" class="mb-5 font-bold" />

    <UForm :state="{}" class="space-y-3" @submit="onSubmit">
      <FormField name="account" label="帳號" icon="fluent:person-lock-24-regular" disable />
      <FormField
        name="password"
        label="密碼"
        icon="fluent:lock-closed-24-regular"
        :type="show ? 'text' : 'password'"
        class="mb-1"
      >
        <UButton
          color="neutral"
          variant="link"
          size="sm"
          :icon="show ? 'fluent:eye-off-24-filled' : 'fluent:eye-24-filled'"
          @click="show = !show"
        />
      </FormField>

      <CheckPwdList v-model="password" />

      <FormField name="confirm_password" label="密碼確認" :type="show ? 'text' : 'password'">
        <UButton
          color="neutral"
          variant="link"
          size="sm"
          :icon="show ? 'fluent:eye-off-24-filled' : 'fluent:eye-24-filled'"
          @click="show = !show"
        />
      </FormField>

      <UButton
        type="submit"
        variant="solid"
        class="w-full mt-8 flex justify-center"
        :label="t('actions.enter', 0)"
      />
    </UForm>
  </UCard>
</template>
