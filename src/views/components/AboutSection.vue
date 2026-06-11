<template>
  <section class="py-section-gap px-margin-desktop max-w-container-max mx-auto relative">
    <div class="absolute -left-20 top-1/2 w-64 h-64 radial-bloom pointer-events-none"></div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
      <!-- Left: Text Content -->
      <div ref="leftRef" class="stagger-in order-2 lg:order-1">
        <h3 class="font-label-xs text-label-xs text-secondary uppercase tracking-[0.4em] mb-4 md:mb-6">Our Prestige</h3>
        <h2 class="font-headline-lg text-headline-md md:text-headline-lg mb-6 md:mb-8 leading-tight">
          One of the <span class="text-secondary italic">Four Major</span> International Design Awards
        </h2>
        <p class="font-body-lg text-body-md md:text-body-lg text-on-surface-variant/80 mb-8 md:mb-10 leading-relaxed">
          IDEA-TOPS is the most influential design award in China, recognized globally for its professional
          rigor and aesthetic authority. It stands as a bridge between the East and West, celebrating the
          vanguard of spatial innovation.
        </p>
        <div class="grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
          <div>
            <div ref="count75" class="font-display-hero text-headline-lg gold-gradient-text mb-2 count-up"
              data-target="75">0</div>
            <div class="font-label-xs text-label-xs text-lead-gray uppercase tracking-widest">Countries</div>
          </div>
          <div>
            <div ref="count7026" class="font-display-hero text-headline-lg gold-gradient-text mb-2 count-up"
              data-target="7026">0</div>
            <div class="font-label-xs text-label-xs text-lead-gray uppercase tracking-widest">Works</div>
          </div>
          <div>
            <div ref="count24" class="font-display-hero text-headline-lg gold-gradient-text mb-2 count-up"
              data-target="24">0</div>
            <div class="font-label-xs text-label-xs text-lead-gray uppercase tracking-widest">Fields</div>
          </div>
        </div>
      </div>

      <!-- Right: Image -->
      <div ref="rightRef" class="relative group stagger-in order-1 lg:order-2 mb-8 lg:mb-0">
        <div
          class="absolute -inset-6 border-[0.5px] border-secondary/20 group-hover:border-secondary transition-all duration-700">
        </div>
        <div class="overflow-hidden luxury-hover">
          <img class="w-full aspect-4/5 object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            :src="img4" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import img4 from '@/assets/2.png'

defineOptions({ name: 'AboutSection' })

const leftRef = ref<HTMLDivElement | null>(null)
const rightRef = ref<HTMLDivElement | null>(null)
const count75 = ref<HTMLDivElement | null>(null)
const count7026 = ref<HTMLDivElement | null>(null)
const count24 = ref<HTMLDivElement | null>(null)

function startCountUp(el: HTMLElement) {
  if (el.dataset.counted) return
  el.dataset.counted = 'true'
  const target = parseInt(el.dataset.target || '0')
  let current = 0
  const duration = 2500
  const increment = target / (duration / 16)
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      el.textContent = target.toLocaleString()
      clearInterval(timer)
    } else {
      el.textContent = Math.floor(current).toLocaleString()
    }
  }, 16)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          const countUps = entry.target.querySelectorAll('.count-up')
          countUps.forEach((el) => startCountUp(el as HTMLElement))
        }
      })
    },
    { threshold: 0.1 },
  )

  if (leftRef.value) observer.observe(leftRef.value)
  if (rightRef.value) observer.observe(rightRef.value)
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
