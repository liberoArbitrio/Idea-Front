<template>
  <footer class="w-full py-16 md:py-section-gap px-margin-desktop bg-surface-container-lowest border-t border-white/5">
    <div class="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-gutter">
      <!-- Logo + Description -->
      <div class="flex flex-col gap-6 md:gap-10">
        <div class="font-headline-md text-headline-md text-secondary font-bold">IDEA-TOPS</div>
        <p class="font-body-md text-body-md text-on-surface-variant/70 max-w-xs leading-relaxed">
          Connecting global design excellence and elevating spatial innovation since 2010.
        </p>
      </div>

      <!-- Links -->
      <div class="grid grid-cols-2 gap-12">
        <div class="flex flex-col gap-6">
          <h4 class="font-label-xs text-label-xs text-secondary uppercase tracking-[0.2em] font-bold">奖项信息</h4>
          <a class="font-body-md text-body-md text-on-surface-variant/80 hover:text-secondary transition-all" href="#">参赛报名</a>
          <a class="font-body-md text-body-md text-on-surface-variant/80 hover:text-secondary transition-all" href="#">参赛类别</a>
          <a class="font-body-md text-body-md text-on-surface-variant/80 hover:text-secondary transition-all" href="#">历届评委</a>
        </div>
        <div class="flex flex-col gap-6">
          <h4 class="font-label-xs text-label-xs text-secondary uppercase tracking-[0.2em] font-bold">联络我们</h4>
          <a class="font-body-md text-body-md text-on-surface-variant/80 hover:text-secondary transition-all" href="#">媒体报道</a>
          <a class="font-body-md text-body-md text-on-surface-variant/80 hover:text-secondary transition-all" href="#">合作伙伴</a>
          <a class="font-body-md text-body-md text-on-surface-variant/80 hover:text-secondary transition-all" href="#">联系我们</a>
        </div>
      </div>

      <!-- Social + Copyright -->
      <div class="flex flex-col gap-8 md:gap-12 justify-between mt-6 md:mt-0">
        <div class="flex gap-6 justify-start md:justify-end">
          <a
            class="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-secondary hover:bg-secondary/5 transition-all duration-500"
            href="#"
          >
            <span class="material-symbols-outlined text-sm">share</span>
          </a>
          <a
            class="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-secondary hover:bg-secondary/5 transition-all duration-500"
            href="#"
          >
            <span class="material-symbols-outlined text-sm">public</span>
          </a>
          <a
            class="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-secondary hover:bg-secondary/5 transition-all duration-500"
            href="#"
          >
            <span class="material-symbols-outlined text-sm">alternate_email</span>
          </a>
        </div>
        <p class="font-body-md text-body-md text-on-surface-variant/60 text-right">
          &copy; 2024 IDEA-TOPS International Design Award. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineOptions({ name: 'FooterSection' })
</script>
