<template>
  <div class="min-h-screen bg-[#0D0D0D] text-[#F5EDD8] max-w-md mx-auto relative">

    <!-- header -->
    <div class="px-4 pt-6 pb-4 border-b border-[#1e1e1e]">
      <p class="text-[9px] tracking-[0.18em] text-[#5a4e38] uppercase mb-1">Velvet</p>
      <h1 class="font-serif text-2xl font-normal">Our services</h1>
    </div>

    <!-- filters -->
    <div class="flex gap-2 px-4 py-4 overflow-x-auto">
      <button
          v-for="cat in categories"
          :key="cat"
          @click="selected = cat"
          class="flex-shrink-0 px-4 py-1.5 text-[10px] tracking-wider rounded-full border transition-all"
          :class="selected === cat
          ? 'bg-[#C9A96E] text-[#0D0D0D] border-[#C9A96E]'
          : 'border-[#2a2a2a] text-[#555] hover:border-[#C9A96E]/50'"
      >
        {{ cat }}
      </button>
    </div>

    <!-- service list -->
    <div class="px-4 pb-24 space-y-3">
      <div
          v-for="service in filtered"
          :key="service.name"
          class="bg-[#151515] border border-[#1e1e1e] rounded-xl p-4 flex items-center justify-between gap-3"
      >
        <div class="flex items-center gap-3 flex-1 min-w-0">
          <div class="w-10 h-10 rounded-full bg-[#1e1a0e] border border-[#C9A96E]/20 flex items-center justify-center text-[#C9A96E] flex-shrink-0">
            {{ service.icon }}
          </div>
          <div class="min-w-0">
            <p class="text-sm text-[#F5EDD8] truncate">{{ service.name }}</p>
            <p class="text-[10px] text-[#5a4e38]">{{ service.duration }} · {{ service.category }}</p>
          </div>
        </div>
        <div class="flex flex-col items-end gap-1 flex-shrink-0">
          <p class="text-sm text-[#C9A96E]">{{ service.price }}</p>
          <NuxtLink
              to="/booking"
              class="text-[9px] tracking-wider border border-[#C9A96E]/40 text-[#C9A96E] px-3 py-1 rounded-full hover:bg-[#1e1a0e] transition-all"
          >
            Book
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- bottom nav -->
    <div class="fixed bottom-0 left-0 right-0 flex justify-around py-3 bg-[#0D0D0D] border-t border-[#1e1e1e]">
      <NuxtLink to="/" class="flex flex-col items-center gap-1 text-[9px] tracking-wider text-[#444]">
        <span class="text-lg">⌂</span> Home
      </NuxtLink>
      <NuxtLink to="/services" class="flex flex-col items-center gap-1 text-[9px] tracking-wider text-[#C9A96E]">
        <span class="text-lg">✂</span> Services
      </NuxtLink>
      <NuxtLink to="/booking" class="flex flex-col items-center gap-1 text-[9px] tracking-wider text-[#444]">
        <span class="text-lg">◷</span> Book
      </NuxtLink>
      <NuxtLink to="/profile" class="flex flex-col items-center gap-1 text-[9px] tracking-wider text-[#444]">
        <span class="text-lg">◯</span> Profile
      </NuxtLink>
    </div>

  </div>
</template>

<script setup lang="ts">
const categories = ['All', 'Hair', 'Face', 'Body', 'Nails']
const selected = ref('All')

const services = [
  { name: 'Hair styling', duration: '60 min', price: 'from €65', category: 'Hair', icon: '✂' },
  { name: 'Hair coloring', duration: '120 min', price: 'from €110', category: 'Hair', icon: '✦' },
  { name: 'Facial care', duration: '75 min', price: 'from €80', category: 'Face', icon: '◈' },
  { name: 'Anti-age ritual', duration: '90 min', price: 'from €120', category: 'Face', icon: '★' },
  { name: 'Body massage', duration: '60 min', price: 'from €70', category: 'Body', icon: '◇' },
  { name: 'Full ritual', duration: '180 min', price: 'from €140', category: 'Body', icon: '♦' },
  { name: 'Manicure', duration: '45 min', price: 'from €40', category: 'Nails', icon: '◉' },
  { name: 'Pedicure', duration: '60 min', price: 'from €50', category: 'Nails', icon: '○' },
]

const filtered = computed(() =>
    selected.value === 'All'
        ? services
        : services.filter(s => s.category === selected.value)
)
</script>
