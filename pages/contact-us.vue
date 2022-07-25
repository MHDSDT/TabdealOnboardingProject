<template>
  <div class="p-8 flex items-center justify-center bg-zinc-100 text-black">
    <div
      class="card drop-shadow flex flex-col items-center gap-4 bg-white p-8 w-full lg:w-[1100px]"
    >
      <h1 class="text-primary text-4xl font-bold">تماس با ما</h1>
      <div class="card bg-white drop-shadow">
        <img
          src="/images/contactus/contactus.jpg"
          alt="contact-us"
          class="lg:w-[900px]"
        />
        <div class="card-body flex-col md:flex-row gap-8">
          <div class="flex flex-col gap-4 text-sm">
            <p>با ما همراه شوید در:</p>
            <h2 class="card-title">
              دفتر اصلی: <br />
              تهران - کارخانه نوآوری آزادی
            </h2>
            <p>(مراجعه حضوری فقط با هماهنگی قبلی امکان پذیر است)</p>
          </div>
          <div class="card-actions flex flex-col gap-4">
            <p>تماس با تبدیل:</p>
            <a class="card-title text-primary text-start" href="tel:02191004409"
              >۰۲۱-۹۱۰۰۴۴۰۹</a
            >
            <p>(از شنبه تا پنج شنبه ۹ الی ۱۹)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact-us",
};
</script>

<style scoped></style>
