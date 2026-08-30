<template>
  <div class="app-wrapper">

    <div class="content-wrapper">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<style>
html, body {
  overflow-x: hidden;
}

body {
  background: #1111ee !important;
  color: white !important;
  margin: 0;
  padding: 0;
}

.app-wrapper {
  position: relative;
  min-height: 100vh;
  width: 100%;
}

.app-wrapper::after {
  content: "";
  position: fixed;
  inset: 0;
  z-index: -1;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256' viewBox='0 0 256 256'%3E%3Cfilter id='blueNoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.1' numOctaves='4' seed='12' stitchTiles='stitch' result='noise'/%3E%3CfeColorMatrix in='noise' type='matrix' values='0 0 0 0 0.08 0 0 0 0 0.25 0 0 0 0 1 0 0 0 0.45 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23blueNoise)'/%3E%3C/svg%3E");
  background-size: 384px 384px;
  pointer-events: none;
  opacity: 1;
  mix-blend-mode: screen;
}

.content-wrapper {
  position: relative;
  z-index: 1;
}
</style>
