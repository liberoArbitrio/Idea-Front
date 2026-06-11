<template>
  <div class="bg-surface-container-lowest text-on-surface font-body-md overflow-x-hidden min-h-screen">
    <NavBar />

    <!-- Hero Section -->
    <section class="relative h-[580px] md:h-[680px] flex items-center justify-center overflow-hidden pt-20">
      <div class="absolute inset-0 bg-black/60 z-10"></div>
      <img
        class="absolute inset-0 w-full h-full object-cover"
        :src="heroBg"
      />
      <div class="relative z-20 text-center px-4 stagger-in">
        <span class="font-label-sm text-secondary/70 tracking-[0.3em] uppercase mb-4 block">国际空间设计大奖</span>
        <h1 class="font-display-hero text-[48px] sm:text-[64px] md:text-[96px] gold-gradient-text mb-8 leading-none">获奖作品集</h1>
        <div class="flex flex-wrap justify-center gap-6">
          <div class="flex space-x-6 md:space-x-8 items-center border-y border-secondary/20 py-3 md:py-4 px-8 md:px-12">
            <button
              v-for="ed in editions"
              :key="ed"
              class="font-headline-md text-lg md:text-xl transition-colors duration-300"
              :class="ed === activeEdition
                ? 'text-secondary'
                : 'text-on-surface-variant/50 hover:text-secondary'"
              @click="activeEdition = ed"
            >
              {{ ed }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content Area with Independent Scroll -->
    <div class="max-w-container-max mx-auto px-margin-desktop grid grid-cols-12 gap-gutter h-[calc(100vh-5rem)] min-h-[600px]">
      <!-- Sidebar Navigation — 始终固定在左侧可见区域 -->
      <aside class="col-span-12 md:col-span-3 py-8 md:py-16 space-y-7 overflow-y-auto hidden-scrollbar h-full pr-0 md:pr-6">
        <div v-for="cat in sidebarCategories" :key="cat.letter">
          <h3 class="font-label-sm text-secondary tracking-widest uppercase mb-4 border-b border-midnight-gray/50 pb-2">
            {{ cat.letter }}：{{ cat.group }}
          </h3>
          <ul class="space-y-2 font-label-sm text-on-surface-variant">
            <li
              v-for="item in cat.items"
              :key="item"
              class="cursor-pointer transition-colors duration-300 text-sm"
              :class="activeCategory === item ? 'text-secondary font-bold' : 'hover:text-secondary'"
              @click="activeCategory = item"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </aside>

      <!-- Winners Grid — 独立滚动区 -->
      <div class="col-span-12 md:col-span-9 py-8 md:py-16 overflow-y-auto h-full hidden-scrollbar pr-0 md:pr-2">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <h2 class="font-headline-lg text-secondary text-2xl md:text-3xl">{{ activeCategory }}</h2>
            <p class="font-body-md text-on-surface-variant/70 max-w-xl mt-1">
              {{ categoryDescription }}
            </p>
          </div>
          <div class="flex items-center space-x-3 border border-midnight-gray p-1 rounded-full shrink-0">
            <button
              class="p-2 rounded-full material-symbols-outlined text-lg transition-colors duration-300"
              :class="viewMode === 'grid' ? 'bg-secondary text-surface-dim' : 'text-on-surface-variant hover:text-secondary'"
              @click="viewMode = 'grid'"
            >grid_view</button>
            <button
              class="p-2 rounded-full material-symbols-outlined text-lg transition-colors duration-300"
              :class="viewMode === 'list' ? 'bg-secondary text-surface-dim' : 'text-on-surface-variant hover:text-secondary'"
              @click="viewMode = 'list'"
            >view_list</button>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-gutter pb-8">
          <router-link
            v-for="(card, idx) in winnerCards"
            :key="idx"
            :to="`/award/${card.id}`"
            class="card-item group relative aspect-4/5 overflow-hidden border border-white/5 hover:border-secondary/30 cursor-pointer stagger-in block"
          >
            <img
              class="w-full h-full object-cover card-img"
              :src="card.image"
              :alt="card.title"
            />
            <div class="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
            <div class="absolute bottom-0 left-0 p-6 md:p-8 w-full card-info">
              <span class="font-label-xs text-secondary/90 uppercase tracking-[0.2em] mb-2 block">{{ card.award }}</span>
              <h3 class="font-headline-md text-white text-xl md:text-2xl mb-1">{{ card.title }}</h3>
              <p class="font-body-md text-on-surface-variant/80 text-sm md:text-base mb-3">{{ card.location }}</p>
              <div class="h-px bg-linear-to-r from-secondary/60 to-transparent w-0 group-hover:w-full transition-all duration-700"></div>
            </div>
          </router-link>
        </div>

        <div class="mt-16 md:mt-24 text-center pb-8">
          <button
            class="px-10 md:px-12 py-3 md:py-4 border border-secondary/60 text-secondary font-label-sm uppercase tracking-[0.3em] hover:bg-secondary hover:text-surface-dim transition-all duration-500 text-sm"
          >
            加载更多
          </button>
        </div>
      </div>
    </div>

    <!-- Strategic Partners -->
    <!--
    <section class="bg-surface-container-low border-y border-midnight-gray/50">
      <div class="max-w-container-max mx-auto px-margin-desktop py-16 md:py-24">
        <h4 class="font-label-sm text-secondary/50 tracking-[0.4em] uppercase text-center mb-14">全球战略合作伙伴</h4>
        <div
          class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 items-center opacity-30 hover:opacity-80 transition-opacity duration-1000 grayscale hover:grayscale-0"
        >
          <img
            v-for="partner in partners"
            :key="partner.name"
            :alt="partner.name"
            class="h-6 md:h-8 mx-auto object-contain"
            :src="partner.logo"
          />
        </div>
      </div>
    </section>
    -->

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import NavBar from '@/views/components/NavBar.vue'
import FooterSection from '@/views/components/FooterSection.vue'
import heroBg from '@/assets/5.png'
import img6 from '@/assets/6.png'
import img7 from '@/assets/7.png'
import img8 from '@/assets/8.png'
import img9 from '@/assets/9.png'

defineOptions({ name: 'WinnersArchive' })

// ─── 届数选择 ──────────────────────────────────────────
const editions = ['第14届', '第13届', '第12届', '第11届', '第10届']
const activeEdition = ref('第14届')

// ─── 分类侧栏 ──────────────────────────────────────────
const activeCategory = ref('新区规划')

const sidebarCategories = [
  {
    letter: 'A', group: '城市设计',
    items: ['新区规划', '城市更新', '街区改造'],
  },
  {
    letter: 'B', group: '建筑设计',
    items: ['文化建筑', '教育建筑', '住宅建筑', '商业建筑', '公共/绿色建筑', '装配式建筑'],
  },
  {
    letter: 'C', group: '景观设计',
    items: ['都市景观', '社区景观', '生态景观'],
  },
  {
    letter: 'D', group: '室内设计',
    items: ['文化空间', '办公/商业空间', '展陈/餐饮空间', '酒店/休闲空间', '陈设艺术'],
  },
  {
    letter: 'E', group: '光环境设计',
    items: ['城市建筑光环境', '建筑室内光环境'],
  },
  {
    letter: 'F', group: '城市公共艺术',
    items: ['艺术装置', '科技艺术/雕塑'],
  },
]

const categoryDescription = ref('精选第14届可持续城市总体规划与前瞻性区域开发的卓越之作。')

// ─── 视图切换 ──────────────────────────────────────────
const viewMode = ref<'grid' | 'list'>('grid')

// ─── 获奖作品数据 ──────────────────────────────────────
interface WinnerCard {
  id: string
  award: string
  title: string
  location: string
  image: string
}

const winnerCards: WinnerCard[] = [
  {
    id: '1',
    award: '评审团大奖',
    title: '新光规划',
    location: '中国深圳 — 城市设计',
    image: img6,
  },
  {
    id: '2',
    award: '卓越奖',
    title: '空灵中庭',
    location: '意大利米兰 — 室内设计',
    image: img7,
  },
  {
    id: '3',
    award: '提名奖',
    title: '巨石住宅',
    location: '冰岛雷克雅未克 — 建筑设计',
    image: img8,
  },
  {
    id: '4',
    award: '特别提及',
    title: '金色流动',
    location: '阿联酋迪拜 — 公共艺术',
    image: img9,
  },
]

// ─── 滚动入场动画 ──────────────────────────────────────
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )

  document.querySelectorAll('.stagger-in').forEach((el) => observer.observe(el))
})
</script>

<style scoped>
/* ─── 隐藏滚动条但保留滚动能力 ────────────────────────── */
.hidden-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.hidden-scrollbar::-webkit-scrollbar {
  display: none;
}

/* ─── 卡片容器 ───────────────────────────────────────── */
.card-item {
  will-change: transform;
  transform: translateZ(0);
  transition:
    border-color 0.5s ease,
    box-shadow 0.5s ease;
}

.card-item:hover {
  box-shadow: 0 0 40px -8px rgba(228, 194, 133, 0.2);
}

/* ─── 卡片图片 —— 独立 GPU 层，不与容器 layout 耦合 ──── */
.card-img {
  will-change: transform;
  transform: scale(1) translateZ(0);
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  image-rendering: auto;
}

.card-item:hover .card-img {
  transform: scale(1.06) translateZ(0);
}

/* ─── 卡片底部信息 ────────────────────────────────────── */
.card-info {
  will-change: transform;
  transform: translateY(4px) translateZ(0);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.card-item:hover .card-info {
  transform: translateY(0) translateZ(0);
}

/* ─── 入场动画 ────────────────────────────────────────── */
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
