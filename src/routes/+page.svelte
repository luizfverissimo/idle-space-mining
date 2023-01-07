<script>
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

<div class="flex flex-col items-center gap-2 mt-4 bg-neutral w-fit mx-auto p-4 rounded-lg">
  <h2 class="font-exo font-black text-primary text-4xl">$ 1.234 M</h2>
  <progress class="progress progress-primary w-56" value={progressTimerValue} max="100"></progress>
  <span class="font-exo text-primary"> $ 100 /sec</span>
</div>

<div id='planet-container' class="w-full flex flex-col items-center justify-center h-[400px] flex-1 relative">
  <div
    class='rounded-full'
    style={`width: ${planet.size}px; height: ${planet.size}px; background-color: ${planet.color};`}  
  />
</div>
