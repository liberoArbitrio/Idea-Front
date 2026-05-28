<template>
  <nav
    class="fixed top-0 w-full z-[100] flex justify-between items-center px-margin-desktop h-20 glass-nav border-b border-white/5">
    <!-- Logo -->
    <div
      class="font-headline-md text-headline-md text-secondary font-bold tracking-tighter drop-shadow-sm cursor-pointer">
      IDEA-TOPS
    </div>

    <!-- Desktop Nav Links (纯 CSS hover，和原版一致) -->
    <div class="hidden lg:flex gap-8 items-center">
      <router-link to="/" class="nav-item font-label-sm text-base uppercase tracking-widest text-on-surface/80 hover:text-secondary transition-colors duration-300 py-2">首页</router-link>

      <router-link to="/signup" class="nav-item font-label-sm text-base uppercase tracking-widest text-on-surface/80 hover:text-secondary transition-colors duration-300 py-2">参赛报名</router-link>

      <!-- 获奖作品 -->
      <div class="nav-item relative group py-2">
        <router-link to="/winners"
          class="flex items-center gap-1 font-label-sm text-base uppercase tracking-widest text-on-surface/80 hover:text-secondary transition-colors duration-300">
          获奖作品 <span class="material-symbols-outlined text-[16px]">expand_more</span>
        </router-link>
        <div
          class="nav-dropdown absolute top-full left-1/2 -translate-x-1/2 w-48 bg-midnight-gray border border-secondary/20 shadow-2xl p-4 grid gap-3">
          <router-link to="/winners" class="text-sm uppercase tracking-widest text-on-surface/60 hover:text-secondary transition-colors block">第十四届</router-link>
          <router-link to="/winners" class="text-sm uppercase tracking-widest text-on-surface/60 hover:text-secondary transition-colors block">第十三届</router-link>
          <router-link to="/winners" class="text-sm uppercase tracking-widest text-on-surface/60 hover:text-secondary transition-colors block">第十二届</router-link>
          <router-link to="/winners" class="text-sm uppercase tracking-widest text-on-surface/60 hover:text-secondary transition-colors block">历届回顾</router-link>
        </div>
      </div>

      <a class="nav-item font-label-sm text-base uppercase tracking-widest text-on-surface/80 hover:text-secondary transition-colors duration-300 py-2"
        href="#">新闻中心</a>

      <!-- 颁奖盛典 -->
      <div class="nav-item relative group py-2">
        <button
          class="flex items-center gap-1 font-label-sm text-base uppercase tracking-widest text-on-surface/80 hover:text-secondary transition-colors duration-300">
          颁奖盛典 <span class="material-symbols-outlined text-[16px]">expand_more</span>
        </button>
        <div
          class="nav-dropdown absolute top-full left-1/2 -translate-x-1/2 w-48 bg-midnight-gray border border-secondary/20 shadow-2xl p-4 grid gap-3">
          <a class="text-sm uppercase tracking-widest text-on-surface/60 hover:text-secondary transition-colors"
            href="#">第十四届</a>
          <a class="text-sm uppercase tracking-widest text-on-surface/60 hover:text-secondary transition-colors"
            href="#">第十三届</a>
          <a class="text-sm uppercase tracking-widest text-on-surface/60 hover:text-secondary transition-colors"
            href="#">往届锦集</a>
        </div>
      </div>

      <a class="nav-item font-label-sm text-base uppercase tracking-widest text-on-surface/80 hover:text-secondary transition-colors duration-300 py-2"
        href="#">合作伙伴</a>

      <!-- 关于我们 -->
      <div class="nav-item relative group py-2">
        <button
          class="flex items-center gap-1 font-label-sm text-base uppercase tracking-widest text-on-surface/80 hover:text-secondary transition-colors duration-300">
          关于我们 <span class="material-symbols-outlined text-[16px]">expand_more</span>
        </button>
        <div
          class="nav-dropdown absolute top-full right-0 w-56 bg-midnight-gray border border-secondary/20 shadow-2xl p-4 grid gap-3">
          <a class="text-sm uppercase tracking-widest text-on-surface/60 hover:text-secondary transition-colors"
            href="#">艾特奖简介</a>
          <a class="text-sm uppercase tracking-widest text-on-surface/60 hover:text-secondary transition-colors"
            href="#">艾特奖章程</a>
          <a class="text-sm uppercase tracking-widest text-on-surface/60 hover:text-secondary transition-colors"
            href="#">国际学术委员会</a>
          <a class="text-sm uppercase tracking-widest text-on-surface/60 hover:text-secondary transition-colors"
            href="#">评审标准</a>
          <a class="text-sm uppercase tracking-widest text-on-surface/60 hover:text-secondary transition-colors"
            href="#">联系我们</a>
        </div>
      </div>
    </div>

    <!-- Right Side -->
    <div class="flex items-center gap-4">
      <div
        class="hidden sm:flex text-on-surface/40 font-label-xs text-xs items-center gap-2 mr-4 border-r border-white/10 pr-6">
        <a class="hover:text-secondary" href="#">中文</a>
        <span>|</span>
        <a class="hover:text-secondary" href="#">EN</a>
      </div>

      <button
        class="px-8 py-2 border border-secondary/50 text-secondary font-label-sm text-base uppercase tracking-widest hover:bg-secondary hover:text-ink-jade transition-all duration-500 active:scale-[0.98]">
        立即报名
      </button>

      <!-- Mobile Menu Toggle -->
      <button class="lg:hidden flex flex-col gap-1.5 p-2" @click="mobileOpen = !mobileOpen">
        <span class="block w-6 h-px bg-on-surface transition-all duration-300"
          :class="{ 'rotate-45 translate-y-[5px]': mobileOpen }"></span>
        <span class="block w-6 h-px bg-on-surface transition-all duration-300"
          :class="{ 'opacity-0': mobileOpen }"></span>
        <span class="block w-6 h-px bg-on-surface transition-all duration-300"
          :class="{ '-rotate-45 -translate-y-[5px]': mobileOpen }"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-show="mobileOpen"
      class="absolute top-20 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 lg:hidden">
      <div class="flex flex-col py-4 px-margin-mobile gap-2">
        <router-link to="/" class="py-3 font-label-sm text-base uppercase tracking-widest text-on-surface/80 hover:text-secondary border-b border-white/5 block">首页</router-link>
        <router-link to="/signup" class="py-3 font-label-sm text-base uppercase tracking-widest text-on-surface/80 hover:text-secondary border-b border-white/5 block">参赛报名</router-link>

        <div class="border-b border-white/5">
          <button
            class="flex items-center justify-between w-full py-3 font-label-sm text-base uppercase tracking-widest text-on-surface/80 hover:text-secondary"
            @click="mobileDropdowns.awards = !mobileDropdowns.awards">
            获奖作品
            <span class="material-symbols-outlined text-[16px]">expand_more</span>
          </button>
          <div v-show="mobileDropdowns.awards" class="pb-3 pl-4 flex flex-col gap-2">
            <router-link to="/winners" class="text-sm uppercase tracking-widest text-on-surface/60 hover:text-secondary py-1 block" @click="mobileOpen = false">第十四届</router-link>
            <router-link to="/winners" class="text-sm uppercase tracking-widest text-on-surface/60 hover:text-secondary py-1 block" @click="mobileOpen = false">第十三届</router-link>
            <router-link to="/winners" class="text-sm uppercase tracking-widest text-on-surface/60 hover:text-secondary py-1 block" @click="mobileOpen = false">第十二届</router-link>
            <router-link to="/winners" class="text-sm uppercase tracking-widest text-on-surface/60 hover:text-secondary py-1 block" @click="mobileOpen = false">历届回顾</router-link>
          </div>
        </div>

        <a class="py-3 font-label-sm text-base uppercase tracking-widest text-on-surface/80 hover:text-secondary border-b border-white/5"
          href="#">新闻中心</a>

        <div class="border-b border-white/5">
          <button
            class="flex items-center justify-between w-full py-3 font-label-sm text-base uppercase tracking-widest text-on-surface/80 hover:text-secondary"
            @click="mobileDropdowns.ceremony = !mobileDropdowns.ceremony">
            颁奖盛典
            <span class="material-symbols-outlined text-[16px]">expand_more</span>
          </button>
          <div v-show="mobileDropdowns.ceremony" class="pb-3 pl-4 flex flex-col gap-2">
            <a class="text-sm uppercase tracking-widest text-on-surface/60 hover:text-secondary py-1" href="#">第十四届</a>
            <a class="text-sm uppercase tracking-widest text-on-surface/60 hover:text-secondary py-1" href="#">第十三届</a>
            <a class="text-sm uppercase tracking-widest text-on-surface/60 hover:text-secondary py-1" href="#">往届锦集</a>
          </div>
        </div>

        <a class="py-3 font-label-sm text-base uppercase tracking-widest text-on-surface/80 hover:text-secondary border-b border-white/5"
          href="#">合作伙伴</a>

        <div class="border-b border-white/5">
          <button
            class="flex items-center justify-between w-full py-3 font-label-sm text-base uppercase tracking-widest text-on-surface/80 hover:text-secondary"
            @click="mobileDropdowns.about = !mobileDropdowns.about">
            关于我们
            <span class="material-symbols-outlined text-[16px]">expand_more</span>
          </button>
          <div v-show="mobileDropdowns.about" class="pb-3 pl-4 flex flex-col gap-2">
            <a class="text-sm uppercase tracking-widest text-on-surface/60 hover:text-secondary py-1" href="#">艾特奖简介</a>
            <a class="text-sm uppercase tracking-widest text-on-surface/60 hover:text-secondary py-1" href="#">艾特奖章程</a>
            <a class="text-sm uppercase tracking-widest text-on-surface/60 hover:text-secondary py-1"
              href="#">国际学术委员会</a>
            <a class="text-sm uppercase tracking-widest text-on-surface/60 hover:text-secondary py-1" href="#">评审标准</a>
            <a class="text-sm uppercase tracking-widest text-on-surface/60 hover:text-secondary py-1" href="#">联系我们</a>
          </div>
        </div>

        <div class="flex items-center gap-3 py-3 text-on-surface/40 font-label-xs text-xs">
          <a class="hover:text-secondary" href="#">中文</a>
          <span>|</span>
          <a class="hover:text-secondary" href="#">EN</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

defineOptions({ name: 'NavBar' })

const mobileOpen = ref(false)
const mobileDropdowns = reactive({
  awards: false,
  ceremony: false,
  about: false,
})
</script>

<style scoped>
.glass-nav {
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
}

.nav-dropdown {
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-item:hover .nav-dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
</style>
