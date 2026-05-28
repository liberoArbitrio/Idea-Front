<template>
  <div class="bg-surface text-on-surface font-body-md overflow-x-hidden">
    <NavBar />

    <!-- Hero Header -->
    <section class="relative h-screen w-full flex items-end overflow-hidden" id="hero">
      <div class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style="background-image: url(https://lh3.googleusercontent.com/aida/ADBb0uhB98JeMaPoSJ7tAxdeS1BEeAT2UIqJh9tsh9IbMLylDqmxCje2FxIYhCufzHGlNW-I_YUEGA-NxziWq0mse-oUVQkMQmV0ab8aKVKGEM22BJeIDXO4CQAbEi5czaqDvUDTyTUjF53Ynjm7hWdlFtqbQBHooOrCcxoC5QXRjhFUeADB61tjRGeIUMgcwns-IWBkxWyE2aPPiu0lzVJQD1MqrMgYwIVN4Y2KwUBsJxYU9HdJwbO7MMPhIRw)" />
      <div class="relative z-20 max-w-container-max mx-auto px-margin-desktop w-full pb-32">
        <div class="mb-10 flex items-center gap-6">
          <span class="w-16 h-[1px] bg-secondary"></span>
          <span class="font-label-xs text-xs text-secondary uppercase tracking-[0.4em] shimmer-gold font-bold">Grand
            Prix Winner 2024</span>
        </div>
        <div class="relative inline-block mb-6">
          <div class="gold-aura active"></div>
          <h1
            class="font-display-hero text-[52px] sm:text-[72px] md:text-[96px] text-white max-w-5xl tracking-tighter leading-[0.9]">
            <span v-for="(ch, i) in titleChars" :key="i" class="char-reveal"
              :style="{ animationDelay: i * 30 + 400 + 'ms' }">{{ ch }}</span>
          </h1>
        </div>
        <p class="font-headline-md text-xl md:text-2xl text-on-surface-variant italic">
          <span v-for="(ch, i) in subtitleChars" :key="i" class="char-reveal"
            :style="{ animationDelay: i * 20 + 1000 + 'ms' }">{{ ch }}</span>
        </p>
      </div>
    </section>

    <!-- Project Metadata Bar -->
    <section class="bg-ink-jade border-y-[0.5px] border-midnight-gray relative z-30 section-reveal">
      <div class="max-w-container-max mx-auto px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-gutter py-14">
        <div class="flex flex-col gap-2">
          <span class="font-label-xs text-xs text-secondary uppercase tracking-widest">Lead Architect</span>
          <span class="font-body-lg text-lg text-white">Elias Thorne Studios</span>
        </div>
        <div class="flex flex-col gap-2">
          <span class="font-label-xs text-xs text-secondary uppercase tracking-widest">Location</span>
          <span class="font-body-lg text-lg text-white">Singapore, District 09</span>
        </div>
        <div class="flex flex-col gap-2">
          <span class="font-label-xs text-xs text-secondary uppercase tracking-widest">Completion</span>
          <span class="font-body-lg text-lg text-white">December 2023</span>
        </div>
        <div class="flex flex-col gap-2">
          <span class="font-label-xs text-xs text-secondary uppercase tracking-widest">Project Category</span>
          <span class="font-body-lg text-lg text-white">Residential Excellence</span>
        </div>
      </div>
    </section>

    <!-- Philosophy Split Screen -->
    <section class="relative bg-surface py-section-gap overflow-hidden">
      <div
        class="max-w-container-max mx-auto px-margin-desktop relative min-h-[900px] flex items-center section-reveal">
        <!-- Main Large Image (Bleeds across) -->
        <div class="absolute top-0 right-0 w-3/4 h-[800px] z-0 overflow-hidden rounded-lg hidden md:block">
          <img alt="Architectural Detail" class="w-full h-full object-cover opacity-60"
            src="https://lh3.googleusercontent.com/aida/ADBb0uhEDlYAPBJNu-RhjmzqX8j0U3YuEnsAnGZfxjxxJGOQyTFWo-q5VBdHoF6A-9plUT5ZeIv9C-QNR12QleJa4xD4A5nGXxZHVugBuj4PDOB7wLrlY016IhCo0LdEfCSqXjX99tOLIH4NLagLY8pREG8OEznh7Fmrv3pfYEycOzewOXCRZa62QcVEPpav5q450lGJM8SEhWtQ-fH9A4ucTQgSCtooBvOdWMfEAB079IHOVoKTaNoPkiAmZcI" />
        </div>
        <!-- Secondary Detail Image (Overlapping) -->
        <div
          class="absolute bottom-20 right-[15%] w-1/4 h-[400px] z-20 border-8 border-surface shadow-2xl overflow-hidden rounded-lg hidden md:block">
          <img alt="Material Detail" class="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida/ADBb0ujuhYSTCB-Mi9yB-97tixTCBTE85x6mUx7e-ZTf7EX7DTD-lyV5jP17xRKRQY4LhFQq_4Wz6_OdFxDMt9ye4DFtQOlHxa_y4KLB8TZEqhJrltWneZRTA9FQWqDSkDgWgP6aVaiwnbtPKlFsiyp2Pwc-shsFIjYlILb6ZGsLcgOgpW-_ZFMLLQgFEOYC-FRvj4GCNUiqQ7NA6X7PRzS_CXpTciYC7homoDnS47nA5URWdau4SHqcn-LTLqw" />
        </div>
        <!-- Floating Content Box with Glassmorphism -->
        <div class="relative z-30 max-w-2xl bg-surface/40 backdrop-blur-xl p-10 md:p-16 border-l border-secondary/30">
          <!-- Gold Accent Glow -->
          <div class="absolute -left-20 top-1/4 w-40 h-40 bg-secondary/10 blur-[100px] pointer-events-none"></div>
          <div class="flex gap-6 md:gap-8">
            <!-- Vertical Gold Line Accent -->
            <div class="w-[1px] bg-gradient-to-b from-secondary via-secondary/20 to-transparent shrink-0"></div>
            <div class="space-y-6 md:space-y-8">
              <div class="space-y-3 md:space-y-4">
                <span class="font-label-xs text-xs text-secondary uppercase tracking-[0.4em] block">The Vision</span>
                <h2 class="font-headline-lg text-3xl md:text-[56px] text-white leading-tight">The Philosophy<br />of
                  Space</h2>
              </div>
              <div
                class="space-y-6 md:space-y-8 text-on-surface-variant font-body-lg leading-relaxed text-lg md:text-xl">
                <p class="drop-cap">Designed as a silent dialogue between shadows and light, The Obsidian Sanctuary
                  redefines modern living through the lens of architectural restraint. The project explores the
                  emotional resonance of dark textures—using matte obsidian stone and brushed gold as its primary
                  vocabulary.</p>
                <p>The space is not merely a residence but a curated journey of perception. Every angle is meticulously
                  calculated to frame the skyline of Singapore, merging the interior's stillness with the city's kinetic
                  energy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Visual Documentation -->
    <section class="bg-surface-container-lowest py-section-gap">
      <div class="max-w-container-max mx-auto px-margin-desktop">
        <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 section-reveal">
          <div>
            <span class="font-label-xs text-xs text-secondary uppercase tracking-widest mb-4 block">Visual
              Archive</span>
            <h2 class="font-headline-lg text-3xl md:text-[56px] text-white">Project Documentation</h2>
          </div>
          <div class="flex gap-4">
            <button class="p-5 border border-midnight-gray hover:border-secondary transition-all hover:scale-105 group">
              <span
                class="material-symbols-outlined text-secondary group-hover:-translate-x-1 transition-transform">arrow_back</span>
            </button>
            <button class="p-5 border border-midnight-gray hover:border-secondary transition-all hover:scale-105 group">
              <span
                class="material-symbols-outlined text-secondary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-gutter">
          <div class="col-span-12 md:col-span-8 group relative overflow-hidden h-[400px] md:h-[700px] section-reveal">
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-700 z-10"></div>
            <img alt="Cultural center exterior"
              class="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida/ADBb0ug8MIDyKjwLl2wu9BjYlfEFQh6SboLYlzONLqqx3y5rxnsjNMJSgva72YisaO4DvxOEIA0CcBenAv5J00y71mOlHJm81W1M4QkqO26n073c66aS1iurt1641hRYk0OEIOU7xEsyu5ywzgv11rsdKiJ1P6v2p8Gvp4YoAqcDLfMH5bicHg5pXSi1SFo-kTwOFK5XK2Fyw3hQIgwpt1Kar9qGPW3r-Ks0DXmPZ9E278AuuzUWRLs-obfpaLc" />
            <div
              class="absolute bottom-10 left-10 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
              <span
                class="font-label-sm text-sm text-white uppercase tracking-widest bg-black/20 backdrop-blur-md px-6 py-2">Exterior
                / Twilight Resonance</span>
            </div>
          </div>
          <div class="col-span-12 md:col-span-4 group relative overflow-hidden h-[300px] md:h-[700px] section-reveal">
            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-700 z-10"></div>
            <img alt="Boutique interior detail"
              class="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida/ADBb0ujuhYSTCB-Mi9yB-97tixTCBTE85x6mUx7e-ZTf7EX7DTD-lyV5jP17xRKRQY4LhFQq_4Wz6_OdFxDMt9ye4DFtQOlHxa_y4KLB8TZEqhJrltWneZRTA9FQWqDSkDgWgP6aVaiwnbtPKlFsiyp2Pwc-shsFIjYlILb6ZGsLcgOgpW-_ZFMLLQgFEOYC-FRvj4GCNUiqQ7NA6X7PRzS_CXpTciYC7homoDnS47nA5URWdau4SHqcn-LTLqw" />
            <div
              class="absolute bottom-10 left-10 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
              <span
                class="font-label-sm text-sm text-white uppercase tracking-widest bg-black/20 backdrop-blur-md px-6 py-2">Detail
                / Material Contrast</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Juror Quote Section -->
    <section ref="jurorRef" class="relative bg-surface py-section-gap overflow-hidden" id="juror-section">
      <div ref="particlesRef" class="absolute inset-0 pointer-events-none z-0"></div>
      <div class="max-w-container-max mx-auto px-margin-desktop relative z-10">
        <div class="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span class="material-symbols-outlined text-7xl text-secondary/40 mb-12 section-reveal"
            style="font-variation-settings: 'FILL' 1">format_quote</span>
          <div class="overflow-hidden mb-16">
            <blockquote
              class="font-quote-italic text-white italic text-2xl md:text-5xl leading-[1.4] opacity-0 transition-opacity duration-1000"
              :class="{ 'opacity-100': jurorActive }">
              "The Obsidian Sanctuary is a masterclass in atmospheric architecture. It demonstrates how a monochromatic
              palette, when executed with such surgical precision, can evoke a profound sense of warmth and invitation.
              It is, quite simply, the new standard for luxury residential design."
            </blockquote>
          </div>
          <div class="flex flex-col items-center section-reveal">
            <div class="gold-line w-24 mb-6"></div>
            <p class="font-label-xs text-xs text-secondary uppercase tracking-[0.3em] mb-2">Pritzker Prize Juror</p>
            <p class="font-headline-md text-2xl md:text-4xl text-white">Sir David Adjaye</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Projects -->
    <section class="grid grid-cols-1 md:grid-cols-2 border-t-[0.5px] border-midnight-gray section-reveal">
      <router-link to="/winners"
        class="group relative py-10 md:py-14 px-margin-desktop flex flex-col justify-center items-start overflow-hidden border-r-[0.5px] border-midnight-gray">
        <div
          class="absolute inset-0 bg-secondary/5 transition-transform duration-700 origin-left scale-x-0 group-hover:scale-x-100 z-0">
        </div>
        <div class="relative z-10 translate-x-0 group-hover:translate-x-3 transition-transform duration-500">
          <span class="font-label-xs text-xs text-secondary uppercase mb-3 block tracking-widest">Previous Winner</span>
          <h3 class="font-headline-md text-lg md:text-2xl text-white group-hover:text-secondary transition-colors">The
            Sky Garden Villa</h3>
        </div>
        <span
          class="material-symbols-outlined absolute right-6 md:right-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-3 group-hover:translate-x-0 text-secondary text-2xl">west</span>
      </router-link>
      <router-link to="/winners"
        class="group relative py-10 md:py-14 px-margin-desktop flex flex-col justify-center items-end text-right overflow-hidden">
        <div
          class="absolute inset-0 bg-secondary/5 transition-transform duration-700 origin-right scale-x-0 group-hover:scale-x-100 z-0">
        </div>
        <div class="relative z-10 translate-x-0 group-hover:-translate-x-3 transition-transform duration-500">
          <span class="font-label-xs text-xs text-secondary uppercase mb-3 block tracking-widest">Next Winner</span>
          <h3 class="font-headline-md text-lg md:text-2xl text-white group-hover:text-secondary transition-colors">Nomad
            Cultural Hub</h3>
        </div>
        <span
          class="material-symbols-outlined absolute left-6 md:left-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-3 group-hover:translate-x-0 text-secondary text-2xl">east</span>
      </router-link>
    </section>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import NavBar from '@/views/components/NavBar.vue'
