<template>
  <div class="bg-sg-deep-charcoal font-sg-body-md text-sg-on-surface">
    <NavBar />

    <!-- Hero -->
    <section class="relative h-[45vh] flex items-center justify-center overflow-hidden pt-20">
      <canvas ref="heroCanvas" class="absolute inset-0 w-full h-full z-0 opacity-60"></canvas>
      <div class="relative z-10 text-center px-margin-mobile">
        <h1 ref="s1" class="stagger-in font-sg-display-lg text-[48px] md:text-sg-display-lg gold-gradient-text mb-4 md:mb-6">参赛报名</h1>
        <p ref="s2"
          class="stagger-in font-sg-body-lg text-sm md:text-sg-body-lg text-sg-architectural-gray tracking-widest uppercase">
          发掘全球最佳设计师与设计作品</p>
        <div ref="s3" class="stagger-in mt-8 md:mt-12 flex justify-center">
          <div class="w-px h-24 bg-gradient-to-b from-sg-gold to-transparent"></div>
        </div>
      </div>
    </section>

    <!-- 参赛条件 -->
    <section class="py-12 md:py-16 px-margin-desktop max-w-container-max mx-auto">
      <div ref="condTitleRef" class="stagger-in mb-10 text-center">
        <h2 class="font-sg-headline-xl text-[32px] md:text-sg-headline-xl mb-4">参赛条件</h2>
        <div class="w-20 h-px bg-sg-gold mx-auto"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="(cond, i) in conditions" :key="i" :ref="el => { if (el) condRefs[i] = el as HTMLDivElement }"
          class="stagger-in flex gap-4 md:gap-5 p-5 md:p-8 border border-sg-bronze-mute/20 bg-sg-surface-low group hover:border-sg-gold/40 transition-colors duration-500">
          <span class="font-sg-headline-lg text-[24px] md:text-sg-headline-lg text-sg-gold shrink-0">{{ i + 1 }}</span>
          <p class="text-sg-architectural-gray font-sg-body-md text-sm md:text-base leading-relaxed">{{ cond }}</p>
        </div>
      </div>
    </section>

    <!-- Timeline Banner -->
    <section class="relative py-12 md:py-20 bg-sg-surface-highest overflow-hidden">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-sg-deep-charcoal via-transparent to-sg-deep-charcoal z-10"></div>
        <img class="w-full h-full object-cover grayscale brightness-50"
          src="https://lh3.googleusercontent.com/aida/ADBb0uhQb8gB-5IuR6ul6hqf8gCwBYLwIYJc1AYmanhJwj5re0y2LuO5wXshl2CEX7idbZriAfz-xIIDtR2oL86dMraxinxmdDbQoq8vembSSyjMxrKFcY2BXaCFioRX8GCcPtZEPaCxg2NJg7E4yNPTgB4yljtyLEuCMXlad-nQDVgm5I6YLGGPveu7wushetEAWawrXByyeoq41YCEibvx1P53L_uJGOpoeLdErjzuKAfwZ2ca7HaOmYL-bA" />
      </div>
      <div ref="bannerRef" class="stagger-in relative z-20 text-center">
        <span class="font-sg-label-caps text-sg-label-caps text-sg-gold mb-4 block">DEADLINE | 截止日期</span>
        <h2 class="font-sg-display-lg text-[40px] md:text-sg-display-lg text-sg-pure-white mb-2">2025年12月31日</h2>
        <div class="flex justify-center gap-8 mt-6">
          <div class="text-center">
            <span class="block font-sg-headline-lg text-sg-headline-lg text-sg-gold">300+</span>
            <span class="font-sg-label-caps text-sg-label-caps text-sg-architectural-gray">DAYS LEFT</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 参赛步骤 -->
    <section class="py-12 md:py-section-gap px-margin-desktop max-w-container-max mx-auto">
      <div ref="stepTitleRef" class="stagger-in mb-12 md:mb-20 text-center">
        <h2 class="font-sg-headline-xl text-[32px] md:text-sg-headline-xl mb-4">参赛步骤</h2>
        <div class="w-20 h-px bg-sg-gold mx-auto"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 relative">
        <div class="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-sg-bronze-mute/30 z-0"></div>
        <div v-for="(step, i) in signupSteps" :key="i" :ref="el => { if (el) stepsRefs.push(el as HTMLDivElement) }"
          class="stagger-in relative z-10 text-center">
          <div class="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-sg-gold bg-sg-deep-charcoal flex items-center justify-center mx-auto mb-4 md:mb-6">
            <span class="font-sg-headline-lg text-[20px] md:text-sg-headline-lg text-sg-gold">{{ String(i + 1).padStart(2, '0') }}</span>
          </div>
          <h4 class="font-sg-headline-lg text-sg-headline-lg mb-2 md:mb-3">{{ step.title }}</h4>
          <p class="text-sg-architectural-gray font-sg-body-md text-sm md:text-base leading-relaxed text-left">{{ step.desc }}</p>
        </div>
      </div>
      <!-- 流程图 -->
      <div ref="flowRef" class="stagger-in mt-12 md:mt-20 flex justify-center">
        <img :src="flowchat" alt="参赛流程图" class="max-w-full rounded-lg border border-sg-bronze-mute/20" />
      </div>
    </section>

    <!-- Fees -->
    <section class="py-section-gap bg-sg-surface-low border-y border-sg-bronze-mute/20">
      <div class="px-margin-desktop max-w-container-max mx-auto">
        <div class="flex flex-col md:flex-row gap-sg-gutter">
          <div ref="feeLeftRef" class="stagger-in flex-1">
            <h2 class="font-sg-headline-xl text-[32px] md:text-sg-headline-xl mb-6 md:mb-8">参赛费标准</h2>
            <p class="text-sg-architectural-gray font-sg-body-lg text-sm md:text-sg-body-lg mb-8 md:mb-12">IDEA-TOPS 坚持公正评审原则，所收费用将用于奖项组织、国际评委差旅及全球推广宣传。
            </p>
            <div class="p-6 bg-error-container/10 border border-error/20 inline-block">
              <p class="text-error font-sg-body-md flex items-center gap-2">
                <span class="material-symbols-outlined text-sm">info</span> 注：所有参赛费用一经缴纳，概不退还。
              </p>
            </div>
          </div>
          <div ref="feeRightRef" class="stagger-in flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            <div class="p-6 md:p-10 border border-sg-gold/40 bg-sg-deep-charcoal text-center flex flex-col justify-center">
              <span class="font-sg-label-caps text-sg-label-caps text-sg-architectural-gray mb-3 md:mb-4">国内作品</span>
              <div class="font-sg-display-lg text-[40px] md:text-sg-headline-xl gold-gradient-text mb-2">¥ 800</div>
              <span class="text-sg-architectural-gray font-sg-body-md text-sm md:text-base">每件作品 / 人民币</span>
            </div>
            <div class="p-6 md:p-10 border border-sg-gold/40 bg-sg-deep-charcoal text-center flex flex-col justify-center">
              <span class="font-sg-label-caps text-sg-label-caps text-sg-architectural-gray mb-3 md:mb-4">INTERNATIONAL</span>
              <div class="font-sg-display-lg text-[40px] md:text-sg-headline-xl gold-gradient-text mb-2">$ 150</div>
              <span class="text-sg-architectural-gray font-sg-body-md text-sm md:text-base">PER ENTRY / USD</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="py-section-gap px-margin-desktop max-w-container-max mx-auto">
      <div ref="catTitleRef" class="stagger-in mb-12 md:mb-20">
        <h2 class="font-sg-headline-xl text-[32px] md:text-sg-headline-xl mb-4">奖项类别</h2>
        <p class="text-sg-architectural-gray font-sg-body-md text-sm md:text-base">覆盖空间设计全领域，共设 18 个专业类别</p>
      </div>
      <div class="grid grid-cols-1 gap-12">
        <div v-for="cat in categories" :key="cat.letter" :ref="el => { if (el) catRefs.push(el as HTMLDivElement) }"
          class="stagger-in">
          <div class="flex items-baseline gap-4 border-b border-sg-gold/30 pb-4 mb-6">
            <span class="font-sg-display-lg text-sg-headline-lg text-sg-gold">{{ cat.letter }}</span>
            <h3 class="font-sg-headline-lg text-sg-headline-lg">{{ cat.group }}</h3>
          </div>
          <p v-if="cat.desc" class="text-sg-architectural-gray font-sg-body-md text-sm md:text-base leading-relaxed">{{ cat.desc }}</p>
          <ul v-else class="space-y-2 md:space-y-3 text-sg-architectural-gray">
            <li v-for="(item, idx) in cat.items" :key="idx" class="text-sm md:text-base hover:text-sg-gold transition-colors cursor-default">
              <span class="font-sg-label-caps text-sg-label-caps text-sg-gold mr-2">{{ idx + 1 }})</span>{{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section ref="ctaRef"
      class="stagger-in relative min-h-[40vh] md:min-h-[60vh] flex items-center justify-center py-16 md:py-section-gap overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img class="w-full h-full object-cover scale-110 opacity-40" :src="g6" />
        <div class="absolute inset-0 bg-gradient-to-t from-sg-deep-charcoal via-sg-deep-charcoal/60 to-transparent">
        </div>
      </div>
      <div class="relative z-10 text-center max-w-3xl px-margin-mobile">
        <h2 class="font-sg-display-lg text-[32px] md:text-sg-display-lg mb-6 md:mb-8">开启您的荣耀之旅</h2>
        <p class="font-sg-body-lg text-base md:text-sg-body-lg text-sg-architectural-gray mb-8 md:mb-12">加入艾特奖，与全球顶尖设计力量同台竞技，让世界看见您的非凡创意。</p>
        <button
          class="group relative px-10 py-4 md:px-16 md:py-6 bg-sg-gold text-sg-on-gold-container font-sg-label-caps text-sg-label-caps overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]">
          <span class="relative z-10">立即在线报名</span>
          <div
            class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          </div>
        </button>
        <p class="mt-8 font-sg-label-caps text-sg-label-caps text-sg-architectural-gray">报名咨询: contact@idea-tops.com</p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-sg-deep-charcoal w-full py-12 md:py-section-gap px-margin-desktop border-t border-sg-bronze-mute/20">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-sg-gutter max-w-container-max mx-auto">
        <div class="col-span-1 md:col-span-1">
          <div class="font-sg-headline-lg text-sg-headline-lg text-sg-gold mb-4">IDEA-TOPS</div>
          <p class="text-sg-architectural-gray font-sg-body-md mb-8">国际空间设计大奖"艾特奖"，是中国境内最具国际影响力的权威设计奖项。</p>
        </div>
        <div>
          <h5 class="font-sg-label-caps text-sg-label-caps text-sg-gold mb-6">快速链接</h5>
          <ul class="space-y-4">
            <li><a class="text-sg-architectural-gray hover:text-sg-pure-white transition-colors" href="#">Submission
                Guidelines</a></li>
            <li><a class="text-sg-architectural-gray hover:text-sg-pure-white transition-colors" href="#">Privacy
                Policy</a></li>
            <li><a class="text-sg-architectural-gray hover:text-sg-pure-white transition-colors" href="#">Terms of
                Service</a></li>
          </ul>
        </div>
        <div>
          <h5 class="font-sg-label-caps text-sg-label-caps text-sg-gold mb-6">联系我们</h5>
          <ul class="space-y-4">
            <li><a class="text-sg-architectural-gray hover:text-sg-pure-white transition-colors" href="#">Press Kit</a>
            </li>
            <li><a class="text-sg-architectural-gray hover:text-sg-pure-white transition-colors" href="#">Contact Us</a>
            </li>
            <li><span class="text-sg-architectural-gray">Tel: +86-755-83869399</span></li>
          </ul>
        </div>
        <div>
          <h5 class="font-sg-label-caps text-sg-label-caps text-sg-gold mb-6">关注我们</h5>
          <div class="flex gap-4">
            <span
              class="material-symbols-outlined text-sg-architectural-gray hover:text-sg-gold cursor-pointer">language</span>
            <span
              class="material-symbols-outlined text-sg-architectural-gray hover:text-sg-gold cursor-pointer">share</span>
            <span
              class="material-symbols-outlined text-sg-architectural-gray hover:text-sg-gold cursor-pointer">mail</span>
          </div>
        </div>
      </div>
      <div class="max-w-container-max mx-auto mt-10 md:mt-20 pt-6 md:pt-8 border-t border-sg-bronze-mute/10">
        <p class="text-sg-architectural-gray text-center font-sg-body-md">© 2024 IDEA-TOPS International Space Design
          Award. All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from '@/views/components/NavBar.vue'
import g6 from '@/assets/g6.jpg'
import flowchat from '@/assets/flowchat.png'

defineOptions({ name: 'SignUp' })

const heroCanvas = ref<HTMLCanvasElement | null>(null)
const condRefs: HTMLDivElement[] = []
const stepsRefs: HTMLDivElement[] = []
const catRefs: HTMLDivElement[] = []
const s1 = ref<HTMLDivElement | null>(null)
const s2 = ref<HTMLDivElement | null>(null)
const s3 = ref<HTMLDivElement | null>(null)
const condTitleRef = ref<HTMLDivElement | null>(null)
const bannerRef = ref<HTMLDivElement | null>(null)
const stepTitleRef = ref<HTMLDivElement | null>(null)
const flowRef = ref<HTMLDivElement | null>(null)
const feeLeftRef = ref<HTMLDivElement | null>(null)
const feeRightRef = ref<HTMLDivElement | null>(null)
const catTitleRef = ref<HTMLDivElement | null>(null)
const ctaRef = ref<HTMLDivElement | null>(null)

let animId = 0
const particles: Particle[] = []

class Particle {
  x = 0; y = 0; size = 0; speedX = 0; speedY = 0
  private cw = 0; private ch = 0
  private alpha = 0.6
  constructor(canvas: HTMLCanvasElement) {
    this.cw = canvas.width
    this.ch = canvas.height
    this.reset()
  }
  private reset() {
    this.x = Math.random() * this.cw
    this.y = Math.random() * this.ch
    this.size = Math.random() * 2 + 0.5
    this.speedX = Math.random() * 0.6 - 0.3
    this.speedY = Math.random() * 0.6 - 0.3
    this.alpha = Math.random() * 0.4 + 0.4
  }
  update() {
    this.x += this.speedX
    this.y += this.speedY
    if (this.x > this.cw) this.x = 0
    if (this.x < 0) this.x = this.cw
    if (this.y > this.ch) this.y = 0
    if (this.y < 0) this.y = this.ch
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.globalAlpha = this.alpha
    ctx.fillStyle = '#f2ca50'
    ctx.shadowBlur = 5
    ctx.shadowColor = '#f2ca50'
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
    ctx.shadowBlur = 0
    ctx.globalAlpha = 1
  }
}

function resizeCanvas(canvas: HTMLCanvasElement) {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

const conditions = [
  '面向全球公开征选，参赛者不受民族、宗教、地域、国别的限制。',
  '参赛作品必须为两年内竣工（从投稿日期倒推两年）项目，参赛作品图片必须为竣工后的实景照片。',
  '集体创作的作品必须标明主创设计师姓名或主创设计公司名称。',
  '参赛作品为合作项目时，必须注明合作单位及分工明细。',
]

const signupSteps = [
  { title: '登陆官网报名', desc: '登陆艾特奖官方网站（www.idea-tops.com），选择语言版本进入参赛栏目，点击"立即报名"。' },
  { title: '上传参赛作品', desc: '遴选不少于10张实景图片（JPG/PNG等，不低于300dpi）；平面图、施工图等不超过5张；附中英文设计说明不超过2000字。' },
  { title: '在线支付参赛费', desc: '参赛作品资料完善后，在线支付参赛费，支付成功即参赛成功。' },
  { title: '填写申请表', desc: '在线填写《艾特奖参赛申请表》，进入评审系统。材料不完整或不符合要求的，主办方将引导修正，约定期限内未修正视为无效。' },
]

const categories = [
  {
    letter: 'A', group: '城市设计',
    desc: '包括新城区城市设计、规划新建区域、城市更新、城中村改造、街区改造等。',
  },
  {
    letter: 'B', group: '建筑设计',
    items: [
      '文化建筑设计：博物馆、美术馆、图书馆、文化馆、文化艺术中心、展演类建筑等。',
      '教育建筑设计：高等院校、职业院校、中小学、幼儿园等校园办公及宿舍建筑。',
      '住宅建筑设计：独栋住宅、联排住宅、集合住宅、公寓等住宅类建筑。',
      '商业建筑设计：购物中心、商业街区、酒店、餐饮、娱乐类建筑等。',
      '公共建筑设计：办公楼、科技园、城市综合体、交通建筑、体育建筑、会展建筑等公共建筑。',
      '绿色建筑设计：节约能源、低碳环保，促进与自然生态和谐共生的建筑。',
      '装配式建筑设计：采用装配式设计建造的各种建筑。',
    ],
  },
  {
    letter: 'C', group: '景观设计',
    items: [
      '都市景观设计：城市公园、广场、绿化景观带、街区等公共环境景观设计。',
      '社区景观设计：庭院景观、社区花园景观、社区开放空间等景观设计。',
      '生态景观设计：风景区、郊野公园、自然生态保护区、森林公园、地质公园等景观设计。',
    ],
  },
  {
    letter: 'D', group: '室内设计',
    items: [
      '文化空间设计：学校、教堂、博物馆、音乐厅、影剧院等文化教育功能的公共空间。',
      '办公空间设计：各类办公场所，包括总部大楼、现代服务机构营业场所、小型办公、共享办公等空间。',
      '商业空间设计：商场、专卖店、零售商店、美发中心、书店等各种商业空间。',
      '展示空间设计：展厅或不同于零售店的产品、服务宣传展示场所，包括房地产营销中心、会展搭建的临时展销厅等。',
      '餐饮空间设计：主题餐厅、酒楼、特色风味餐厅、连锁餐饮等各种餐饮空间。',
      '娱乐空间设计：酒吧、夜总会、俱乐部、影视、游艺等娱乐场所。',
      '酒店空间设计：各类酒店室内空间（酒店类别认定的标准是室内设计项目必须具有客房、大堂和公共服务等空间）。',
      '休闲空间设计：会所、水疗中心、SPA等各类休闲场所。',
      '居住空间设计：别墅、大平层、公寓、集合住宅等居住空间设计。',
      '陈设艺术设计：包括家具，软装，装饰画，艺术摆件等在内的室内软环境设计。',
    ],
  },
  {
    letter: 'E', group: '光环境设计',
    items: [
      '城市建筑光环境设计：建筑外部光环境、广场、公园、公共空间、街区、庭院、游乐场等夜景灯光设计。',
      '建筑室内光环境设计：文化艺术、商业、娱乐、展示类等各种公共建筑内部的光环境设计。',
    ],
  },
  {
    letter: 'F', group: '城市公共艺术',
    desc: '各类置于城市公共空间的艺术作品，包括艺术装置、光影艺术、科技艺术、城市雕塑等。',
  },
]

onMounted(() => {
  // Particles
  const canvas = heroCanvas.value
  if (canvas) {
    const ctx = canvas.getContext('2d')
    if (ctx) {
      resizeCanvas(canvas)
      for (let i = 0; i < 350; i++) particles.push(new Particle(canvas))
      const animate = () => { ctx.clearRect(0, 0, canvas.width, canvas.height); particles.forEach(p => { p.update(); p.draw(ctx) }); animId = requestAnimationFrame(animate) }
      animate()
      const onResize = () => resizeCanvas(canvas)
      window.addEventListener('resize', onResize)
    }
  }

  // Stagger-in observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

  const refs = [s1, s2, s3, condTitleRef, bannerRef, stepTitleRef, flowRef, feeLeftRef, feeRightRef, catTitleRef, ctaRef]
  refs.forEach(r => { if (r.value) observer.observe(r.value) })
    ;[...condRefs, ...stepsRefs, ...catRefs].forEach(el => observer.observe(el))
})

onUnmounted(() => {
  cancelAnimationFrame(animId)
})
</script>

<style scoped>
.stagger-in {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.stagger-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.hover-gold-glow:hover {
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.15);
  border-color: rgba(212, 175, 55, 0.5);
}
</style>
