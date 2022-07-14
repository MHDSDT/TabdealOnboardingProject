<template>
  <div
    class="m-10 -mt-12 sm:mx-20 h-full flex items-center justify-center py-0 px-4 sm:px-6 lg:px-8 text-black"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <h1 class="text-2xl">
          به
          <b> تبدیل </b>
          خوش آمدید
        </h1>
        <h2 class="mt-6 text-2xl">ورود</h2>
      </div>
      <form class="space-y-6" action="#" method="POST">
        <div class="flex flex-col gap-4">
          <label for="phone" class="sr-only">شماره همراه</label>
          <input
            id="phone"
            name="email"
            type="tel"
            required
            class="input input-bordered focus:input-primary w-full bg-gray-100 text-base text-gray-900"
            placeholder="شماره همراه"
          />
          <label for="password" class="sr-only">رمز عبور</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            class="input input-bordered focus:input-primary w-full bg-gray-100 text-base text-gray-900"
            placeholder="رمز عبور"
          />
        </div>

        <div>
          <button type="submit" class="btn btn-primary w-full">ورود</button>
        </div>
      </form>
      <div class="flex flex-row items-center gap-4">
        <p class="text-sm text-gray-600">حساب کاربری ندارید؟</p>
        <NuxtLink
          to="/auth/register-req"
          class="btn btn-ghost btn-outline btn-sm rounded-md"
        >
          ثبت نام
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped></style>
