<template>
  <section class="relative py-20 md:py-40 px-margin-desktop overflow-hidden">
    <div class="absolute inset-0 bg-ink-jade z-0"></div>
    <div
      class="absolute inset-0 opacity-40 pointer-events-none z-10"
      style="background-image: radial-gradient(circle at 50% 50%, #e4c285 0%, transparent 60%);"
    ></div>
    <div ref="contentRef" class="relative z-20 max-w-container-max mx-auto text-center stagger-in">
      <h2 class="font-display-hero text-headline-lg gold-gradient-text mb-12 leading-tight drop-shadow-lg">
        15th IDEA-TOPS<br />Global Call for Entries
      </h2>
      <div class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-12 md:mb-20">
        <div class="flex flex-col items-center">
          <div class="font-label-xs text-label-xs text-lead-gray uppercase tracking-[0.3em] mb-4">报名截止日期</div>
          <div class="font-headline-md text-headline-md text-on-surface">2024年12月31日</div>
        </div>
        <div class="hidden md:block w-px h-24 bg-white/10"></div>
        <div class="flex flex-col items-center">
          <div class="font-label-xs text-label-xs text-lead-gray uppercase tracking-[0.3em] mb-4">正式类别</div>
          <div class="font-headline-md text-headline-md text-on-surface">标准 & 专业组</div>
        </div>
      </div>
      <button
        class="group px-12 py-5 md:px-20 md:py-8 bg-secondary text-ink-jade font-label-sm text-label-xs md:text-label-sm uppercase tracking-[0.3em] font-black hover:md:px-24 hover:shadow-[0_0_50px_rgba(228,194,133,0.4)] transition-all duration-700 flex items-center gap-4 md:gap-6 mx-auto"
      >
        提交作品
        <span class="material-symbols-outlined group-hover:translate-x-3 transition-transform duration-500">arrow_forward</span>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineOptions({ name: 'SubmitSection' })

const contentRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    },
    { threshold: 0.1 },
  )
  if (contentRef.value) observer.observe(contentRef.value)
})
</script>

<style scoped>
.stagger-in {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.stagger-in.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
