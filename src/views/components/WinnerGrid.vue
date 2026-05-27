<template>
  <section class="py-section-gap bg-surface-container-lowest/50 relative overflow-hidden">
    <!-- Top gradient line -->
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

    <div class="px-margin-desktop max-w-container-max mx-auto">
      <!-- Header -->
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6 md:gap-8">
        <div ref="headerRef" class="stagger-in">
          <h2 class="font-headline-lg text-headline-md md:text-headline-lg mb-2 md:mb-4">Award Winners</h2>
          <p class="font-body-md text-sm md:text-body-md text-on-surface-variant/70">
            The pinnacle of spatial excellence from the 14th edition.
          </p>
        </div>
        <div ref="tabsRef" class="flex gap-3 md:gap-4 overflow-x-auto pb-2 stagger-in w-full md:w-auto">
          <button
            v-for="category in categories"
            :key="category"
            class="px-4 md:px-6 py-1.5 md:py-2 font-label-sm text-[11px] md:text-label-sm uppercase tracking-widest whitespace-nowrap transition-colors"
            :class="activeCategory === category
              ? 'border-b-2 border-secondary text-secondary'
              : 'text-on-surface-variant hover:text-on-surface'"
            @click="activeCategory = category"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <!-- Main Featured Item (8 cols) -->
        <div ref="mainRef" class="md:col-span-8 group relative overflow-hidden stagger-in">
          <div class="absolute inset-0 bg-ink-jade/20 z-10 group-hover:bg-transparent transition-all duration-700"></div>
          <!-- Grand Prix Badge -->
          <div class="absolute top-3 md:top-6 left-3 md:left-6 z-20 flex items-center gap-1.5 md:gap-2 px-3 md:px-6 py-1 md:py-2 glass-morphism text-secondary font-label-xs text-[10px] md:text-label-xs font-bold uppercase tracking-widest border border-secondary/30">
            <span class="material-symbols-outlined text-[14px] md:text-sm">workspace_premium</span> Grand Prix
          </div>
          <img
            class="w-full h-full min-h-[280px] md:min-h-[550px] object-cover transition-transform duration-1000 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHPGQ_3Tbg4mu8IMSEr5TybzlZpG8lecceby6D3F5futsUJ614OWA-KSKxGfhmG77VIu6Hs7qmJBERD26ZlbZlYiiNaDaoCefY7_inQ79vV1IjpR6xNHfFRT7WZIiODOQ1UE2shnCHFrcwJo4xKGdFHD5mMYOGU1wX4yPxE128pE4YVglFjBz-Pudvu-jlJr36CL-KQhwO5OZcVXstq8Z8G0KBl4n5_bnSxCxgzWzj3-M2JIWWm3R65FnqCYDHOA9TGfVMcLs2FOw"
          />
          <!-- Info Overlay -->
          <div class="absolute bottom-0 left-0 w-full p-6 md:p-10 z-20 bg-gradient-to-t from-background via-background/60 to-transparent translate-y-4 group-hover:translate-y-0 transition-all duration-700">
            <h3 class="font-headline-md text-[24px] md:text-[40px] text-on-surface mb-1 md:mb-2 font-bold">The Ethereal Pavilion</h3>
            <p class="font-body-md text-xs md:text-body-md text-secondary/80 tracking-wider md:tracking-widest uppercase">Dubai, UAE | Architecture Design</p>
          </div>
        </div>

        <!-- Side Items (4 cols) -->
        <div class="md:col-span-4 flex flex-col md:flex-col gap-gutter">
          <div ref="side1Ref" class="flex-1 min-h-[180px] md:min-h-0 group relative overflow-hidden stagger-in">
            <img
              class="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2iFrB47hb994EFyegWpcgHswAkCWmhc73N5vL96e2TQUCoH9HjJTE4HefF3A4pCVzW9C926HV8PYE8UdZ3LApJvQdr3HwAB3gsvrCg5_zW1IXj2CUonuLTiwLzM8ajLTby3epV0T7vQWeCtsT9X_tu_tGqA6TupUfP6Bd5EWlIjyy0tqLxfAN7BODTYGC1OeECnoy4-Gq62YIEUyRXBT_G1r66NmJKxwsHccwt0R8m9b1jnpmnNCGT0CT7RzM6tNalOs7wjkMsvE"
            />
            <div class="absolute bottom-0 left-0 w-full p-4 md:p-8 z-20 bg-gradient-to-t from-background/80 to-transparent">
              <h3 class="font-headline-md text-base md:text-body-lg text-on-surface font-semibold">Monolith Retail</h3>
            </div>
          </div>
          <div ref="side2Ref" class="flex-1 min-h-[180px] md:min-h-0 group relative overflow-hidden stagger-in">
            <img
              class="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOxEl-Bs5_662tAOU5f2csWNq52Ee7yrULOln0r0Y8BKf7bROcTlAWDESPTtTkSu18TbZ9n7-eWXqpO6uLCCxCK6oKkIYiJ3UpOOMQLTjnurBnG8LWdFkgSoK-R9yukHKaIrOMoWmcFVrr3VKdXCv9_3K6sqMpY46TGeOb0Cug4CPWUpEKSeWod9eCIJ_CTGuLiZj5keBOISzyfGWk31K-58iQYioNOBWuw30CxsfnuYogmXiF9qvMJkQPztOD8inRY3u-8nF2O68"
            />
            <div class="absolute bottom-0 left-0 w-full p-4 md:p-8 z-20 bg-gradient-to-t from-background/80 to-transparent">
              <h3 class="font-headline-md text-base md:text-body-lg text-on-surface font-semibold">Oasis Sanctuary</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineOptions({ name: 'WinnerGrid' })

const activeCategory = ref('Architecture')
const categories = ['Architecture', 'Interior', 'Landscape', 'Retail']

const headerRef = ref<HTMLDivElement | null>(null)
const tabsRef = ref<HTMLDivElement | null>(null)
const mainRef = ref<HTMLDivElement | null>(null)
const side1Ref = ref<HTMLDivElement | null>(null)
const side2Ref = ref<HTMLDivElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 },
  )

  const refs = [headerRef, tabsRef, mainRef, side1Ref, side2Ref]
  refs.forEach((r) => {
    if (r.value) observer.observe(r.value)
  })
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
