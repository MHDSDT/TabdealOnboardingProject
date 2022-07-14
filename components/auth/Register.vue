<template>
  <div
    class="m-10 -mt-12 sm:mx-20 h-full flex items-center justify-center py-0 px-4 sm:px-6 lg:px-8 text-black"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-2xl">ثبت نام</h2>
      </div>
      <form class="space-y-6" action="#" method="POST">
        <div class="flex flex-col gap-4">
          <label for="password" class="sr-only">رمز عبور</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            class="input input-bordered focus:input-primary w-full bg-gray-100 text-base text-gray-900"
            placeholder="رمز عبور خود را تعیین نمایید"
          />

          <div></div>

          <label for="password-confirmation" class="sr-only"
            >تایید رمز عبور</label
          >
          <input
            id="password-confirmation"
            name="-confirmation"
            type="password"
            required
            class="input input-bordered focus:input-primary w-full bg-gray-100 text-base text-gray-900"
            placeholder="رمز عبور خود را دوباره وارد کنید"
          />
        </div>

        <div>
          <button type="submit" class="btn btn-primary w-full">
            ساخت حساب کاربری
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
};
</script>

<style scoped></style>
