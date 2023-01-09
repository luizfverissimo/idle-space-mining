<script>
	import MoneyCard from "../components/MoneyCard.svelte";
  import "../app.css";
</script>

<main class="w-full min-h-screen flex flex-col items-center bg-base100">
  <section class="h-[32px] w-full bg-neutral flex justify-center items-center">
    <nav class="w-full max-w-lg px-2">
      <a href="/" class="font-exo">Idle Space Mining</a>
    </nav>
  </section>
  <MoneyCard />
  <section class="w-full max-w-lg px-2">
    <slot />
  </section>
  <nav class="w-full justify-center flex fixed bottom-4 gap-4">
    <a href="/" class="btn btn-lg font-exo" >Planet</a>
    <a href="/build" class="btn btn-lg font-exo" >Ships</a>
  </nav>
</main>