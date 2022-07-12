<template>
  <section class="hero py-16 lg:py-24 bg-white" dir="rtl">
    <div class="hero-content flex flex-col lg:flex-row">
      <a v-for="item in pros" :key="pros.title"
           class="w-full flex flex-col text-black hover:shadow-xl hover:rounded-lg space-y-2 p-4 items-start hover:cursor-pointer"
          @click="item">
        <div class="flex flex-row self-center w-max h-max">
          <img class="object-scale-down" :src="item.iconPath"
               :alt="item.iconPath.split('/')[item.iconPath.split('/').length - 1].split('.')[0]"/>
        </div>
        <h1 class="text-lg font-medium hover:text-[#e0ac0c]">{{ item.title }}</h1>
        <p class="text-sm">{{ item.description }}</p>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomepageUsefulLinks",
  data() {
    return {
      pros: [
        {
          title: 'راهنمای گام به گام',
          description: 'هر آنچه درباره استفاده از خدمات تبدیل باید بدانید را در اینجا بیابید.',
          iconPath: 'https://tabdeal.org/images/homepage/new-content/useful-links-help-icon.svg',
          link: 'https://help.tabdeal.org/'
        },
        {
          title: 'آکادمی تبدیل',
          description: 'راهنمای خرید و فروش ارز‌های دیجیتال همراه با آموزش‌های ویدیویی معامله‌گری',
          iconPath: 'https://tabdeal.org/images/homepage/new-content/useful-links-blog-icon.svg',
          link: 'https://academy.tabdeal.org/'
        },
        {
          title: 'سوالات متداول',
          description: 'در این بخش می‌توانید پاسخ سوالات متداولی را که ممکن است برای شما پیش بیاید، مشاهده کنید.',
          iconPath: 'https://tabdeal.org/images/homepage/new-content/useful-links-faq-icon.svg',
          link: 'https://tabdeal.org/help/faq'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
