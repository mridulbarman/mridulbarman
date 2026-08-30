<template>
  <main class="about-page">
    <section class="about-section">
      <div class="about-container">
        <div class="about-image">
          <img src="/images/about-portrait.svg" alt="Mridul Barman" />
        </div>
        <div class="about-content">
          <h2 class="about-headline">Code, Cameras & Poems.</h2>
          <div class="about-letter">
            <p>I’m Mridul. I study Computer Science at the University of North Bengal, while somewhere between code, cameras, timelines, and notebooks, I’m slowly figuring out what I really want to make.</p>
            <p>I’m a developer and visual editor, but outside the screen full of code, you’ll probably find me buried in an editing timeline, trying to make a shot feel just right. I love films, and I love the process behind them: the framing, the rhythm, the sound, the silence, and all those tiny choices that can turn a scene into a memory.</p>
            <p>I make videos. I experiment with filmmaking. I mess around with ideas that sometimes work beautifully and sometimes absolutely do not.</p>
            <p>And then there are poems. I write them when ordinary sentences feel too small. A thought, a person, a place, a late night, a feeling that refuses to leave; sometimes that’s enough to fill a page.</p>
            <p>I suppose I’m interested in stories, regardless of the medium.</p>
            <p class="poetic-stanza">
              A piece of code can solve a problem.<br>
              A film can hold a moment.<br>
              A poem can hold a feeling.
            </p>
            <p>I like all three. There’s still a lot I want to learn, and probably even more I want to make. I don’t have everything figured out, and honestly, I’m not sure I want to.</p>
            <p>Maybe someday there’ll be a book with my name on it. But that’s a story for another day.</p>
            <p>For now, welcome to my little corner of the internet.</p>
          </div>
          <div class="about-signature">
            <img src="/images/logo.png" alt="Mridul Barman Logo" class="signature-logo" />
            <p>Mridul Barman</p>
          </div>
        </div>
      </div>
    </section>

    <section class="credentials-section">
      <div class="credentials-grid">
        <div class="credential-group">
          <h3 class="credential-heading">EDUCATION</h3>
          <ul class="credential-list">
            <li>
              <strong>Bachelor of Science - BS, Computer Science</strong>
              <span>University of North Bengal (NBU)</span>
            </li>
          </ul>
        </div>
        <div class="credential-group">
          <h3 class="credential-heading">CERTIFICATIONS</h3>
          <ul class="credential-list">
            <li>
              <strong>Adobe Premiere Pro</strong>
              <span>Udemy</span>
              <a href="https://www.udemy.com/certificate/UC-33acc329-e348-45d1-8e5f-aa0ad63c65a4/" target="_blank" rel="noopener noreferrer" class="view-cert-btn">
                View Certificate ↗
              </a>
            </li>
            <li>
              <strong>Adobe After Effects</strong>
              <span>Udemy</span>
              <a href="https://www.udemy.com/certificate/UC-d74235b8-c659-4236-b100-c3fa60be7d06/" target="_blank" rel="noopener noreferrer" class="view-cert-btn">
                View Certificate ↗
              </a>
            </li>
          </ul>
        </div>
        <div class="credential-group">
          <h3 class="credential-heading">LANGUAGES</h3>
          <ul class="credential-list">
            <li>
              <strong>English</strong>
              <span>Full Professional</span>
            </li>
            <li>
              <strong>Hindi</strong>
              <span>Native or Bilingual</span>
            </li>
            <li>
              <strong>Bengali</strong>
              <span>Native or Bilingual</span>
            </li>
            <li>
              <strong>Kamtapuri (Rajbongshi)</strong>
              <span>Native or Bilingual</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.about-section {
  width: 100%;
  padding: clamp(5rem, 9vw, 8rem) max(1.25rem, calc((100% - 1180px)/2));
  background: transparent;
  color: #fff;
}
.about-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(3rem, 6vw, 5rem);
  align-items: start;
}
@media (min-width: 900px) {
  .about-container {
    grid-template-columns: 4fr 5fr;
  }
}
.about-image img {
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  object-fit: cover;
  aspect-ratio: 3/4;
}
.about-headline {
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1;
  letter-spacing: -.05em;
  margin: 0 0 2rem;
  font-weight: 800;
}
.about-letter {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  line-height: 1.6;
  opacity: 0.85;
}
.about-signature {
  margin-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 2rem;
}
.signature-logo {
  height: clamp(50px, 6vw, 70px);
  width: auto;
  max-width: 250px;
  object-fit: contain;
  margin-bottom: 1rem;
}
.about-signature p {
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  opacity: 0.6;
}
.credentials-section {
  width: 100%;
  padding: clamp(3rem, 6vw, 6rem) max(1.25rem, calc((100% - 1180px)/2));
  padding-top: 0;
  color: #fff;
}
.credentials-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(3rem, 6vw, 5rem);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: clamp(3rem, 6vw, 6rem);
}
@media (min-width: 768px) {
  .credentials-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}
.credential-heading {
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin: 0 0 2rem;
  opacity: 0.7;
}
.credential-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.credential-list li {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.credential-list strong {
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 900;
  line-height: 1.2;
  letter-spacing: -0.02em;
}
.credential-list span {
  font-size: 0.95rem;
  opacity: 0.7;
  font-weight: 500;
}
.view-cert-btn {
  display: inline-flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #fff;
  text-decoration: none;
  margin-top: 0.25rem;
  padding: 0.35rem 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 999px;
  width: fit-content;
  transition: all 0.2s ease;
}
.view-cert-btn:hover {
  background: #fff;
  color: var(--work-blue, #1111ee);
  border-color: #fff;
}
</style>
