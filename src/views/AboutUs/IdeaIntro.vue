<template>
  <div class="bg-sg-deep-charcoal text-on-surface font-body-md overflow-x-hidden">
    <NavBar />

    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img ref="parallaxRef" class="w-full h-full object-cover opacity-40 scale-105 parallax-bg" :src="img1" />
        <div class="absolute inset-0 bg-linear-to-b from-transparent via-sg-deep-charcoal/50 to-sg-deep-charcoal"></div>
      </div>
      <div class="relative z-10 text-center max-w-4xl px-margin-mobile">
        <span class="block font-label-sm text-sm uppercase tracking-[0.3em] text-secondary mb-6 reveal-on-scroll">Est.
          2010</span>
        <h1 class="font-display-hero text-[56px] md:text-[96px] text-white mb-8 reveal-on-scroll"
          style="transition-delay: 200ms;">
          The Pinnacle of <br />
          <span class="italic text-secondary">Global Design</span>
        </h1>
        <p class="font-body-md text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto reveal-on-scroll"
          style="transition-delay: 400ms;">
          艾特奖：连接世界，定义未来。
        </p>
      </div>
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span class="material-symbols-outlined text-secondary opacity-50">keyboard_double_arrow_down</span>
      </div>
    </section>

    <!-- Narrative Section -->
    <section class="py-section-gap relative">
      <div
        class="liquid-gold-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-30">
      </div>
      <div class="max-w-container-max mx-auto px-margin-desktop grid grid-cols-12 gap-gutter items-center">
        <div class="col-span-12 lg:col-span-5 reveal-on-scroll">
          <h2 class="font-headline-lg text-[40px] md:text-[56px] mb-8 gold-underline">艾特奖简介</h2>
          <div class="space-y-6 font-body-md text-base text-on-surface-variant">
            <p class="text-white font-semibold">IDEA-TOPS 国际空间设计大奖，作为中国最具国际影响力的设计大奖，自创立以来始终坚持以学术性、权威性、国际化为宗旨。</p>
            <p>艾特奖（IDEA-TOPS）不仅是对设计卓越的肯定，更是全球设计师交流思想、展示才华的殿堂。每一届颁奖盛典都汇聚了来自全球的顶尖建筑师与设计师。</p>
            <p>我们致敬那些重新定义空间、光影与材质边界的远见者。每年，来自50多个国家的数千件作品角逐"艾特奖"金奖殊荣。</p>
          </div>
        </div>
        <div class="col-span-12 lg:col-span-6 lg:col-start-7 reveal-on-scroll mt-12 lg:mt-0"
          style="transition-delay: 300ms;">
          <div class="relative group">
            <div
              class="absolute -inset-4 border-[0.5px] border-midnight-gray group-hover:border-secondary transition-colors duration-500">
            </div>
            <img
              class="relative z-10 w-full aspect-4/5 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              :src="img2" />
          </div>
        </div>
      </div>
    </section>

    <!-- Milestones Section -->
    <section class="py-section-gap bg-surface-container-lowest">
      <div class="max-w-container-max mx-auto px-margin-desktop">
        <div class="text-center mb-32 reveal-on-scroll">
          <h2 class="font-headline-lg text-[40px] md:text-[56px] mb-4">艾特奖大事记</h2>
          <p class="font-label-sm text-sm uppercase tracking-widest text-secondary">The Journey of Excellence (2010 -
            2021)</p>
        </div>
        <div class="relative max-w-4xl mx-auto">
          <div class="absolute left-1/2 top-0 bottom-0 w-[0.5px] timeline-line -translate-x-1/2 hidden md:block"></div>
          <div class="space-y-32">
            <div v-for="(ms, idx) in milestones" :key="ms.year"
              class="relative flex items-center justify-between reveal-on-scroll"
              :class="{ 'md:flex-row-reverse': idx % 2 !== 0 }">
              <div class="w-5/12 text-right pr-12 hidden md:block"
                :class="{ 'md:text-left md:pl-12 md:pr-0': idx % 2 !== 0 }">
                <span class="font-display-hero text-[56px] text-secondary opacity-30">{{ ms.year }}</span>
              </div>
              <div
                class="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-secondary shadow-[0_0_15px_rgba(228,194,133,0.8)] rounded-full z-10 border-4 border-ink-jade hidden md:block"
                :class="{ 'animate-pulse': ms.year === '2021' }"></div>
              <div class="md:w-5/12" :class="idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'">
                <h3 class="font-headline-md text-white mb-2 md:hidden">{{ ms.year }}</h3>
                <h4 class="font-label-sm text-sm text-secondary uppercase mb-2">{{ ms.label }}</h4>
                <p class="font-body-md text-base text-on-surface-variant">{{ ms.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Grid -->
    <section class="py-section-gap relative overflow-hidden">
      <div class="max-w-container-max mx-auto px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
        <div v-for="(stat, idx) in stats" :key="stat.value" class="reveal-on-scroll"
          :style="{ transitionDelay: idx * 100 + 'ms' }">
          <p class="font-display-hero text-[56px] text-secondary mb-2">{{ stat.value }}</p>
          <p class="font-label-sm text-sm uppercase tracking-widest text-on-surface-variant">{{ stat.label }}</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-section-gap border-t-[0.5px] border-midnight-gray">
      <div class="max-w-container-max mx-auto px-margin-desktop text-center">
        <h2 class="font-headline-lg text-[40px] md:text-[56px] mb-12 reveal-on-scroll">加入传承之旅。</h2>
        <div class="flex flex-col md:flex-row items-center justify-center gap-6 reveal-on-scroll">
          <router-link to="/signup"
            class="px-12 py-4 bg-secondary text-ink-jade font-label-sm text-sm uppercase tracking-widest font-bold hover:bg-white transition-all duration-300">
            立即报名
          </router-link>
          <router-link to="/winners"
            class="px-12 py-4 border border-secondary text-secondary font-label-sm text-sm uppercase tracking-widest hover:bg-secondary/10 transition-all duration-300">
            获奖作品
          </router-link>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import NavBar from '@/views/components/NavBar.vue'
import FooterSection from '@/views/components/FooterSection.vue'
import img1 from "@/assets/12.png"
import img2 from "@/assets/13.png"

defineOptions({ name: 'IdeaIntro' })

const parallaxRef = ref<HTMLImageElement | null>(null)

const milestones = [
  { year: '2010', label: '诞生', desc: '艾特奖在深圳正式诞生，开启了中国室内设计走向世界的新纪元。' },
  { year: '2012', label: '全球拓展', desc: '参赛国家突破35个，与多个国际建筑师协会建立深度战略合作。' },
  { year: '2015', label: '学术引领', desc: '评审团扩充至百余位全球顶尖专家，确立学术评审核心体系。' },
  { year: '2018', label: '数字融合', desc: '引入AI与数字化评估系统，推动设计科技与人文艺术的融合。' },
  { year: '2021', label: '全球权威', desc: '成为全球最具威望的建筑与室内设计大奖之一，参赛总数创历史新高。' },
]

const stats = [
  { value: '50+', label: '参赛国家' },
  { value: '12k+', label: '年度投稿' },
  { value: '14', label: '届传承' },
  { value: '100+', label: '全球专家评委' },
]

// ─── Parallax ────────────────────────────────────────
let scrollHandler: (() => void) | null = null

onMounted(() => {
  scrollHandler = () => {
    if (parallaxRef.value) {
      parallaxRef.value.style.transform = `scale(1.05) translateY(${window.scrollY * 0.15}px)`
    }
  }
  window.addEventListener('scroll', scrollHandler, { passive: true })

  // ─── Scroll Reveal ────────────────────────────────
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
  )
  document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el))
})

onBeforeUnmount(() => {
  if (scrollHandler) {
    window.removeEventListener('scroll', scrollHandler)
  }
})
</script>

<style scoped>
.liquid-gold-glow {
  background: radial-gradient(circle, rgba(228, 194, 133, 0.08) 0%, rgba(10, 10, 10, 0) 70%);
}

.gold-underline {
  position: relative;
}

.gold-underline::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: #e4c285;
}

.timeline-line {
  background: linear-gradient(to bottom, transparent, #e4c285 10%, #e4c285 90%, transparent);
}

.reveal-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-on-scroll.active {
  opacity: 1;
  transform: translateY(0);
}

.parallax-bg {
  transition: transform 0.1s ease-out;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}
</style>
