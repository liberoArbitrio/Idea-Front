<template>
  <div class="bg-background text-on-surface font-body-md overflow-x-hidden">
    <NavBar />

    <!-- Hero Section -->
    <section class="relative w-full pt-40 pb-16 bg-surface-dim">
      <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div class="flex flex-col items-center text-center max-w-4xl mx-auto md:max-w-5xl">
          <!-- Breadcrumb -->
          <div
            class="flex items-center gap-4 mb-8 font-label-xs text-label-xs uppercase tracking-[0.2em] text-secondary">
            <router-link to="/news" class="hover:text-on-surface transition-colors">新闻中心</router-link>
            <span class="w-1 h-1 rounded-full bg-secondary/40"></span>
            <span>{{ newsItem?.category || 'Official News' }}</span>
          </div>

          <h1 class="font-headline-lg text-[32px] md:text-[56px] text-on-surface mb-12 leading-[1.1] tracking-tight">
            {{ newsItem?.title }}
          </h1>

          <!-- Meta -->
          <div
            class="flex items-center gap-8 font-label-sm text-label-sm text-on-surface-variant border-y border-midnight-gray py-4 px-8">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[18px]">calendar_today</span>
              <span>{{ newsItem?.date }}</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-[18px]">visibility</span>
              <span>{{ formatViews(newsItem?.views ?? 0) }} 浏览量</span>
            </div>
          </div>
        </div>

        <!-- Hero Image -->
        <div class="mt-16 w-full h-[40vh] md:h-[50vh] overflow-hidden border border-midnight-gray">
          <img :alt="newsItem?.title" class="w-full h-full object-cover" :src="newsItem?.image" />
        </div>
      </div>
    </section>

    <!-- Content Layout -->
    <section
      class="relative max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col lg:flex-row gap-16 pb-24">
      <!-- Left Sidebar: Social Sharing -->
      <aside class="hidden lg:block w-16 shrink-0 sticky top-40 h-fit">
        <div class="flex flex-col items-center gap-8 border-l-[0.5px] border-midnight-gray py-8 pl-4">
          <button class="text-on-surface-variant hover:text-secondary transition-colors group relative">
            <span class="material-symbols-outlined group-hover:scale-110 transition-transform">share</span>
          </button>
          <button class="text-on-surface-variant hover:text-secondary transition-colors group relative">
            <span class="material-symbols-outlined group-hover:scale-110 transition-transform">link</span>
          </button>
          <button class="text-on-surface-variant hover:text-secondary transition-colors group relative">
            <span class="material-symbols-outlined group-hover:scale-110 transition-transform">bookmark</span>
          </button>
        </div>
      </aside>

      <!-- Main Content Area -->
      <article class="flex-1 mx-auto w-full max-w-4xl">
        <div
          class="font-body-lg text-body-lg text-on-surface-variant space-y-12 leading-[1.8] tracking-wide max-w-none md:text-[22px]">
          <!-- Paragraphs before pull quote -->
          <p v-for="(paragraph, i) in beforeQuoteParagraphs" :key="i">
            {{ paragraph }}
          </p>

          <!-- Pull Quote -->
          <blockquote v-if="newsItem?.pullQuote"
            class="my-12 pl-12 py-4 border-l-2 border-secondary relative overflow-hidden bg-surface-container-lowest/30">
            <div class="absolute inset-0 halo-glow z-0"></div>
            <p
              class="relative z-10 font-quote-italic text-quote-italic text-on-surface text-[24px] md:text-[32px] leading-tight">
              "{{ newsItem.pullQuote.text }}"
            </p>
            <footer class="mt-4 font-label-sm text-label-sm text-secondary uppercase tracking-widest relative z-10">
              — {{ newsItem.pullQuote.author }}
            </footer>
          </blockquote>

          <!-- Paragraph between quote and image -->
          <p v-if="newsItem?.contentImage">
            {{ midParagraph }}
          </p>

          <!-- Content Image -->
          <figure v-if="newsItem?.contentImage" class="my-16">
            <div class="w-full relative overflow-hidden border-[0.5px] border-midnight-gray group">
              <div
                class="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none">
              </div>
              <img :alt="newsItem.contentImage.caption"
                class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                :src="newsItem.contentImage.src" />
            </div>
            <figcaption
              class="mt-4 font-label-xs text-label-xs text-secondary/80 uppercase tracking-widest flex items-center gap-2">
              <span class="w-4 h-px bg-secondary/50"></span>
              {{ newsItem.contentImage.caption }}
            </figcaption>
          </figure>

          <!-- Section heading after image -->
          <h2 v-if="newsItem?.contentImage && afterImageParagraphs.length"
            class="font-headline-md text-headline-md text-on-surface mt-16 mb-6">Elevating the Global Standard</h2>

          <!-- Remaining paragraphs after heading -->
          <p v-for="(paragraph, i) in afterImageParagraphs" :key="'after-' + i">
            {{ paragraph }}
          </p>
        </div>

        <!-- Tags & Mobile Share -->
        <div
          class="mt-16 pt-8 border-t-[0.5px] border-midnight-gray flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="flex flex-wrap gap-3">
            <span v-for="tag in newsItem?.tags" :key="tag"
              class="px-4 py-2 border-[0.5px] border-midnight-gray font-label-xs text-label-xs text-on-surface-variant uppercase tracking-widest hover:border-secondary hover:text-secondary transition-colors cursor-pointer">{{ tag }}</span>
          </div>
          <div class="flex lg:hidden items-center gap-6">
            <span class="font-label-sm text-label-sm text-on-surface-variant uppercase">Share</span>
            <button class="text-on-surface-variant hover:text-secondary transition-colors">
              <span class="material-symbols-outlined">share</span>
            </button>
            <button class="text-on-surface-variant hover:text-secondary transition-colors">
              <span class="material-symbols-outlined">link</span>
            </button>
          </div>
        </div>

        <!-- Article Navigation (Prev/Next) -->
        <div
          class="mt-24 grid grid-cols-1 md:grid-cols-2 gap-px bg-midnight-gray border-y-[0.5px] border-midnight-gray">
          <!-- Previous -->
          <router-link v-if="newsItem?.prev" :to="`/news/${newsItem.prev.id}`"
            class="bg-surface-dim p-8 md:p-12 hover:bg-ink-jade transition-colors duration-500 group relative overflow-hidden flex flex-col justify-center">
            <div
              class="absolute inset-0 bg-linear-to-r from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            </div>
            <span
              class="font-label-xs text-label-xs text-secondary uppercase tracking-widest mb-4 group-hover:-translate-y-1 transition-transform duration-300 flex items-center gap-2">
              <span class="material-symbols-outlined text-[16px]">arrow_back</span> 上一篇
            </span>
            <h3
              class="font-headline-md text-[24px] leading-tight text-on-surface-variant group-hover:text-on-surface transition-colors duration-300">
              {{ newsItem.prev.title }}
            </h3>
          </router-link>

          <!-- Next -->
          <router-link v-if="newsItem?.next" :to="`/news/${newsItem.next.id}`"
            class="bg-surface-dim p-8 md:p-12 hover:bg-ink-jade transition-colors duration-500 group relative overflow-hidden flex flex-col justify-center md:items-end md:text-right">
            <div
              class="absolute inset-0 bg-linear-to-l from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            </div>
            <span
              class="font-label-xs text-label-xs text-secondary uppercase tracking-widest mb-4 group-hover:-translate-y-1 transition-transform duration-300 flex items-center gap-2 md:flex-row-reverse">
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span> 下一篇
            </span>
            <h3
              class="font-headline-md text-[24px] leading-tight text-on-surface-variant group-hover:text-on-surface transition-colors duration-300">
              {{ newsItem.next.title }}
            </h3>
          </router-link>
        </div>
      </article>
    </section>

    <!-- Related News Section -->
    <section class="w-full bg-surface-container-lowest relative overflow-hidden py-24">
      <div class="absolute inset-0 halo-glow opacity-30"></div>
      <div class="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div class="flex items-end justify-between mb-16 border-b-[0.5px] border-midnight-gray pb-8">
          <h2 class="font-headline-md text-headline-md text-on-surface">相关新闻</h2>
          <router-link to="/news"
            class="font-label-sm text-label-sm text-secondary uppercase tracking-widest hover:text-on-surface transition-colors flex items-center gap-2">
            查看全部 <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </router-link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <router-link v-for="related in relatedNews" :key="related.id" :to="`/news/${related.id}`"
            class="block group relative bg-ink-jade border-[0.5px] border-midnight-gray hover:border-secondary hover:-translate-y-2 transition-all duration-500 overflow-hidden">
            <div class="aspect-[1.37] w-full overflow-hidden relative">
              <div class="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10">
              </div>
              <img :alt="related.title"
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                :src="related.image" />
            </div>
            <div class="p-8">
              <div class="font-label-xs text-label-xs text-secondary uppercase tracking-widest mb-4">
                {{ related.tag || 'News' }}
              </div>
              <h3 class="font-headline-md text-[20px] leading-snug text-on-surface mb-4">{{ related.title }}</h3>
              <div class="font-label-xs text-label-xs text-on-surface-variant uppercase">{{ related.date }}</div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from '@/views/components/NavBar.vue'
