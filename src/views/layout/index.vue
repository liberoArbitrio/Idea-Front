<template>
  <div>
    <NavBar />
    <main>
      <HeroSection />
      <div class="gold-divider"></div>
      <AboutSection />
      <div class="gold-divider"></div>
      <WinnerGrid />
      <div class="gold-divider"></div>
      <GlobalImpact />
      <div class="gold-divider"></div>
      <JuryGallery />
      <SubmitSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/views/components/NavBar.vue'
import HeroSection from '@/views/components/HeroSection.vue'
import AboutSection from '@/views/components/AboutSection.vue'
import WinnerGrid from '@/views/components/WinnerGrid.vue'
import GlobalImpact from '@/views/components/GlobalImpact.vue'
import JuryGallery from '@/views/components/JuryGallery.vue'
import SubmitSection from '@/views/components/SubmitSection.vue'
import FooterSection from '@/views/components/FooterSection.vue'

defineOptions({ name: 'AppLayout' })
</script>
