<template>
  <section class="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
    <!-- Hero Background Image -->
    <div ref="heroBgRef" class="absolute inset-0 z-0 hero-parallax" style="transform: translate(0px, 0px) scale(1.1);">
      <img
        alt="Grand Design Temple"
        class="w-full h-full object-cover scale-110"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_-N0C8NuW-6gxTGjbAvKll2C9l4Hq8Wy-9yT6PzSzmIFeozVaETjB6Yfkl_bN8pofY4slAEQBMQWiFB4gL4KqKTHu1QTAVJ3ChhiPqxC9sFhNiAvTx4ylAI6m18aWAhBMWQhCABvYvYVfDqeEEMJC4SW-nt2-g6fCjA58hSeOhzT7q3oeQS0BaNDMklAD6C-J3aqx5Q_K8vUdvrievvXNtEY1De0ZG7aoDpmEKesAbpMkGxteyuNr_F5qivcTOpiaBbcUw-JC7Aw"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50"></div>
      <div class="absolute inset-0 bg-black/40"></div>
      <!-- Saint's Gate Bloom -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 blur-[120px] rounded-full"></div>
    </div>

    <!-- Particles Canvas -->
    <canvas ref="particlesCanvasRef" class="absolute inset-0 pointer-events-none z-10"></canvas>

    <!-- Hero Content -->
    <div ref="heroContentRef" class="relative z-20 stagger-in hero-parallax visible">
      <h1 class="font-display-hero text-[56px] sm:text-[80px] md:text-[120px] gold-gradient-text tracking-tighter mb-4 font-black drop-shadow-2xl leading-none">
        IDEA-TOPS
      </h1>
      <h2 class="font-headline-lg text-headline-md md:text-headline-lg text-on-surface-variant/90 mb-6 md:mb-8 uppercase tracking-[0.2em] md:tracking-[0.4em] font-light">
        International Space Design Award
      </h2>
      <p class="font-body-lg text-body-md md:text-body-lg text-secondary/70 max-w-2xl mx-auto italic mb-8 md:mb-12 tracking-wide px-4">
        "The Chinese Coordinate of Global Design"
      </p>
      <div class="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center px-4">
        <button
          class="px-8 py-4 md:px-12 md:py-5 bg-secondary text-ink-jade font-label-sm text-label-xs md:text-label-sm uppercase tracking-[0.2em] font-bold hover:brightness-110 hover:shadow-[0_0_30px_rgba(228,194,133,0.3)] transition-all duration-500">
          立即注册
        </button>
        <button
          class="px-8 py-4 md:px-12 md:py-5 border border-white/20 hover:border-secondary transition-all duration-500 font-label-sm text-label-xs md:text-label-sm uppercase tracking-[0.2em] backdrop-blur-sm">
          查看详情
        </button>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
      <span class="material-symbols-outlined text-secondary/60 text-2xl md:text-4xl font-extralight">expand_more</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

defineOptions({ name: 'HeroSection' })

const heroBgRef = ref<HTMLDivElement | null>(null)
const heroContentRef = ref<HTMLDivElement | null>(null)
const particlesCanvasRef = ref<HTMLCanvasElement | null>(null)

let animationId = 0
let particles: Particle[] = []

class Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  life: number

  constructor(private canvas: HTMLCanvasElement) {
    this.x = 0
    this.y = 0
    this.size = 0
    this.speedX = 0
    this.speedY = 0
    this.opacity = 0
    this.life = 0
    this.init()
  }

  init() {
    this.x = Math.random() * this.canvas.width
    this.y = Math.random() * this.canvas.height
    this.size = Math.random() * 2.5 + 0.5
    this.speedX = Math.random() * 0.4 - 0.2
    this.speedY = Math.random() * -0.8 - 0.2
    this.opacity = Math.random() * 0.6 + 0.1
    this.life = Math.random() * 100 + 50
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY
    this.life -= 0.2
    if (this.life <= 0 || this.y < 0) this.init()
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = `rgba(228, 194, 133, ${this.opacity * (this.life / 100)})`
    ctx.shadowBlur = 5
    ctx.shadowColor = 'rgba(228, 194, 133, 0.5)'
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    ctx.fill()
    ctx.shadowBlur = 0
  }
}

function initCanvas(canvas: HTMLCanvasElement) {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

function animateParticles(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for (const p of particles) {
    p.update()
    p.draw(ctx)
  }
  animationId = requestAnimationFrame(() => animateParticles(canvas, ctx))
}

function handleMouseMove(e: MouseEvent) {
  const x = (e.clientX - window.innerWidth / 2) / 50
  const y = (e.clientY - window.innerHeight / 2) / 50

  if (heroBgRef.value) {
    heroBgRef.value.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px) scale(1.1)`
  }
  if (heroContentRef.value) {
    heroContentRef.value.style.transform = `translate(${-x}px, ${-y}px)`
  }
}

let resizeHandler: (() => void) | null = null

onMounted(() => {
  const canvas = particlesCanvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  initCanvas(canvas)
  for (let i = 0; i < 200; i++) {
    particles.push(new Particle(canvas))
  }
  animateParticles(canvas, ctx)

  resizeHandler = () => initCanvas(canvas)
  window.addEventListener('resize', resizeHandler)
  window.addEventListener('mousemove', handleMouseMove)
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler)
  }
  window.removeEventListener('mousemove', handleMouseMove)
  particles = []
})
</script>

<style scoped>
.hero-parallax {
  transition: transform 0.1s ease-out;
}

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
