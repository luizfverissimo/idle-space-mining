<script>
  import { SvelteToast, toast } from '@zerodevx/svelte-toast'
	import MoneyCard from "../components/MoneyCard.svelte";
	import { incrementAmount, money, ships, planet } from "../stores/gameLogic";
	import { calculateOfflineMoney, loadFromLocalStorage, saveToLocalStorage } from "../utils/saving";
	import { onMount } from "svelte";
	import { abbreviateNumber } from '../utils/stringFormatter';

  import "../app.css";

  onMount(() => {
    const loadData = loadFromLocalStorage(window)

    if (loadData) {
      const offlineMoney = calculateOfflineMoney(loadData.date, loadData.incrementAmount)

      $planet = loadData.planet
      $incrementAmount = loadData.incrementAmount
      $money = loadData.money + offlineMoney
      $ships = loadData.ships

      toast.push(`Welcome back! You receive $${abbreviateNumber(offlineMoney)}`)
    }

    setInterval(() => {
      const date =  Math.floor(Date.now() / 1000)
      saveToLocalStorage(window, {
        planet: $planet,
        incrementAmount: $incrementAmount,
        money: $money,
        ships: $ships,
        date: date
      })
    }, 5000)
  })
</script>

<svelte:head>
  <title>Idle Space Mining</title>
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
</svelte:head>

<SvelteToast />
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