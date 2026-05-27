<template>
  <section class="py-section-gap relative overflow-hidden bg-background">
    <!-- Header -->
    <div ref="headerRef" class="max-w-container-max mx-auto text-center mb-12 md:mb-24 px-margin-desktop stagger-in">
      <h3 class="font-label-xs text-label-xs text-secondary uppercase tracking-[0.4em] mb-6">World Influence</h3>
      <h2 class="font-headline-lg text-headline-lg mb-6">Global Design Pulse</h2>
      <p class="font-body-lg text-body-lg text-on-surface-variant/80 max-w-3xl mx-auto">
        From the capitals of design to the creative heart of Shenzhen, IDEA-TOPS connects 75+ countries
        in a singular pursuit of excellence.
      </p>
    </div>

    <!-- ECharts Map Container -->
    <div ref="sectionRef" class="relative w-full max-w-7xl mx-auto px-margin-desktop stagger-in">
      <div
        class="relative rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(228,194,133,0.1)] border border-white/5"
        style="background: radial-gradient(ellipse at 50% 40%, #1e1e18 0%, #0e0e0a 70%);"
      >
        <div ref="chartRef" class="w-full h-[320px] md:h-[500px] lg:h-[650px]"></div>

        <!-- Stats Overlay - 更小更通透 -->
        <div class="absolute bottom-3 md:bottom-6 left-3 md:left-6 grid grid-cols-2 gap-3 md:gap-5 p-3 md:p-5 rounded-lg z-20"
          style="background: rgba(255,255,255,0.03); backdrop-filter: blur(16px); border: 1px solid rgba(228,194,133,0.12);">
          <div class="border-r border-white/[0.06] pr-5">
            <div class="font-display-hero text-headline-md gold-gradient-text mb-0.5 leading-none">75+</div>
            <div class="font-label-xs text-[10px] text-lead-gray uppercase tracking-widest">
              Countries
            </div>
          </div>
          <div class="pl-3">
            <div class="font-display-hero text-headline-md gold-gradient-text mb-0.5 leading-none">100+</div>
            <div class="font-label-xs text-[10px] text-lead-gray uppercase tracking-widest">
              Partners
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Partners Logos -->
    <!-- <div class="mt-24 grid grid-cols-2 md:grid-cols-5 gap-12 items-center px-margin-desktop opacity-30 hover:opacity-100 transition-opacity duration-1000">
      <div class="flex justify-center font-headline-md text-on-surface font-bold tracking-tight">GENSLER</div>
      <div class="flex justify-center font-headline-md text-on-surface font-bold tracking-tight">SAOTA</div>
      <div class="flex justify-center font-headline-md text-on-surface font-bold tracking-tight">Zaha Hadid</div>
      <div class="flex justify-center font-headline-md text-on-surface font-bold tracking-tight">HBA</div>
      <div class="flex justify-center font-headline-md text-on-surface font-bold tracking-tight">SCDA</div>
    </div> -->
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'

defineOptions({ name: 'GlobalImpact' })

const headerRef = ref<HTMLDivElement | null>(null)
const sectionRef = ref<HTMLDivElement | null>(null)
const chartRef = ref<HTMLDivElement | null>(null)

let chartInstance: echarts.ECharts | null = null
let resizeObserver: ResizeObserver | null = null

type City = { name: string; country: string; value: [number, number, number] }

const SHENZHEN_IDX = 0

