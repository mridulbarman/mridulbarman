<template>
  <main class="hero-page">
    <svg width="0" height="0" style="position: absolute; pointer-events: none;">
      <filter id="paper-sticker" x="-10%" y="-30%" width="120%" height="160%">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" result="displaced" xChannelSelector="R" yChannelSelector="G" />
        <feMorphology in="displaced" operator="dilate" radius="4" result="dilated" />
        <feFlood flood-color="#ffffff" result="whiteColor" />
        <feComposite in="whiteColor" in2="dilated" operator="in" result="outline" />
        <feMerge result="merged">
          <feMergeNode in="outline" />
          <feMergeNode in="displaced" />
        </feMerge>
        <feDropShadow dx="2" dy="8" stdDeviation="8" flood-opacity="0.25" />
      </filter>
    </svg>
    <section id="top" class="hero-section">

      <div class="hero-grid"></div>
      <div class="card-window" aria-label="Selected work">
        <div class="card-track">
          <div v-for="group in 2" :key="group" class="card-group" :aria-hidden="group === 2">
            <a v-for="card in cards" :key="`${group}-${card.id}`" class="moving-card" href="#top" :aria-label="`${card.title} card`" :tabindex="group === 2 ? -1 : 0">
              <div class="card-shell" :style="{ '--screen': card.screen, '--stripe': card.stripe }">
                <div class="card-top"><span class="screw">+</span><span class="screw">+</span></div>
                <div class="card-screen"><span class="screen-line"></span><span class="screen-line"></span><strong class="skill-title">{{ card.title }}</strong><div class="screen-stripe"><span class="reel"></span><span class="tape"></span><span class="reel"></span><strong>{{ card.mark }}</strong></div><span class="screen-footer">{{ card.meta }}</span></div>
                <div class="card-bottom"><span></span><span></span><span></span><span></span></div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="hero-title" aria-live="polite">
        <Transition name="title" mode="out-in">
          <h1 :key="activeTitle">{{ activeTitle }}</h1>
        </Transition>
      </div>
      <div class="hero-caption left-caption">FULL-STACK<br>DEVELOPER</div>
      <div class="hero-caption right-caption">DIRECTOR OF<br>VISUAL STORYTELLING</div>
      <a class="explore-button" href="#work">EXPLORE <span>↓</span></a>
    </section>
    <section id="work" class="projects-section">
      <div class="skills-strip" aria-label="Skills and capabilities">
        <div class="skills-strip__track">
          <div v-for="group in 2" :key="group" class="skills-strip__group" :aria-hidden="group === 2">
            <span v-for="skill in skills" :key="`${group}-${skill}`" class="skill-chip">{{ skill }}</span>
          </div>
        </div>
      </div>

      <div class="projects-heading">
        <p>Selected work / 2026</p>
        <h2>MY WORK</h2>
        <span>Three ways I turn ideas into things people can see, use, and remember.</span>
      </div>

      <nav class="work-options" aria-label="Work categories">
        <button v-for="category in projectCategories" :key="category.slug" class="work-option" :class="{ 'work-option--active': activeCategory === category.slug }" type="button" :aria-expanded="activeCategory === category.slug" :aria-controls="`work-${category.slug}`" @click="toggleCategory(category.slug)">
          <span class="work-option__index">{{ category.index }}</span>
          <span>{{ category.title }}</span>
          <span class="work-option__arrow" aria-hidden="true">↘</span>
        </button>
      </nav>

      <div class="category-list">
        <template v-for="category in projectCategories" :key="category.slug">
          <section v-if="activeCategory === category.slug" :id="`work-${category.slug}`" class="project-category">
            <header class="category-heading">
              <div class="category-title">
                <p>{{ category.index }} / 03</p>
                <h3>{{ category.title }}</h3>
              </div>
              <span>{{ category.description }}</span>
            </header>
            <div class="projects-grid">
              <ProjectCard v-for="project in category.projects" :key="project.id" :project="project" />
            </div>
          </section>
        </template>
      </div>
    </section>

    <section id="contact" class="contact-section">
      <div class="contact-content">
        <p class="contact-sub">Have a project in mind?</p>
        <h2 class="contact-title">LET'S BUILD<br>SOMETHING.</h2>
        <form v-if="!isSuccess" class="contact-form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="submitForm">
          <input type="hidden" name="form-name" value="contact" />
          <div class="hidden-field" style="display: none;">
            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
          </div>
          <div class="form-group">
            <input type="text" name="name" aria-label="Your Name" placeholder="YOUR NAME" required class="form-input" :disabled="isSubmitting" />
          </div>
          <div class="form-group">
            <input type="email" name="email" aria-label="Your Email" placeholder="YOUR EMAIL" required class="form-input" :disabled="isSubmitting" />
          </div>
          <div class="form-group">
            <textarea name="message" aria-label="Your Message" placeholder="TELL ME ABOUT YOUR PROJECT..." required class="form-input form-textarea" rows="4" :disabled="isSubmitting"></textarea>
          </div>
          <button type="submit" class="form-submit" :disabled="isSubmitting">
            {{ isSubmitting ? 'SENDING...' : 'SEND MESSAGE' }}
            <span v-if="!isSubmitting" class="arrow" aria-hidden="true">↗</span>
          </button>
        </form>

        <div v-else class="contact-success">
          <div class="success-icon">✓</div>
          <h3>MESSAGE SENT</h3>
          <p>Thanks for reaching out! I'll get back to you shortly.</p>
          <button @click="isSuccess = false" class="success-reset">SEND ANOTHER</button>
        </div>

        <a href="mailto:mridul@developerzilla.com" class="contact-email-alt">
          or email me directly at <strong>mridul@developerzilla.com</strong>
        </a>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ProjectCard from '~/components/ProjectCard.vue'
