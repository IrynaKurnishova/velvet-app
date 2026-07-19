<template>
  <div class="min-h-screen bg-[#0D0D0D] text-[#F5EDD8] pb-24 max-w-md mx-auto relative">

    <!-- header -->
    <div class="px-4 pt-6 pb-4 border-b border-[#1e1e1e]">
      <p class="text-[9px] tracking-[0.18em] text-[#5a4e38] uppercase mb-1">Velvet</p>
      <h1 class="font-serif text-2xl font-normal">My profile</h1>
    </div>

    <!-- avatar -->
    <div class="px-4 py-6 flex items-center gap-4 border-b border-[#1e1e1e]">
      <div class="w-14 h-14 rounded-full bg-[#1e1a0e] border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E] text-xl font-serif">
        G
      </div>
      <div>
        <p class="text-base text-[#F5EDD8]">Guest</p>
        <p class="text-[10px] text-[#5a4e38] tracking-wider">Premium member</p>
      </div>
    </div>

    <!-- bookings history -->
    <div class="px-4 pt-5">
      <p class="text-[9px] tracking-[0.16em] text-[#5a4e38] uppercase mb-4">Booking history</p>

      <div v-if="pending" class="text-[#5a4e38] text-xs text-center py-8">
        Loading...
      </div>

      <div v-else-if="!bookings?.length" class="text-[#5a4e38] text-xs text-center py-8">
        No bookings yet
      </div>

      <div v-else class="space-y-3">
        <div
            v-for="booking in bookings"
            :key="booking.id"
            class="bg-[#151515] border border-[#1e1e1e] rounded-xl p-4"
        >
          <div class="flex items-start justify-between mb-2">
            <p class="text-sm text-[#F5EDD8]">{{ booking.service }}</p>
            <span class="text-[9px] px-2 py-0.5 rounded-full border border-[#C9A96E]/30 text-[#C9A96E]">
              {{ booking.status }}
            </span>
          </div>
          <p class="text-[10px] text-[#5a4e38]">
            {{ booking.specialist }} · {{ formatDate(booking.booking_date) }} · {{ booking.booking_time }}
          </p>
        </div>
      </div>
    </div>

    <!-- bottom nav -->
    <div class="fixed bottom-0 left-0 right-0 flex justify-around py-3 bg-[#0D0D0D] border-t border-[#1e1e1e]">
      <NuxtLink to="/" class="flex flex-col items-center gap-1 text-[9px] tracking-wider text-[#444]">
        <span class="text-lg">⌂</span> Home
      </NuxtLink>
      <NuxtLink to="/services" class="flex flex-col items-center gap-1 text-[9px] tracking-wider text-[#444]">
        <span class="text-lg">✂</span> Services
      </NuxtLink>
      <NuxtLink to="/booking" class="flex flex-col items-center gap-1 text-[9px] tracking-wider text-[#444]">
        <span class="text-lg">◷</span> Book
      </NuxtLink>
      <NuxtLink to="/profile" class="flex flex-col items-center gap-1 text-[9px] tracking-wider text-[#C9A96E]">
        <span class="text-lg">◯</span> Profile
      </NuxtLink>
    </div>

  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()

const { data: bookings, pending } = await useAsyncData('bookings', async () => {
  const { data } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false })
  return data
})

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
</script>