const designCities: City[] = [
  // ---- Asia (17 countries) ----
  { name: 'Shenzhen', country: 'China', value: [114.06, 22.55, 35] },
  { name: 'Tokyo', country: 'Japan', value: [139.69, 35.69, 13] },
  { name: 'Seoul', country: 'South Korea', value: [126.98, 37.57, 12] },
  { name: 'Singapore', country: 'Singapore', value: [103.82, 1.35, 12] },
  { name: 'Bangkok', country: 'Thailand', value: [100.50, 13.76, 10] },
  { name: 'Mumbai', country: 'India', value: [72.88, 19.08, 11] },
  { name: 'Jakarta', country: 'Indonesia', value: [106.85, -6.21, 10] },
  { name: 'Kuala Lumpur', country: 'Malaysia', value: [101.69, 3.14, 10] },
  { name: 'Manila', country: 'Philippines', value: [120.98, 14.60, 9] },
  { name: 'Hanoi', country: 'Vietnam', value: [105.83, 21.03, 9] },
  { name: 'Dubai', country: 'UAE', value: [55.27, 25.20, 14] },
  { name: 'Istanbul', country: 'Turkey', value: [28.98, 41.01, 12] },
  { name: 'Tel Aviv', country: 'Israel', value: [34.78, 32.09, 10] },
  { name: 'Riyadh', country: 'Saudi Arabia', value: [46.68, 24.71, 10] },
  { name: 'Doha', country: 'Qatar', value: [51.53, 25.29, 10] },
  { name: 'Tehran', country: 'Iran', value: [51.42, 35.69, 9] },
  { name: 'Taipei', country: 'Taiwan', value: [121.57, 25.03, 10] },

  // ---- Europe (26 countries) ----
  { name: 'London', country: 'UK', value: [-0.13, 51.51, 15] },
  { name: 'Paris', country: 'France', value: [2.35, 48.86, 15] },
  { name: 'Berlin', country: 'Germany', value: [13.41, 52.52, 13] },
  { name: 'Milan', country: 'Italy', value: [9.19, 45.47, 14] },
  { name: 'Moscow', country: 'Russia', value: [37.62, 55.76, 12] },
  { name: 'Madrid', country: 'Spain', value: [-3.70, 40.42, 12] },
  { name: 'Amsterdam', country: 'Netherlands', value: [4.90, 52.37, 12] },
  { name: 'Copenhagen', country: 'Denmark', value: [12.57, 55.68, 11] },
  { name: 'Oslo', country: 'Norway', value: [10.75, 59.91, 10] },
  { name: 'Stockholm', country: 'Sweden', value: [18.07, 59.33, 11] },
  { name: 'Helsinki', country: 'Finland', value: [24.94, 60.17, 10] },
  { name: 'Warsaw', country: 'Poland', value: [21.01, 52.23, 10] },
  { name: 'Prague', country: 'Czechia', value: [14.44, 50.09, 10] },
  { name: 'Vienna', country: 'Austria', value: [16.37, 48.21, 11] },
  { name: 'Budapest', country: 'Hungary', value: [19.04, 47.50, 10] },
  { name: 'Bucharest', country: 'Romania', value: [26.10, 44.43, 9] },
  { name: 'Athens', country: 'Greece', value: [23.73, 37.98, 10] },
  { name: 'Lisbon', country: 'Portugal', value: [-9.14, 38.72, 10] },
  { name: 'Dublin', country: 'Ireland', value: [-6.26, 53.35, 10] },
  { name: 'Brussels', country: 'Belgium', value: [4.35, 50.85, 10] },
  { name: 'Zurich', country: 'Switzerland', value: [8.54, 47.38, 11] },
  { name: 'Belgrade', country: 'Serbia', value: [20.46, 44.79, 9] },
  { name: 'Zagreb', country: 'Croatia', value: [15.98, 45.81, 8] },
  { name: 'Tallinn', country: 'Estonia', value: [24.75, 59.44, 8] },
  { name: 'Vilnius', country: 'Lithuania', value: [25.28, 54.69, 8] },
  { name: 'Riga', country: 'Latvia', value: [24.11, 56.95, 8] },

  // ---- Americas (14 countries) ----
  { name: 'New York', country: 'USA', value: [-74.01, 40.71, 16] },
  { name: 'Los Angeles', country: 'USA', value: [-118.24, 34.05, 13] },
  { name: 'Toronto', country: 'Canada', value: [-79.38, 43.65, 12] },
  { name: 'Mexico City', country: 'Mexico', value: [-99.13, 19.43, 12] },
  { name: 'São Paulo', country: 'Brazil', value: [-46.63, -23.55, 13] },
  { name: 'Buenos Aires', country: 'Argentina', value: [-58.38, -34.60, 11] },
  { name: 'Santiago', country: 'Chile', value: [-70.65, -33.45, 10] },
  { name: 'Lima', country: 'Peru', value: [-77.04, -12.05, 9] },
  { name: 'Bogotá', country: 'Colombia', value: [-74.07, 4.71, 10] },
  { name: 'Caracas', country: 'Venezuela', value: [-66.90, 10.48, 9] },
  { name: 'Panama City', country: 'Panama', value: [-79.52, 8.98, 8] },
  { name: 'Havana', country: 'Cuba', value: [-82.37, 23.11, 8] },
  { name: 'San José', country: 'Costa Rica', value: [-84.08, 9.93, 8] },
  { name: 'Montevideo', country: 'Uruguay', value: [-56.16, -34.90, 8] },

  // ---- Africa (14 countries) ----
  { name: 'Cairo', country: 'Egypt', value: [31.24, 30.04, 10] },
  { name: 'Johannesburg', country: 'South Africa', value: [28.05, -26.20, 10] },
  { name: 'Nairobi', country: 'Kenya', value: [36.82, -1.29, 9] },
  { name: 'Lagos', country: 'Nigeria', value: [3.38, 6.45, 9] },
  { name: 'Casablanca', country: 'Morocco', value: [-7.59, 33.57, 9] },
  { name: 'Addis Ababa', country: 'Ethiopia', value: [38.75, 9.02, 8] },
  { name: 'Accra', country: 'Ghana', value: [-0.20, 5.56, 8] },
  { name: 'Tunis', country: 'Tunisia', value: [10.18, 36.82, 8] },
  { name: 'Algiers', country: 'Algeria', value: [3.06, 36.75, 8] },
  { name: 'Dakar', country: 'Senegal', value: [-17.44, 14.69, 7] },
  { name: 'Kampala', country: 'Uganda', value: [32.58, 0.32, 7] },
  { name: 'Luanda', country: 'Angola', value: [13.23, -8.84, 7] },
  { name: 'Khartoum', country: 'Sudan', value: [32.56, 15.50, 7] },
  { name: 'Dar es Salaam', country: 'Tanzania', value: [39.27, -6.79, 7] },

  // ---- Oceania (3 countries) ----
  { name: 'Sydney', country: 'Australia', value: [151.21, -33.87, 12] },
  { name: 'Melbourne', country: 'Australia', value: [144.96, -37.81, 10] },
  { name: 'Auckland', country: 'New Zealand', value: [174.76, -36.85, 9] },
]

