<template>
  <section class="hero py-16 lg:py-24 bg-[#f6f7fa]" dir="rtl">
    <div class="hero-content flex-col">
      <h1 class="text-4xl text-black text-center">
        همین امروز به خانواده بزرگ تبدیل بپیوندید
      </h1>
      <img
        height="16px"
        width="72px"
        src="https://tabdeal.org//images/homepage/new-content/spacer.svg"
        alt="spacer"
      />
      <p class="py-4 text-black text-center">
        با هر سطحی از دانش در سریع‌ترین زمان با آموزش گام به گام سرمایه گذاری را تجربه کنید.
      </p>
      <div class="hero-content flex flex-col lg:flex-row">
        <img src="https://tabdeal.org/images/homepage/new-content/panel-mockup-mobile.png" class="max-w-s lg:w-[500px] xl:max-w-s" alt="panel-mockup-mobile"/>
        <div class="hero-content flex flex-col items-start">
          <div v-for="feature in features" :key="feature.title" class="flex flex-row items-center">
            <div class="avatar ml-4 shadow-lg hover:shadow-xl rounded-full p-4 w-[85px] h-[85px]">
              <div class="w-max h-max">
                <img class="object-scale-down" :src="feature.iconPath"
                     :alt="feature.iconPath.split('/')[feature.iconPath.split('/').length - 1].split('.')[0]"/>
              </div>
            </div>

            <div class="flex flex-col text-black">
              <h1 class="text-lg">{{ feature.title }}</h1>
              <p class="text-sm">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PageInfo",
  data() {
    return {
      features: [
        {
          title: 'ابزار حرفه‌ای معامله',
          description: 'با ابزار‌های حرفه‌ای خرید و فروش از جمله حدضرر (stop loss) و OCO ریسک معاملات خود را در هر زمان و هر شرایطی مدیریت کنید.',
          iconPath: 'https://tabdeal.org/images/homepage/new-content/start-pro-tools-icon.svg'
        },
        {
          title: 'کیف پول اختصاصی امن',
          description: 'ارز‌های دیجیتال خود را می‌توانید روی کیف پول امن خود در تبدیل نگهداری کنید و در صورت نیاز روی انواع شبکه‌ها به کیف پول‌های دیگر انتقال دهید.',
          iconPath: 'https://tabdeal.org/images/homepage/new-content/start-wallet-security-icon.svg'
        },
        {
          title: 'پشتیبانی سریع',
          description: 'تیم پشتیبانی تبدیل در تمامی شرایط از طریق چت آنلاین و تلفن، همراه شما هستند و راهنمایی‌های لازم جهت استفاده از سایت را به شما می‌رسانند.',
          iconPath: 'https://tabdeal.org/images/homepage/new-content/start-support-icon.svg'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
