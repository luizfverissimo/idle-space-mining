<script>
  import "../app.css";
</script>

<main class="w-full min-h-screen flex flex-col items-center bg-base100">
  <section class="h-[32px] w-full bg-neutral flex justify-center items-center">
    <nav class="w-full max-w-lg px-2">
      <a href="/" class="font-exo">Idle Space Mining</a>
    </nav>
  </section>
  <section class="w-full max-w-lg px-2">
    <slot />
  </section>
  <nav class="btm-nav btm-nav-lg">
    <button class="text-accent active">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
      <span class="btm-nav-label">Planet</span>
    </button>
    <button class="text-accent">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span class="btm-nav-label">Ships</span>
    </button>
  </nav>
</main>