import FooterSection from '@/views/components/FooterSection.vue'
import { newsData, type NewsItem } from '@/data/news'
// import img from "@/assets/bg-f.png"

defineOptions({ name: 'NewsDetail' })

const route = useRoute()

const newsItem = computed<NewsItem | undefined>(() =>
  newsData.find((n) => n.id === route.params.id),
)

/** 引言前的段落（content[0], content[1]） */
const beforeQuoteParagraphs = computed(() => {
  if (!newsItem.value) return []
  const all = newsItem.value.content
  if (newsItem.value.pullQuote) return all.slice(0, 2)
  return all
})

/** 引言后、配图中段（content[2]） */
const midParagraph = computed(() => {
  if (!newsItem.value) return ''
  return newsItem.value.content[2] ?? ''
})

/** 配图后的段落（content[3] 起） */
const afterImageParagraphs = computed(() => {
  if (!newsItem.value) return []
  return newsItem.value.content.slice(3)
})

/** 相关新闻（排除当前） */
const relatedNews = computed(() =>
  newsData.filter((n) => n.id !== route.params.id).slice(0, 3),
)

function formatViews(v: number): string {
  if (v >= 10000) return (v / 1000).toFixed(0) + 'k'
  if (v >= 1000) return (v / 1000).toFixed(1) + 'k'
  return String(v)
}
</script>

<style scoped>
.halo-glow {
  background: radial-gradient(circle at center, rgba(228, 194, 133, 0.08) 0%, transparent 70%);
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}
</style>