import FooterSection from '@/views/components/FooterSection.vue'

defineOptions({ name: 'AwardDetail' })

const jurorRef = ref<HTMLElement | null>(null)
const particlesRef = ref<HTMLDivElement | null>(null)
const jurorActive = ref(false)

// ─── 标题逐字动画 ─────────────────────────────────────
const titleText = 'The Obsidian Sanctuary'
const subtitleText = 'Interior Design & Spatial Luxury'

// 用零宽空格保留空格，确保 CSS 逐字动画正常工作
const titleChars = [...titleText].map((ch) => (ch === ' ' ? '\u00A0' : ch))
const subtitleChars = [...subtitleText].map((ch) => (ch === ' ' ? '\u00A0' : ch))

onMounted(() => {
  // ─── Scroll Reveal ──────────────────────────────────
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
          if (entry.target === jurorRef.value) {
            jurorActive.value = true
            startParticles()
          }
        }
      })
    },
    { threshold: 0.15 },
  )

  document.querySelectorAll('.section-reveal').forEach((el) => observer.observe(el))
  if (jurorRef.value) observer.observe(jurorRef.value)
})

// ─── 粒子效果 ─────────────────────────────────────────
let particlesStarted = false

function startParticles() {
  if (particlesStarted) return
  const container = particlesRef.value
  if (!container || container.children.length > 0) return
  particlesStarted = true

  for (let i = 0; i < 50; i++) {
    const p = document.createElement('div')
    p.className = 'absolute bg-secondary/30 rounded-full pointer-events-none'
    const size = Math.random() * 3 + 1
    p.style.width = `${size}px`
    p.style.height = `${size}px`
    p.style.left = `${Math.random() * 100}%`
    p.style.top = `${Math.random() * 100}%`
    p.style.filter = 'blur(1px)'

    const duration = Math.random() * 15 + 10
    const delay = Math.random() * 5
    p.animate(
      [
        { transform: 'translate(0, 0)', opacity: 0 },
        { transform: `translate(${Math.random() * 100 - 50}px, -100px)`, opacity: 0.6 },
        { transform: `translate(${Math.random() * 200 - 100}px, -200px)`, opacity: 0 },
      ],
      { duration: duration * 1000, delay: delay * 1000, iterations: Infinity, easing: 'ease-out' },
    )
    container.appendChild(p)
  }
}
</script>

