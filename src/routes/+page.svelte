<script>
	import { ships, build } from "../stores/gameLogic";
	import MoneyCard from "../components/MoneyCard.svelte";
  import { planetGenerator } from "../utils/planetUtils";

  const planet = planetGenerator()

  let progressTimerValue = 0

  setInterval(() => {
    if (progressTimerValue >= 100) {
      progressTimerValue = 0
      return
    }
    progressTimerValue += 1
  }, 10)


</script>

<MoneyCard />

<div id='planet-container' class="w-full flex flex-col items-center justify-center h-[400px] flex-1 relative">
  <div
    class='rounded-full'
    style={`width: ${planet.size}px; height: ${planet.size}px; background-color: ${planet.color};`}  
  />
</div>

<div class="flex flex-wrap justify-center gap-2">
  <button class="btn" on:click={() => build(ships[0])}>build small ship</button>
  <button class="btn" on:click={() => build(ships[1])}>build medium ship</button>
  <button class="btn" on:click={() => build(ships[2])}>build heavy ship</button>
  <button class="btn" on:click={() => build(ships[3])}>build Orbital refinery</button>
  <button class="btn" on:click={() => build(ships[4])}>build Stelar refinery</button>
</div>
  