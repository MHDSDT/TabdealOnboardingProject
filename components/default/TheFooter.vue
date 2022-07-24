<template>
  <div>
    <footer class="footer p-10 bg-gray-900 text-base-content">
      <div>
        <span class="footer-title">درباره ما</span>
        <a v-for="item in about" class="link link-hover">{{ item }}</a>
      </div>
      <div>
        <span class="footer-title">خدمات تبدیل</span>
        <a v-for="item in services" class="link link-hover">{{ item }}</a>
      </div>
      <div>
        <span class="footer-title">بیشتر بدانید</span>
        <a v-for="item in learnMore" class="link link-hover">{{ item }}</a>
      </div>
      <FooterSocialMedia />
    </footer>
    <CopyRight />
  </div>
</template>

<script>
import FooterSocialMedia from "@/components/default/FooterSocialMedia";
import CopyRight from "@/components/default/CopyRight";

export default {
  name: "TheFooter",
  data() {
    return {
      about: [
        "داستان ما",
        "تماس با ما",
        "سوالات متفاوت",
        "قوانین و مقررات",
        "کارمزد تبدیل",
      ],
      services: [
        "آکادمی تبدیل",
        "راهنمای گام به گام",
        "مشاوره رایگان",
        "صرافی ارز دیجیتال",
        "پشتیبانی تبدیل",
        "مستندات",
      ],
      learnMore: [
        "خرید بیت کوین",
        "خرید تتر",
        "خرید اتریوم",
        "خرید شیبا",
        "خرید ترون",
        "خرید دوج کوین",
      ],
    };
  },
  components: {
    FooterSocialMedia,
    CopyRight,
  },
};
</script>

<style scoped></style>
