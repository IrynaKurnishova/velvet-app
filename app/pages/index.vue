<template>
  <div class="min-h-screen bg-[#0D0D0D] text-[#F5EDD8] max-w-md mx-auto relative">

    <!-- hero -->
    <div class="relative h-[55vh] flex flex-col justify-end p-6 bg-[#1a1410]">
      <div class="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent" />
      <div class="relative">
        <span class="text-xs tracking-[0.18em] text-[#C9A96E] border border-[#C9A96E] px-3 py-1 mb-3 inline-block">
          Premium experience
        </span>
        <h1 class="font-serif text-4xl font-normal text-[#F5EDD8] mb-1">Velvet</h1>
        <p class="text-xs tracking-widest text-[#7a6a50]">Beauty & dining</p>
      </div>
    </div>

    <!-- nav -->
    <!-- nav -->
    <div class="flex justify-around py-3 border-b border-[#1e1e1e]">
      <NuxtLink to="/" class="flex flex-col items-center gap-1 text-[9px] tracking-wider text-[#C9A96E]">
        <span class="text-lg">⌂</span> Home
      </NuxtLink>
      <NuxtLink to="/services" class="flex flex-col items-center gap-1 text-[9px] tracking-wider text-[#444]">
        <span class="text-lg">✂</span> Services
      </NuxtLink>
      <NuxtLink to="/booking" class="flex flex-col items-center gap-1 text-[9px] tracking-wider text-[#444]">
        <span class="text-lg">◷</span> Book
      </NuxtLink>
      <NuxtLink to="/profile" class="flex flex-col items-center gap-1 text-[9px] tracking-wider text-[#444]">
        <span class="text-lg">◯</span> Profile
      </NuxtLink>
    </div>

    <!-- services -->
    <div class="px-4 pt-4">
      <p class="text-[9px] tracking-[0.16em] text-[#5a4e38] uppercase mb-3">Our services</p>
      <div class="flex gap-3 overflow-x-auto pb-4">
        <NuxtLink
            v-for="service in services"
            :key="service.name"
            :to="`/booking?service=${service.name}`"
            class="flex-shrink-0 w-28 bg-[#151515] border border-[#222] rounded-xl p-3 active:border-[#C9A96E] transition-all"
        >
          <div class="w-8 h-8 rounded-full bg-[#1e1a0e] border border-[#C9A96E]/30 flex items-center justify-center mb-2 text-[#C9A96E] text-sm">
            {{ service.icon }}
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
    </div>

  </div>
</template>

<script setup lang="ts">
const services = [
  { name: 'Hair styling', price: 'from €65', icon: '✂' },
  { name: 'Facial care', price: 'from €80', icon: '✦' },
  { name: 'Full ritual', price: 'from €140', icon: '★' },
  { name: 'Massage', price: 'from €70', icon: '◈' },
]
</script>