<style scoped>
/* ─── 金色分割线 ────────────────────────────────────── */
.gold-line {
  height: 0.5px;
  background-color: rgba(228, 194, 133, 0.3);
}

/* ─── 金色闪烁文字 ──────────────────────────────────── */
.shimmer-gold {
  background: linear-gradient(90deg, #e4c285 25%, #ffdea4 50%, #e4c285 75%);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 4s infinite linear;
}

@keyframes shimmer {
  0% {
    background-position: -200% center;
  }

  100% {
    background-position: 200% center;
  }
}

/* ─── 标题光晕（不用 filter:blur 避免触发合成层导致模糊） ─── */
.gold-aura {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300%;
  height: 300%;
  background: radial-gradient(circle, rgba(228, 194, 133, 0.08) 0%, transparent 50%);
  z-index: -1;
  opacity: 0;
  transition: opacity 2s ease;
}

.gold-aura.active {
  opacity: 1;
}

/* ─── 逐字动画（keyframes 方式，保证首次加载触发） ──── */
.char-reveal {
  display: inline-block;
  animation: charFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes charFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ─── 滚动入场 ──────────────────────────────────────── */
.section-reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.section-reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* ─── 段首大字 ──────────────────────────────────────── */
.drop-cap::first-letter {
  float: left;
  font-size: 4em;
  line-height: 0.8;
  padding-right: 0.15em;
  color: #e4c285;
  font-family: 'Playfair Display', serif;
  font-weight: 900;
}
</style>