import { projectCategories as workCategories } from '~/data/work'

const isSubmitting = ref(false)
const isSuccess = ref(false)

const submitForm = async (e: Event) => {
  isSubmitting.value = true
  const form = e.target as HTMLFormElement
  const formData = new FormData(form)
  
  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString()
    })
    isSuccess.value = true
  } catch (error) {
    console.error('Form submission error:', error)
    alert('Oops! There was a problem submitting your message.')
  } finally {
    isSubmitting.value = false
  }
}



const titles = ['FULL-STACK DEVELOPMENT', 'MOTION DESIGN', 'VIDEO EDITING', 'VISUAL STORYTELLING', 'DIRECTION']
const activeTitle = ref(titles[0])
let titleTimer: ReturnType<typeof setInterval> | undefined

const cards = [
  { id: 1, mark: '01', title: 'FULL-STACK DEV', meta: 'Frontend / backend', screen: '#fffdd0', stripe: '#f2bc00' },
  { id: 2, mark: '02', title: 'MOTION DESIGN', meta: 'Animation / timing', screen: '#d8e7ee', stripe: '#5db5c5' },
  { id: 3, mark: '03', title: 'VIDEO EDITING', meta: 'Cut / sound / pace', screen: '#f0d9d1', stripe: '#e85e49' },
  { id: 4, mark: '04', title: 'VISUAL STORIES', meta: 'Concept / direction', screen: '#e0e3c5', stripe: '#a5b83a' },
  { id: 5, mark: '05', title: 'DIRECTING', meta: 'Story / production', screen: '#e4d9ed', stripe: '#9b6dc1' },
]

const projectCategories = workCategories
const activeCategory = ref<string | null>('video-editing')

function toggleCategory(slug: string) {
  activeCategory.value = activeCategory.value === slug ? null : slug
}

const skills = Array.from(new Set([
  'Vue.js',
  'Nuxt.js',
  'Tailwind CSS',
  'JavaScript',
  'Node.js',
  'Full-Stack Development',
  'UI/UX Design',
  'Figma',
  'Video Editing',
  'Adobe Premiere Pro',
  'DaVinci Resolve',
  'Python',
  'Java',
  'C++',
  'Data Structures',
  'REST APIs',
  'Git & GitHub'
]))

