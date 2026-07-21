<template>
  <div class="min-h-screen bg-[#0D0D0D] text-[#F5EDD8] max-w-md mx-auto relative">

    <!-- hero -->
    <div class="relative h-[55vh] flex flex-col items-center justify-center p-8 overflow-hidden text-center">
      <div class="absolute inset-0" style="background: linear-gradient(135deg, #1a1208 0%, #0D0D0D 40%, #12100a 70%, #1e1508 100%);"></div>
      <div class="absolute inset-0" style="background: radial-gradient(ellipse at 50% 60%, #2d1f08 0%, transparent 65%);"></div>
      <div class="absolute top-0 left-0 right-0 h-px" style="background: linear-gradient(to right, transparent, #C9A96E44, transparent);"></div>
      <div class="absolute bottom-0 left-0 right-0 h-px" style="background: linear-gradient(to right, transparent, #C9A96E22, transparent);"></div>

      <div class="relative flex flex-col items-center">
        <div class="flex items-center gap-2 mb-6">
          <div class="h-px w-8 bg-[#C9A96E]"></div>
          <span class="text-[9px] tracking-[0.22em] text-[#C9A96E] uppercase">Est. 2026</span>
          <div class="h-px w-8 bg-[#C9A96E]"></div>
        </div>
        <h1 class="font-serif text-6xl font-normal text-[#F5EDD8] mb-4 leading-none tracking-wide">Velvet</h1>
        <p class="font-serif text-base text-[#c8b89a] font-normal mb-6 leading-relaxed max-w-[200px]">
          Book your premium beauty experience
        </p>
        <div class="flex items-center gap-2">
          <div class="h-px w-4 bg-[#C9A96E]/40"></div>
          <span class="text-[9px] tracking-[0.16em] text-[#5a4e38] uppercase">Beauty · Turin</span>
          <div class="h-px w-4 bg-[#C9A96E]/40"></div>
        </div>
      </div>
    </div>

    <!-- nav -->
    <div class="flex justify-around py-3 border-b border-[#1e1e1e]">
      <NuxtLink to="/" class="flex flex-col items-center gap-1 text-[9px] tracking-wider text-[#C9A96E]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12H3l9-9 9 9h-2"/><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"/></svg>
        Home
      </NuxtLink>
      <NuxtLink to="/services" class="flex flex-col items-center gap-1 text-[9px] tracking-wider text-[#444]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3"/><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>
        Services
      </NuxtLink>
      <NuxtLink to="/booking" class="flex flex-col items-center gap-1 text-[9px] tracking-wider text-[#444]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
        Book
      </NuxtLink>
      <NuxtLink to="/profile" class="flex flex-col items-center gap-1 text-[9px] tracking-wider text-[#444]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
        Profile
      </NuxtLink>
    </div>

    <!-- services -->
    <div class="px-4 pt-5">
      <p class="text-[9px] tracking-[0.16em] text-[#5a4e38] uppercase mb-3">Our services</p>
      <div class="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
        <NuxtLink
            v-for="service in services"
            :key="service.name"
            :to="`/booking?service=${service.name}`"
            class="flex-shrink-0 w-28 bg-[#151515] border border-[#222] rounded-xl p-3 active:border-[#C9A96E] transition-all"
        >
          <div class="w-9 h-9 rounded-full bg-[#1e1a0e] border border-[#C9A96E]/30 flex items-center justify-center mb-2 text-[#C9A96E]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" v-html="service.icon"></svg>
          </div>
          <p class="text-[9px] text-[#c8b89a] mb-1 leading-tight">{{ service.name }}</p>
          <p class="text-[9px] text-[#C9A96E]">{{ service.price }}</p>
        </NuxtLink>
      </div>
    </div>

    <!-- cta -->
    <div class="px-4 mt-2">
      <NuxtLink
          to="/booking"
          class="block w-full bg-[#C9A96E] text-[#0D0D0D] text-xs tracking-[0.12em] uppercase font-medium text-center py-3 rounded-lg"
      >
        Reserve your time
      </NuxtLink>
      <NuxtLink
          to="/chat"
          class="block w-full mt-2 border border-[#C9A96E]/40 text-[#C9A96E] text-xs tracking-[0.12em] uppercase text-center py-3 rounded-lg hover:bg-[#1e1a0e] transition-all"
      >
        Ask AI assistant
      </NuxtLink>
    </div>

  </div>
</template>

<script setup lang="ts">
const services = [
  {
    name: 'Hair styling',
    price: 'from €65',
    icon: '<path d="M9.5 2a.5.5 0 0 1 .5.5v.5h4v-.5a.5.5 0 0 1 1 0V3h.5A2.5 2.5 0 0 1 18 5.5v1A2.5 2.5 0 0 1 15.5 9h-.55l.55 10H9l.55-10H9A2.5 2.5 0 0 1 6.5 6.5v-1A2.5 2.5 0 0 1 9 3h.5v-.5a.5.5 0 0 1 .5-.5z"/>',
  },
  {
    name: 'Facial care',
    price: 'from €80',
    icon: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
  },
  {
    name: 'Full ritual',
    price: 'from €140',
    icon: '<path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/>',
  },
  {
    name: 'Massage',
    price: 'from €70',
    icon: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  },
]
</script>
