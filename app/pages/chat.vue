<template>
  <div class="min-h-screen bg-[#0D0D0D] text-[#F5EDD8] max-w-md mx-auto relative flex flex-col">

    <!-- header -->
    <div class="flex items-center gap-3 px-4 py-4 border-b border-[#1e1e1e]">
      <NuxtLink to="/" class="w-8 h-8 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-[#C9A96E] text-sm">
        ←
      </NuxtLink>
      <div class="flex items-center gap-2 flex-1">
        <div class="w-8 h-8 rounded-full bg-[#1e1a0e] border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E] text-xs">
          AI
        </div>
        <div>
          <p class="text-sm font-serif">Velvet Assistant</p>
          <p class="text-[9px] tracking-wider text-[#5a4e38]">Always here to help</p>
        </div>
      </div>
    </div>

    <!-- messages -->
    <div ref="messagesRef" class="flex-1 overflow-y-auto px-4 py-4 space-y-4">
      <div v-for="(msg, i) in messages" :key="i" class="flex" :class="msg.role === 'user' ? 'justify-end' : 'justify-start'">
        <div
            class="max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed"
            :class="msg.role === 'user'
            ? 'bg-[#C9A96E] text-[#0D0D0D]'
            : 'bg-[#151515] border border-[#1e1e1e] text-[#c8b89a]'"
        >
          {{ msg.content }}
        </div>
      </div>
      <div v-if="loading" class="flex justify-start">
        <div class="bg-[#151515] border border-[#1e1e1e] px-4 py-2.5 rounded-2xl">
          <span class="text-[#5a4e38] text-sm">...</span>
        </div>
      </div>
    </div>

    <!-- input -->
    <div class="px-4 py-4 border-t border-[#1e1e1e]">
      <div class="flex gap-2">
        <input
            v-model="input"
            @keydown.enter="send"
            placeholder="Ask about services, prices..."
            class="flex-1 bg-[#151515] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-[#F5EDD8] placeholder-[#444] outline-none focus:border-[#C9A96E]/50"
        />
        <button
            @click="send"
            :disabled="loading || !input.trim()"
            class="w-12 h-12 rounded-xl bg-[#C9A96E] text-[#0D0D0D] flex items-center justify-center text-lg disabled:opacity-40"
        >
          →
        </button>
      </div>
      <!-- quick questions -->
      <div class="flex gap-2 mt-3 overflow-x-auto pb-1">
        <button
            v-for="q in quickQuestions"
            :key="q"
            @click="sendQuick(q)"
            class="flex-shrink-0 text-[9px] tracking-wider border border-[#2a2a2a] text-[#5a4e38] px-3 py-1.5 rounded-full hover:border-[#C9A96E]/40 hover:text-[#C9A96E] transition-all"
        >
          {{ q }}
        </button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
const messages = ref([
  {
    role: 'assistant',
    content: 'Hello! I\'m the Velvet assistant. Ask me about our services, prices, or book a visit.'
  }
])

const input = ref('')
const loading = ref(false)
const messagesRef = ref<HTMLElement>()

const quickQuestions = [
  'What services do you offer?',
  'What are your prices?',
  'Working hours?',
  'How to book?',
]

async function send() {
  if (!input.value.trim() || loading.value) return

  const userMessage = input.value.trim()
  input.value = ''

  messages.value.push({ role: 'user', content: userMessage })
  loading.value = true

  await nextTick()
  scrollToBottom()

  try {
    const data = await $fetch<{ reply: string }>('/api/chat', {
      method: 'POST',
      body: { message: userMessage },
    })
    messages.value.push({ role: 'assistant', content: data.reply })
  } catch {
    messages.value.push({ role: 'assistant', content: 'Sorry, something went wrong. Please try again.' })
  } finally {
    loading.value = false
    await nextTick()
    scrollToBottom()
  }
}

function sendQuick(question: string) {
  input.value = question
  send()
}

function scrollToBottom() {
  if (messagesRef.value) {
    messagesRef.value.scrollTop = messagesRef.value.scrollHeight
  }
}
</script>
