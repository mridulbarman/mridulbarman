<template>
  <component
    :is="project.url && !project.embedUrl ? 'a' : 'div'"
    :href="project.url && !project.embedUrl ? project.url : undefined"
    target="_blank"
    rel="noopener noreferrer"
    class="card-wrapper project-card"
  >
    <article class="card">
      <div class="media-container">
        <div class="texture" v-if="!project.embedUrl"></div>
        <img :src="thumbnailUrl" class="media-img" v-if="thumbnailUrl" alt="Video thumbnail" />
      </div>

      <span class="eyebrow">
        {{ formattedIndex }} / {{ project.typeLabel }}
      </span>

      <section class="blue-panel">
        <h2 class="title">{{ project.title }}</h2>
        <p class="description" v-if="project.description">{{ project.description }}</p>
        <a class="website" :href="project.url" target="_blank" v-if="project.url">View Project ↗</a>

        <div class="logo">
          <!-- Video Icon -->
          <svg v-if="project.type === 'video'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          
          <!-- Code/Github Icon for Full-Stack -->
          <svg v-else-if="project.type === 'full-stack'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          
          <!-- Design Icon -->
          <svg v-else-if="project.type === 'design'" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
        </div>
      </section>
    </article>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Project = {
  id: string
  type: 'video' | 'full-stack' | 'design'
  typeLabel: string
  title: string
  description: string
  mediaLabel: string
  embedUrl?: string
  url?: string
}

const props = defineProps<{ project: Project }>()

// Computes the video thumbnail
const videoId = computed(() => props.project.embedUrl?.split('/').pop() ?? '')
const thumbnailUrl = computed(() => videoId.value ? `https://i.ytimg.com/vi/${videoId.value}/maxresdefault.jpg` : null)

// Extracts the ID number (e.g. "01" from "video-01") or falls back to "01"
const formattedIndex = computed(() => {
  const parts = props.project.id.split('-')
  return parts.length > 1 ? parts[1] : '01'
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');

.card-wrapper {
  display: block;
  text-decoration: none;
  color: inherit;
  font-family: "Inter", Arial, sans-serif;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  flex: 0 0 min(360px, calc(100vw - 2.5rem));
  scroll-snap-align: start;
}

.card-wrapper[href]:hover {
  transform: translateY(-8px);
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 4px;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.08);
  color: white;
  width: 100%;
  overflow: hidden;
}

/* Even cards have the blue panel on top! */
.card-wrapper:nth-child(even) .card {
  flex-direction: column-reverse;
}

/* =========================================
   MEDIA CONTAINER (Fixed to 16:9)
========================================= */

.media-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9; /* Perfect fit for YouTube thumbnails */
  background: transparent;
  overflow: hidden;
  flex-shrink: 0;
}

.media-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Covers the 16:9 container flawlessly */
  transition: transform 0.8s ease;
}

.card-wrapper:hover .media-img {
  transform: scale(1.05);
}

/* =========================================
   ABSTRACT BLUE / WHITE TEXTURE
========================================= */

.texture {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background:
    linear-gradient(
      126deg,
      #276ca4 0%,
      #dcebf8 13%,
      #ffffff 22%,
      #b7d1e9 31%,
      #ffffff 40%,
      #eaf3fa 51%,
      #8db7d9 61%,
      #ffffff 71%,
      #d8e9f6 84%,
      #8db5d5 100%
    );
  transition: transform 0.8s ease;
}

.card-wrapper:hover .texture {
  transform: scale(1.05) rotate(1deg);
}

/* =========================================
   SMALL LABEL
========================================= */

.eyebrow {
  position: absolute;
  top: 18px;
  left: 18px;
  z-index: 10;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: .02em;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 0 1px 4px rgba(0,0,0,0.8);
  pointer-events: none;
}

.card-wrapper:nth-child(even) .eyebrow {
  top: auto;
  bottom: 18px;
}

/* =========================================
   BLUE CONTENT PANEL
========================================= */

.blue-panel {
  position: relative;
  width: 100%;
  background: #1111ee; 
  padding: 30px 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 180px;
}

.blue-panel::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 55%;
  height: 1px;
  background: rgba(255,255,255,0.45);
}

.card-wrapper:nth-child(even) .blue-panel::before {
  top: auto;
  bottom: 0;
  left: 0;
  right: auto;
  width: 40%;
}

.title {
  position: relative;
  z-index: 2;
  margin-top: 0;
  max-width: 90%;
  font-size: clamp(24px, 6vw, 32px);
  line-height: .96;
  font-weight: 300;
  letter-spacing: -0.045em;
  text-transform: uppercase;
  pointer-events: none;
}

.description {
  position: relative;
  z-index: 2;
  margin-top: 10px;
  max-width: 90%;
  color: rgba(255,255,255,0.85);
  font-size: 11px;
  line-height: 1.35;
  font-weight: 400;
  pointer-events: none;
}

.website {
  position: absolute;
  bottom: 14px;
  left: 18px;
  color: rgba(255,255,255,0.7);
  font-size: 9px;
  text-decoration: none;
  transition: color 0.3s;
}

.card-wrapper:hover .website,
.website:hover {
  color: #fff;
}

/* =========================================
   LOGO
========================================= */

.logo {
  position: absolute;
  right: 16px;
  bottom: 18px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: -0.07em;
  pointer-events: none;
}

.card-wrapper:nth-child(even) .logo {
  bottom: auto;
  top: 18px;
}



/* =========================================
   RESPONSIVE
========================================= */
@media (max-width: 480px) {
  .blue-panel {
    padding: 24px 15px;
    min-height: 150px;
  }
  
  .title {
    font-size: 26px;
  }

  .description {
    font-size: 10px;
  }
}
</style>
