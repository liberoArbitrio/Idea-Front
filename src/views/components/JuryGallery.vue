<template>
  <section class="py-section-gap px-margin-desktop bg-background">
    <div class="max-w-container-max mx-auto">
      <h2 ref="titleRef" class="font-headline-lg text-headline-md md:text-headline-lg mb-12 md:mb-20 text-center stagger-in">
        The Academic Council
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
        <div
          v-for="(judge, idx) in judges"
          :key="idx"
          :ref="(el) => { if (el) cardRefs[idx] = el as HTMLDivElement }"
          class="group stagger-in"
        >
          <div class="relative mb-6 overflow-hidden bg-midnight-gray">
            <img
              class="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
              :src="judge.image"
              :alt="judge.name"
            />
            <div class="absolute inset-0 border border-white/5 group-hover:border-secondary/40 transition-colors duration-500"></div>
          </div>
          <h3 class="font-headline-md text-[20px] md:text-[24px] mb-1 md:mb-2 font-bold group-hover:text-secondary transition-colors">
            {{ judge.name }}
          </h3>
          <p class="font-label-xs text-label-xs text-lead-gray uppercase tracking-widest leading-relaxed">
            {{ judge.title }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import g1 from '@/assets/g1.png'
import g2 from '@/assets/g2.png'
import g3 from '@/assets/g3.jpg'
import g4 from '@/assets/g4.jpg'
import g5 from '@/assets/g5.jpg'

defineOptions({ name: 'JuryGallery' })

const titleRef = ref<HTMLDivElement | null>(null)
const cardRefs: HTMLDivElement[] = []

interface Judge {
  name: string
  title: string
  image: string
}

const judges: Judge[] = [
  {
    name: '孟建民',
    title: '中国工程院院士，全国建筑设计大师，梁思成建筑奖获得者',
    image: g1,
  },
  {
    name: '本妮德塔·塔利亚布',
    title: '普利兹克奖评委，EMBT米拉莱斯-塔利亚布建筑事务所董事',
    image: g2,
  },
  {
    name: '崔恺',
    title: '中国工程院院士，中国建筑设计研究院总建筑师，国家设计大师',
    image: g3,
  },
  {
    name: '马西米利亚诺·福克萨斯',
    title: '意大利Fuksas Studio创始人，深圳机场T3航站楼设计者',
    image: g4,
  },
  {
    name: '鲁晓波',
    title: '清华大学艺术与科学研究中心常务副主任，博士生导师',
    image: g5,
  },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    },
    { threshold: 0.1 },
  )
  if (titleRef.value) observer.observe(titleRef.value)
  cardRefs.forEach((el) => observer.observe(el))
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
