<template>
  <div class="bg-surface-dim text-on-surface font-body-md overflow-x-hidden marble-bg">
    <NavBar />

    <main class="pt-40">
      <!-- Hero Section -->
      <section class="max-w-container-max mx-auto px-margin-desktop mb-24 reveal-item">
        <div class="w-20 h-px bg-secondary mb-8"></div>
        <h1 class="font-display-hero text-[52px] md:text-[96px] text-on-surface mb-6 max-w-4xl">
          国际 <span class="text-secondary italic">学术</span> 委员会
        </h1>
        <p class="font-body-md text-xl text-on-surface-variant max-w-2xl">
          汇聚全球最具声望的学术权威与设计大师，为空间设计树立国际标准。
        </p>
      </section>

      <!-- Academic Gallery Grid -->
      <section class="max-w-container-max mx-auto px-margin-desktop mb-32">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          <div
            v-for="(member, idx) in members"
            :key="member.name"
            class="academic-card reveal-item group relative overflow-hidden bg-ink-jade gold-border"
            :style="{ transitionDelay: (idx + 1) * 100 + 'ms' }"
          >
            <div class="aspect-3/4 overflow-hidden relative">
              <img
                :alt="'Portrait of ' + member.name"
                class="w-full h-full object-cover"
                :src="member.image"
              />
              <div class="absolute inset-0 bg-linear-to-t from-surface-dim via-transparent to-transparent opacity-80"></div>
            </div>
            <div class="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h3 class="font-headline-md text-[32px] text-secondary mb-2">{{ member.name }}</h3>
              <p class="font-label-sm text-sm text-on-surface-variant uppercase tracking-widest mb-4">{{ member.title }}</p>
              <div class="h-0.5 w-0 group-hover:w-16 bg-secondary transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import NavBar from '@/views/components/NavBar.vue'
import FooterSection from '@/views/components/FooterSection.vue'
import imgA from '@/assets/a.png'
import imgB from '@/assets/b.png'
import imgC from '@/assets/c.png'
import imgD from '@/assets/d.png'
import imgE from '@/assets/e.png'
import imgF from '@/assets/f.png'

defineOptions({ name: 'InterCouncil' })

const members = [
  {
    name: '郑时龄',
    title: '中国科学院院士',
    image: imgA,
  },
  {
    name: '鲁晓波',
    title: '清华大学美术学院院长',
    image: imgB,
  },
  {
    name: 'M. Fuksas',
    title: 'Fuksas 工作室创始人，意大利著名建筑师',
    image: imgC,
  },
  {
    name: '矶崎新',
    title: '普利兹克建筑奖得主',
    image: imgD,
  },
  {
    name: '远见学者',
    title: '国际荣誉顾问',
    image: imgE,
  },
  {
    name: 'Kenneth Frampton',
    title: '哥伦比亚大学建筑学教授',
    image: imgF,
  },
]

onMounted(() => {
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

  document.querySelectorAll('.reveal-item').forEach((el) => observer.observe(el))
})
</script>

<style scoped>
.marble-bg {
  background-color: #0a0a0a;
  background-image:
    radial-gradient(circle at 20% 30%, rgba(228, 194, 133, 0.03) 0%, transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(228, 194, 133, 0.02) 0%, transparent 40%);
}

.reveal-item {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal-item.active {
  opacity: 1;
  transform: translateY(0);
}

.academic-card img {
  filter: grayscale(100%) contrast(1.1);
  transition: filter 0.6s ease, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.academic-card:hover img {
  filter: grayscale(0%) contrast(1);
  transform: scale(1.05);
}

.gold-border {
  border: 0.5px solid rgba(228, 194, 133, 0.2);
  transition: border-color 0.4s ease;
}

.academic-card:hover .gold-border {
  border-color: rgba(228, 194, 133, 1);
}
</style>
