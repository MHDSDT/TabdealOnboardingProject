<template>
  <section class="hero py-16 lg:py-24 bg-white">
    <div class="hero-content flex-col">
      <h1 class="text-4xl font-medium text-black text-center">چرا تبدیل؟</h1>
      <img
        height="16px"
        width="72px"
        src="https://tabdeal.org//images/homepage/new-content/spacer.svg"
        alt="spacer"
      />
      <p class="py-4 text-black text-center">
        چرا تبدیل را برای خرید و فروش ارزهای دیجیتال به شما پیشنهاد می‌کنیم؟
      </p>
      <div class="hero-content flex flex-col lg:flex-row">
        <div
          v-for="item in pros"
          :key="pros.title"
          class="w-full flex flex-col text-black hover:shadow-xl hover:rounded-lg space-y-2 p-4 items-start"
        >
          <div class="flex flex-row self-center w-max h-max">
            <img
              class="object-scale-down"
              :src="item.iconPath"
              :alt="
                item.iconPath
                  .split('/')
                  [item.iconPath.split('/').length - 1].split('.')[0]
              "
            />
          </div>
          <h1 class="text-lg font-medium">{{ item.title }}</h1>
          <p class="text-sm">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProsSection",
  data() {
    return {
      pros: [
        {
          title: "احراز هویت سریع",
          description:
            "با ثبت نام و انجام فرایند سریع و آسان احراز هویت در تبدیل، فقط چند کلیک با شروع معامله فاصله دارید.",
          iconPath:
            "https://tabdeal.org/images/homepage/new-content/whyus-24h-auth-icon.svg",
        },
        {
          title: "کسب درآمد ",
          description:
            "با دعوت از دوستان خود به تبدیل، درآمد کسب نمایید. اطلاعات بیشتر را در صفحهٔ دعوت از دوستان ببینید.",
          iconPath:
            "https://tabdeal.org/images/homepage/new-content/whyus-invitation-icon.svg",
        },
        {
          title: "حداقل فاصله خرید و فروش",
          description:
            "ربات‌های بازارگردان تبدیل با نظارت 24 ساعته بر قیمت‌های جهانی، کمترین میزان گپ خرید و فروش را برای کاربران ایجاد می‌نماید.",
          iconPath:
            "https://tabdeal.org/images/homepage/new-content/whyus-easy-as-pie-icon.svg",
        },
        {
          title: "بیشترین تنوع ارزی ",
          description:
            "در صرافی ارز دیجیتال تبدیل، بیشترین تنوع ارزی در بین بازار‌های معاملاتی ایران را با بازار‌های تومانی و تتری متنوع تجربه کنید. ",
          iconPath:
            "https://tabdeal.org/images/homepage/new-content/whyus-many-crypto-icon.svg",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