onMounted(() => {
  titleTimer = setInterval(() => { 
    activeTitle.value = titles[(titles.indexOf(activeTitle.value) + 1) % titles.length] 
  }, 2200)
})

onUnmounted(() => { 
  if (titleTimer) clearInterval(titleTimer) 
})
</script>

<style scoped>
.hero-page { background: transparent; color: #ffffff; }
.hero-section { position: relative; min-height: 100svh; overflow: hidden; isolation: isolate; }



.hero-grid {
  position: absolute; inset: 0; opacity: 0.1;
  background-image: linear-gradient(#1111 1px, transparent 1px), linear-gradient(90deg, #1111 1px, transparent 1px);
  background-size: 72px 72px;
}


.card-window {
  position: absolute; inset: 22% 0 15%; z-index: 1; overflow: hidden;
  display: flex; align-items: center;
  mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
}
.card-track {
  display: flex; width: max-content; gap: 0;
  animation: move-cards 14s linear infinite; animation-play-state: running; will-change: transform;
}
.card-group { display: flex; flex: none; width: max-content; gap: 28px; padding-right: 28px; }

/* Added Organic Floating Motion combined with rotations via CSS Variables */
.moving-card {
  display: block; flex: 0 0 300px; height: 200px; color: #111; perspective: 700px;
  filter: drop-shadow(0 8px 12px rgba(0,0,0,0.4));
  --rot: 0deg;
  animation: float 6s ease-in-out infinite;
}
.moving-card:nth-child(3n+1) { --rot: -3deg; animation-delay: 0s; }
.moving-card:nth-child(3n+2) { --rot: 2deg; animation-delay: -2s; }
.moving-card:nth-child(3n) { --rot: -1deg; animation-delay: -4s; }

.card-shell {
  position: relative;
  width: 300px; height: 200px;
  background: #252525;
  clip-path: polygon(4% 0, 96% 0, 100% 8%, 100% 100%, 0 100%, 0 8%);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s;
}

.moving-card:hover .card-shell, .moving-card:focus-visible .card-shell {
  transform: translateY(-16px) scale(1.05); filter: brightness(1.15);
}

.card-top, .card-bottom { display: flex; justify-content: space-between; padding: 0 8px; }
.screw {
  display: grid; place-items: center; width: 12px; height: 12px; margin: 8px;
  border: 1px solid #111; border-radius: 50%; background: #d3d3d3; font-size: 11px; line-height: 1;
}

.card-screen {
  width: 240px; height: 115px; margin: 4px auto 0;
  border-radius: 6px; background: var(--screen);
  clip-path: polygon(4% 0, 96% 0, 100% 12%, 100% 100%, 0 100%, 0 12%);
  overflow: hidden;
  display: flex; flex-direction: column; align-items: center;
}

.screen-line {
  display: block; width: 210px; height: 1px;
  margin-top: 10px; background: rgba(0,0,0,0.8);
}

.screen-stripe {
  display: flex; align-items: center; justify-content: flex-start;
  width: 100%; height: 44px; margin-top: auto; padding-left: 20px; gap: 10px;
  background: var(--stripe);
}
.screen-stripe strong { margin-left: 10px; font-size: 16px; font-weight: 900; }

.tape {
  flex-shrink: 0; width: 44px; height: 24px;
  background: #252525; border-radius: 2px;
}
.reel {
  flex-shrink: 0; width: 24px; height: 24px;
  border: 2px dashed #fff; border-radius: 50%; background: #252525;
  box-shadow: 0 0 0 4px #fff; box-sizing: border-box;
  animation: run 2s linear infinite;
}

.screen-footer {
  width: 100%; height: 20px; display: flex; align-items: center; justify-content: center;
  background: #f15a25; font-size: 9px; font-weight: 700; color: #fff;
}

.card-bottom span {
  width: 8px; height: 8px; margin-top: 6px;
  border-radius: 50%; background: #bebebe;
}
.card-bottom span:nth-child(2n) { border-radius: 2px; }

.hero-title {
  position: absolute; top: 8%; right: 0; left: 0; z-index: 3;
  text-align: center; pointer-events: none;
}
.hero-title h1 { margin: 0; font-size: clamp(52px, 6vw, 98px); font-weight: 900; letter-spacing: -0.09em; line-height: 0.9; }

/* Snappier Vertical Typography Transition */
.title-enter-active, .title-leave-active { transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
.title-enter-from { opacity: 0; transform: translateY(24px); }
.title-leave-to { opacity: 0; transform: translateY(-24px); }

.hero-caption { position: absolute; bottom: 18%; z-index: 5; font-size: 17px; font-weight: 700; line-height: 1.05; }
.left-caption { left: 25%; }
.right-caption { right: 25%; text-align: right; }

.explore-button {
  position: absolute; bottom: 0; left: 50%; z-index: 6;
  display: flex; width: 74px; height: 88px; align-items: center; flex-direction: column;
  padding-top: 12px; background: #050505; color: #fff; font-size: 10px; font-weight: 700;
  transform: translateX(-50%); text-decoration: none;
}
.explore-button span { margin-top: 6px; font-size: 25px; transition: transform 0.3s; }
.explore-button:hover span { transform: translateY(4px); }

/* Keyframes for new floating effect and seamless scrolling */
@keyframes move-cards { from { transform: translate3d(0,0,0); } to { transform: translate3d(-50%,0,0); } }
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(var(--rot)); }
  50% { transform: translateY(-12px) rotate(var(--rot)); }
}
@keyframes run { to { transform: rotate(360deg); } }

@media (max-width: 760px) {
  .hero-title { top: 11%; }
  .hero-title h1 { font-size: clamp(38px, 11vw, 70px); }
  .card-window { inset: 34% 0 20%; }
  .card-group { gap: 18px; padding-right: 18px; }
  .moving-card { flex-basis: 220px; height: 148px; }
  .card-shell { width: 220px; height: 148px; transform: scale(0.733); transform-origin: top left; }
  .moving-card:hover .card-shell, .moving-card:focus-visible .card-shell { transform: translateY(-12px) scale(0.76); }
  .hero-caption { bottom: 16%; font-size: 10px; }
  .left-caption { left: 8%; }
  .right-caption { right: 8%; }
  .explore-button { width: 62px; height: 74px; font-size: 8px; }
}

@media (prefers-reduced-motion: reduce) {
  .reel { animation-play-state: paused; }
  .title-enter-active, .title-leave-active { transition: none; }
}
.skill-title{display:block;width:210px;margin:8px 0 0;font-size:12px;line-height:1;letter-spacing:.06em;text-align:center}

.projects-section{--work-blue:#1111ee;--work-ink:#09091b;--work-muted:#49495b;background:transparent;color:#fff;padding:clamp(5rem,9vw,8rem) max(1.25rem,calc((100% - 1180px)/2)) clamp(2rem,4vw,3rem);}.projects-heading{max-width:760px;margin:0 auto clamp(4rem,7vw,6rem);text-align:center}.projects-heading p,.category-title p{margin:0 0 .85rem;font-size:.7rem;font-weight:800;letter-spacing:.18em;text-transform:uppercase}.projects-heading h2{margin:0;font-size:clamp(4rem,11vw,9rem);line-height:.82;letter-spacing:-.09em}.projects-heading>span{display:block;max-width:430px;margin:1.5rem auto 0;font-size:clamp(.95rem,1.5vw,1.1rem);line-height:1.35;font-weight:600}.skills-strip{position:relative;width:105vw;left:50%;transform:translateX(-50%);margin-top:calc(clamp(5rem,9vw,8rem) * -1);margin-bottom:clamp(3rem,6vw,5rem);padding:1.75rem 0;background:transparent;z-index:2;display:flex;align-items:center}.skills-strip::before{content:"";position:absolute;top:10px;left:0;right:0;bottom:10px;background:var(--work-blue);z-index:-1;filter:url(#paper-sticker)}.skills-strip__track{display:flex;width:max-content;animation:skills-marquee 42s linear infinite;will-change:transform}.skills-strip__group{display:flex;flex:none;align-items:center;gap:.65rem;padding-right:.65rem}.skill-chip{display:inline-flex;align-items:center;min-height:2.1rem;padding:.5rem .8rem;border:none;border-radius:.25rem;color:var(--work-blue);font-size:.68rem;font-weight:800;letter-spacing:.04em;line-height:1;white-space:nowrap;background:white}.skill-chip::before{content:"";width:.35rem;height:.35rem;margin-right:.55rem;border-radius:50%;background:var(--work-blue)}.work-options{display:flex;gap:.6rem;width:100%;margin:0 0 clamp(3rem,5vw,4.5rem);padding-bottom:.75rem;overflow-x:auto;scrollbar-width:none}.work-options::-webkit-scrollbar{display:none}.work-option{display:flex;flex:1 1 0;align-items:center;gap:.7rem;min-width:175px;padding:.9rem 1rem;border:1px solid rgba(255,255,255,.45);border-radius:.35rem;color:#fff;font-size:.8rem;font-weight:900;text-decoration:none;text-transform:uppercase;transition:background-color .25s ease,color .25s ease,border-color .25s ease,transform .25s ease}.work-option:hover{background:#fff;color:var(--work-blue);border-color:#fff;transform:translateY(-3px)}.work-option:focus-visible{outline:2px solid #fff;outline-offset:4px}.work-option__index{opacity:.62;font-size:.65rem}.work-option__arrow{margin-left:auto;font-size:1.1rem;transition:transform .25s ease}.work-option:hover .work-option__arrow{transform:translate(3px,3px)}.category-rail{display:flex;gap:clamp(1rem,3vw,2rem);width:100%;overflow-x:auto;scroll-behavior:smooth;scroll-snap-type:x mandatory;scrollbar-width:none;overscroll-behavior-inline:contain}.category-rail::-webkit-scrollbar{display:none}.project-category{flex:0 0 min(100%,1040px);min-width:0;padding-top:clamp(2.5rem,5vw,4rem);border-top:1px solid rgba(255,255,255,.45);scroll-snap-align:start;scroll-margin-top:1.5rem}.category-heading{display:flex;align-items:end;justify-content:space-between;gap:2rem;margin-bottom:2rem}.category-title p{opacity:.7}.category-title h3{margin:0;font-size:clamp(2.4rem,5vw,4.7rem);line-height:.88;letter-spacing:-.075em}.category-heading>span{max-width:330px;padding-bottom:.2rem;font-size:.95rem;line-height:1.35;font-weight:600;text-align:right}.projects-grid{display:grid;grid-template-columns:repeat(2,minmax(0,360px));justify-content:center;gap:clamp(1rem,3vw,2rem)}@keyframes skills-marquee{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}@media(max-width:700px){.work-options{margin-bottom:3rem}.work-option{flex:0 0 auto}.category-heading{display:block}.category-heading>span{display:block;margin-top:1rem;text-align:left}.projects-grid{grid-template-columns:minmax(0,360px)}.project-category{flex-basis:100%}}@media(prefers-reduced-motion:reduce){.category-rail{scroll-behavior:auto}.skills-strip__track{animation-play-state:paused}.work-option,.work-option__arrow{transition:none}}
 .projects-grid{display:flex;justify-content:flex-start;gap:clamp(1rem,3vw,2rem);width:100%;padding:0 .25rem .9rem;overflow-x:auto;scroll-behavior:smooth;scroll-snap-type:x mandatory;scrollbar-width:none;overscroll-behavior-inline:contain}.projects-grid::-webkit-scrollbar{display:none}.projects-grid:deep(.project-card){flex:0 0 min(360px,calc(100vw - 2.5rem));scroll-snap-align:start}@media(prefers-reduced-motion:reduce){.projects-grid{scroll-behavior:auto}}
 .category-list{display:block;width:100%}.category-list .project-category{flex:none}.category-list .project-category+.project-category{margin-top:clamp(5rem,10vw,9rem)}
  .work-option{appearance:none;background:transparent;font:inherit;cursor:pointer;text-align:left}.work-option--active{background:#fff;color:var(--work-blue);border-color:#fff}.work-option--active .work-option__arrow{transform:rotate(90deg)}

.contact-section{padding:clamp(2.5rem,5vw,4rem) max(1.25rem,calc((100% - 1180px)/2)) clamp(6rem,12vw,10rem);background:transparent;color:#fff;text-align:center}.contact-content{max-width:800px;margin:0 auto;display:flex;flex-direction:column;align-items:center;gap:1.5rem}.contact-sub{font-size:.85rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;margin:0;opacity:.7}.contact-title{font-size:clamp(3.5rem,9vw,7.5rem);line-height:.85;letter-spacing:-.07em;margin:0 0 2rem;font-weight:900}

.contact-form{width:100%;max-width:560px;display:flex;flex-direction:column;gap:1.25rem;text-align:left;margin-top:1rem;margin-bottom:2rem}.form-input{width:100%;padding:1.25rem 1.5rem;background:transparent;border:1px solid rgba(255,255,255,0.25);border-radius:.35rem;color:#fff;font-family:inherit;font-size:.9rem;font-weight:600;letter-spacing:.05em;transition:border-color .3s ease,background .3s ease}.form-input::placeholder{color:rgba(255,255,255,0.4)}.form-input:focus{outline:none;border-color:rgba(255,255,255,0.9);background:rgba(255,255,255,0.03)}.form-textarea{resize:vertical;min-height:140px;line-height:1.5}.form-submit{display:inline-flex;align-items:center;justify-content:space-between;width:100%;padding:1.4rem 1.5rem;background:#fff;color:var(--work-blue, #1111ee);font-weight:900;font-size:1.1rem;letter-spacing:.05em;border-radius:.35rem;border:none;cursor:pointer;transition:transform .3s ease,background .3s ease,opacity .3s ease}.form-submit:hover:not(:disabled){transform:translateY(-4px);background:#f4f4f4}.form-submit:disabled{opacity:0.7;cursor:not-allowed}.form-submit .arrow{transition:transform .3s ease;font-size:1.2em;line-height:1}.form-submit:hover:not(:disabled) .arrow{transform:translate(4px,-4px)}.contact-email-alt{font-size:.9rem;color:rgba(255,255,255,0.6);text-decoration:none;transition:color .3s ease}.contact-email-alt:hover{color:#fff}
.contact-success{width:100%;max-width:560px;margin:3rem auto 2rem;padding:3rem 2rem;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.1);border-radius:.5rem;display:flex;flex-direction:column;align-items:center;gap:1rem;animation:fade-in .5s ease forwards}.success-icon{display:grid;place-items:center;width:64px;height:64px;border-radius:50%;background:#fff;color:var(--work-blue, #1111ee);font-size:2rem;font-weight:900;margin-bottom:.5rem}.contact-success h3{margin:0;font-size:1.8rem;font-weight:900;letter-spacing:.05em}.contact-success p{margin:0;color:rgba(255,255,255,0.7);font-size:1.05rem;font-weight:500}.success-reset{margin-top:1.5rem;background:transparent;border:none;color:#fff;font-size:.8rem;font-weight:800;letter-spacing:.1em;text-decoration:underline;text-underline-offset:4px;cursor:pointer;opacity:.6;transition:opacity .25s ease}.success-reset:hover{opacity:1}
@keyframes fade-in{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
</style>
