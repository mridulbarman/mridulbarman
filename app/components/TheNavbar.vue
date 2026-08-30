<template>
  <header class="sticky top-0 z-50 border-b border-white bg-[#1111ee]/90 text-white backdrop-blur-md font-sans">
    <nav class="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main navigation">
      <NuxtLink to="/#top" class="group flex items-center gap-3" aria-label="Home"><img src="/images/logo.png" alt="Mridul Barman logo" class="h-14 w-auto max-w-44 object-contain transition-transform group-hover:scale-105" /></NuxtLink>
      <div class="hidden items-center gap-7 text-sm text-white md:flex"><a v-for="link in links" :key="link.href" :href="link.href">{{ link.label }}</a></div>
      <div class="flex items-center gap-2"><a href="https://www.upwork.com/freelancers/~019986b6b5b840a20a" target="_blank" rel="noopener noreferrer" class="hidden rounded-full bg-white px-4 py-2 text-xs font-bold text-[#1111ee] transition-transform hover:-translate-y-0.5 sm:block">Hire me</a><button class="grid size-10 place-items-center rounded-full border border-white/20 md:hidden" :aria-expanded="menuOpen" aria-controls="mobile-navigation" aria-label="Toggle menu" @click="menuOpen = !menuOpen"><span aria-hidden="true" class="text-lg">{{ menuOpen ? '×' : '≡' }}</span></button></div>
    </nav>
    <div v-if="menuOpen" id="mobile-navigation" class="border-t border-white/10 bg-[#1111ee] px-5 py-4 text-white md:hidden"><a v-for="link in links" :key="link.href" :href="link.href" class="block border-b border-white/10 py-3 text-sm" @click="menuOpen = false">{{ link.label }}</a></div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const menuOpen = ref(false)
const links = [{ label: 'Work', href: '/#work' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/#contact' }]
</script>
