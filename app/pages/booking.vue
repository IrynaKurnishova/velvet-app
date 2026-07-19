<template>
  <div class="min-h-screen bg-[#0D0D0D] text-[#F5EDD8] max-w-md mx-auto relative">

    <!-- header -->
    <div class="flex items-center gap-3 px-4 py-4 border-b border-[#1e1e1e]">
      <NuxtLink to="/" class="w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#C9A96E] text-sm">
        ←
      </NuxtLink>
      <div>
        <p class="text-sm font-serif">Book a visit</p>
        <p class="text-[9px] tracking-wider text-[#5a4e38]">Hair styling · 60 min</p>
      </div>
    </div>

    <!-- specialist -->
    <div class="px-4 pt-4">
      <p class="text-[9px] tracking-[0.16em] text-[#5a4e38] uppercase mb-3">Choose specialist</p>
      <div class="flex gap-4">
        <button
            v-for="specialist in specialists"
            :key="specialist.name"
            @click="selected.specialist = specialist.name"
            class="flex flex-col items-center gap-1"
        >
          <div
              class="w-10 h-10 rounded-full bg-[#1e1a14] flex items-center justify-center text-sm transition-all"
              :class="selected.specialist === specialist.name
              ? 'border border-[#C9A96E] text-[#C9A96E]'
              : 'border border-[#2a2a2a] text-[#444]'"
          >
            {{ specialist.initials }}
          </div>
          <span
              class="text-[8px]"
              :class="selected.specialist === specialist.name ? 'text-[#C9A96E]' : 'text-[#5a4e38]'"
          >
            {{ specialist.name }}
          </span>
        </button>
      </div>
    </div>

    <div class="h-px bg-[#1e1a14] mx-4 my-4" />

    <!-- calendar -->
    <div class="px-4">
      <div class="flex items-center justify-between mb-3">
        <span class="text-[9px] tracking-[0.16em] text-[#5a4e38] uppercase">Select date</span>
        <span class="text-xs text-[#c8b89a]">July 2026</span>
      </div>
      <div class="grid grid-cols-7 gap-1 text-center">
        <div v-for="day in ['Mo','Tu','We','Th','Fr','Sa','Su']" :key="day" class="text-[8px] text-[#5a4e38] py-1">
          {{ day }}
        </div>
        <div v-for="n in 2" :key="'empty-'+n" />
        <button
            v-for="day in 28"
            :key="day"
            @click="selected.day = day"
            class="text-[10px] py-1.5 rounded-full transition-all"
            :class="selected.day === day
            ? 'bg-[#C9A96E] text-[#0D0D0D] font-medium'
            : day < 5 ? 'text-[#333]' : 'text-[#c8b89a] hover:text-[#C9A96E]'"
        >
          {{ day }}
        </button>
      </div>
    </div>

    <div class="h-px bg-[#1e1a14] mx-4 my-4" />

    <!-- time slots -->
    <div class="px-4">
      <p class="text-[9px] tracking-[0.16em] text-[#5a4e38] uppercase mb-3">Available time</p>
      <div class="grid grid-cols-3 gap-2">
        <button
            v-for="slot in timeSlots"
            :key="slot.time"
            :disabled="slot.taken"
            @click="!slot.taken && (selected.time = slot.time)"
            class="py-2 text-[10px] rounded-lg border transition-all"
            :class="slot.taken
            ? 'border-[#1a1a1a] text-[#2a2a2a] cursor-default'
            : selected.time === slot.time
              ? 'border-[#C9A96E] text-[#C9A96E] bg-[#1e1a0e]'
              : 'border-[#2a2a2a] text-[#555] hover:border-[#C9A96E]/50'"
        >
          {{ slot.time }}
        </button>
      </div>
    </div>

    <!-- confirm -->
    <!-- success message -->
    <div v-if="success" class="px-4 mt-6 pb-8 text-center">
      <p class="text-[#C9A96E] text-sm tracking-wider mb-1">Booking confirmed</p>
      <p class="text-[#5a4e38] text-xs">We'll send you a reminder before your visit</p>
      <NuxtLink to="/" class="block mt-4 text-xs text-[#444] underline">Back to home</NuxtLink>
    </div>

    <!-- confirm button -->
    <div v-else class="px-4 mt-6 pb-8">
      <button
          @click="confirmBooking"
          :disabled="loading"
          class="w-full py-3 text-xs tracking-[0.12em] uppercase rounded-lg border transition-all"
          :class="selected.specialist && selected.day && selected.time
      ? 'border-[#C9A96E] text-[#C9A96E] hover:bg-[#1e1a0e]'
      : 'border-[#222] text-[#333] cursor-default'"
      >
        {{ loading ? 'Confirming...' : 'Confirm booking' }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()

const specialists = [
  { name: 'Anna', initials: 'A' },
  { name: 'Marco', initials: 'M' },
  { name: 'Lisa', initials: 'L' },
  { name: 'Rita', initials: 'R' },
]

const timeSlots = [
  { time: '10:00', taken: true },
  { time: '10:30', taken: false },
  { time: '11:00', taken: false },
  { time: '12:00', taken: false },
  { time: '13:30', taken: true },
  { time: '15:00', taken: false },
]

const selected = reactive({
  specialist: 'Anna',
  day: 16,
  time: '11:00',
})

const loading = ref(false)
const success = ref(false)

async function confirmBooking() {
  if (!selected.specialist || !selected.day || !selected.time) return

  loading.value = true

  const { error } = await supabase.from('bookings').insert({
    specialist: selected.specialist,
    booking_date: `2026-07-${String(selected.day).padStart(2, '0')}`,
    booking_time: selected.time,
    service: 'Hair styling',
  })

  loading.value = false

  if (!error) {
    success.value = true
  }
}
</script>