/** 构建流向 Shenzhen 的线条（全世界 → 深圳） */
function buildLinesToShenzhen() {
  const hub = designCities[SHENZHEN_IDX]
  return designCities
    .filter((_, i) => i !== SHENZHEN_IDX)
    .map((city) => ({
      coords: [
        [city.value[0], city.value[1]],
        [hub!.value[0], hub!.value[1]],
      ] as [[number, number], [number, number]],
      lineStyle: { color: '#e4c285', width: 0.5, opacity: 0.18 },
    }))
}

onMounted(async () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    },
    { threshold: 0.1 },
  )
  if (headerRef.value) observer.observe(headerRef.value)
  if (sectionRef.value) observer.observe(sectionRef.value)

  try {
    const response = await fetch('https://cdn.jsdelivr.net/npm/echarts@4.9.0/map/json/world.json')
    if (response.ok) {
      const geoJson = await response.json()
      echarts.registerMap('world', geoJson)
    }
  } catch {
    console.warn('Failed to load world map data')
  }

  if (!chartRef.value) return
  chartInstance = echarts.init(chartRef.value, undefined, { renderer: 'canvas' })

  const hubsExcludingShenzhen = designCities.filter((_, i) => i !== SHENZHEN_IDX)
  const shenzhen = designCities[SHENZHEN_IDX]!

  const option: echarts.EChartsOption = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(20,20,16,0.95)',
      borderColor: 'rgba(228,194,133,0.5)',
      borderWidth: 1,
      textStyle: { color: '#e4e2dd', fontFamily: 'Inter, sans-serif', fontSize: 12 },
      formatter: (
        params: { name?: string; seriesType?: string } | { name?: string; seriesType?: string }[],
      ) => {
        const p = Array.isArray(params) ? params[0] : params
        if (p?.name === 'Shenzhen') {
          return '<div style="font-size:14px;font-weight:700;color:#ffdea4;margin-bottom:4px;">✦ SHENZHEN</div><div style="color:#e4c285;">Global Design Hub</div><div style="color:#e4e2dd;margin-top:2px;">75+ Countries Connected</div>'
        }
        if (p?.seriesType === 'effectScatter' && p?.name) {
          const city = designCities.find((c) => c.name === p.name)
          return `<strong style="color:#e4c285">${p.name}</strong>${city ? `<br/><span style="color:#8a8a8a">${city.country}</span>` : ''}<br/><span style="color:#c4c7c7;font-size:11px;">▸ Flowing to Shenzhen</span>`
        }
        return p?.name ?? ''
      },
    },
    geo: {
      map: 'world',
      roam: true,
      center: [20, 25],
      zoom: 1.25,
      aspectScale: 1,
      label: { show: false },
      itemStyle: {
        areaColor: '#222218',
        borderColor: 'rgba(228,194,133,0.3)',
        borderWidth: 0.7,
        shadowColor: 'rgba(228,194,133,0.08)',
        shadowBlur: 25,
      },
      emphasis: { disabled: true },
      silent: true,
    },
    series: [
      // 流光线 — 全球 → 深圳（从各城市流向深圳）
      {
        type: 'lines',
        coordinateSystem: 'geo',
        polyline: false,
        data: buildLinesToShenzhen(),
        lineStyle: { color: '#e4c285', width: 0.5, opacity: 0.15, curveness: 0.25 },
        effect: {
          show: true,
          period: 6,
          trailLength: 0.2,
          symbol: 'circle',
          symbolSize: 2,
          color: 'rgba(228,194,133,0.4)',
        },
        zlevel: 0,
      },
      // 各城市 — 微弱光点
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: hubsExcludingShenzhen.map((c) => ({
          name: c.name,
          value: [c.value[0], c.value[1], c.value[2] * 0.9],
        })),
        symbolSize: (val: number[]) => (val[2] ?? 8),
        showEffectOn: 'render',
        rippleEffect: { brushType: 'stroke', scale: 2.5, period: 5, color: 'rgba(228,194,133,0.15)' },
        itemStyle: { color: 'rgba(228,194,133,0.35)', borderColor: 'rgba(228,194,133,0.08)', borderWidth: 0.5 },
        zlevel: 1,
      },
      // 各城市 — 核心亮点
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: hubsExcludingShenzhen.map((c) => ({
          name: c.name,
          value: [c.value[0], c.value[1], c.value[2] * 0.35],
        })),
        symbolSize: (val: number[]) => (val[2] ?? 4),
        showEffectOn: 'render',
        rippleEffect: { brushType: 'fill', scale: 3, period: 4, color: 'rgba(228,194,133,0.2)' },
        itemStyle: { color: '#e4c285', shadowBlur: 6, shadowColor: 'rgba(228,194,133,0.2)' },
        zlevel: 2,
      },
      // Shenzhen — 外层大脉冲
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: [{ name: 'Shenzhen', value: shenzhen.value }],
        symbolSize: 30,
        showEffectOn: 'render',
        rippleEffect: { brushType: 'stroke', scale: 8, period: 2.5, color: 'rgba(228,194,133,0.5)' },
        itemStyle: { color: 'rgba(228,194,133,0.15)', borderColor: 'rgba(228,194,133,0.2)', borderWidth: 2 },
        zlevel: 3,
      },
      // Shenzhen — 核心高亮
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: [{ name: 'Shenzhen', value: shenzhen.value }],
        symbolSize: 16,
        showEffectOn: 'render',
        rippleEffect: { brushType: 'fill', scale: 5, period: 2, color: 'rgba(228,194,133,0.7)' },
        itemStyle: { color: '#ffdea4', shadowBlur: 40, shadowColor: 'rgba(228,194,133,0.9)' },
        label: {
          show: true,
          position: 'right',
          offset: [8, 0],
          color: '#e4c285',
          fontSize: 13,
          fontWeight: 'bold',
          fontFamily: 'Inter, sans-serif',
          formatter: 'SHENZHEN',
        },
        zlevel: 4,
      },
    ],
  }

  chartInstance.setOption(option)

  resizeObserver = new ResizeObserver(() => chartInstance?.resize())
  resizeObserver.observe(chartRef.value)
})

onUnmounted(() => {
  chartInstance?.dispose()
  resizeObserver?.disconnect()
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
