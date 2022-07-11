<template>
  <div class="navbar bg-black px-5" dir="rtl">
    <div class="navbar-start w-full" >
      <a href="#" class="flex items-center ml-4">
        <img src="https://tabdeal.org/tabdeal-logo-dark.svg" class="mr-3 h-6 sm:h-9" alt="Tabeal Logo"/>
      </a>
      <div class="hidden lg:flex p-2">
        <ul class="menu menu-horizontal p-0 text-xs text-white">
          <li tabindex="0">
            <a class="border-2 border-white rounded">
              خرید و فروش
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
            </a>
            <ul class="p-2">
              <!-- TODO Market Information -->
            </ul>
          </li>
          <li><a class="text-yellow-500 hover:bg-[#231f13] rounded px-4 lg:px-5 py-2
               lg:py-2.5 mr-2 border-2 border-yellow-500 rounded w-full">خرید آسان</a></li>
          <li><a>راهنمای گام به گام</a></li>
          <li><a>درآمد رایگان</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-end">
      <a href="#"
         class="text-yellow-500 hover:bg-[#231f13] font-medium rounded text-sm px-4 lg:px-5 py-2
               lg:py-2.5 ml-2 ">ورود</a>
      <a href="#"
         class="text-black bg-yellow-500 hover:bg-[#e0ac0c] font-medium rounded text-sm px-4 lg:px-5 py-2
               lg:py-2.5 ml-2 ">ثبت‌نام</a>

      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped>

</style>
